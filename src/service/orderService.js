const itemData = require("../data/itemData");
const couponData = require("../data/couponData");
const orderData = require("../data/orderData");
const freightService = require("./freightService");

exports.saveOrder = async function (input) {
	const issueDate = new Date();
	const sequence = 1;
	let code = `${issueDate.getFullYear()}${new String(sequence).padStart(8, "0")}`;
	let total = 0;
	let freight = 0;
	for (orderItem of input.orderItems) {
		const [item] = await itemData.getItem(orderItem.idItem);
		total += parseFloat(item.price) * orderItem.quantity;
		const volume = freightService.calculateVolume(item);
		const density = item.weight/volume;
		const itemFreight = volume * 1000 * (density/100) * orderItem.quantity;
		orderItem.price = item.price;
		freight += itemFreight; 
	}
	if (input.coupon) {
		const [coupon] = await couponData.getCoupon(input.coupon);
		total -= (parseFloat(coupon.percentage) * total)/100;
	}
	total += freight;
	const order = await orderData.saveOrder(code, input.cpf, freight, sequence, total);
	for (const orderItem of input.orderItems) {
		await orderData.saveOrderItem(order.id_order, orderItem.idItem, orderItem.price, orderItem.quantity);
	}
	const output = {
		total
	};
	return output;
};
