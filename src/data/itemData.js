const database = require("../infra/database");

exports.getItems = function () {
	return database.query("select * from ccca.item", []);
};

exports.getItem = function (idItem) {
	return database.query("select * from ccca.item where id_item = $1", [idItem]);
};
