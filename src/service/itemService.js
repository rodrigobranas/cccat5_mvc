const itemData = require("../data/itemData");

exports.getItems = async function () {
	const items = await itemData.getItems();
	return items;
};
