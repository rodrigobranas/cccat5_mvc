const axios = require("axios");

test("Deve testar a API /items", async function () {
	const response = await axios({
		url: "http://localhost:3000/items",
		method: "get"
	});
	const items = response.data;
	expect(items).toHaveLength(3);
});

test("Deve testar a API /orders", async function () {
	const input = {
		cpf: "935.411.347-80",
		orderItems: [
			{ idItem: 1, quantity: 1},
			{ idItem: 2, quantity: 1},
			{ idItem: 3, quantity: 3}
		],
		coupon: "VALE20"
	};
	const response = await axios({
		url: "http://localhost:3000/orders",
		method: "post",
		data: input
	});
	const output = response.data;
	expect(output.total).toBe(5132);
});
