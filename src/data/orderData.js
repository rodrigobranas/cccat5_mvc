const database = require("../infra/database");

exports.saveOrder = function (code, cpf, freight, sequence, total) {
	return database.one("insert into ccca.order (code, cpf, freight, sequence, total) values ($1, $2, $3, $4, $5) returning *", [code, cpf, freight, sequence, total])
};

exports.saveOrderItem = function (idOrder, idItem, price, quantity) {
	return database.one("insert into ccca.order_item (id_order, id_item, price, quantity) values ($1, $2, $3, $4) returning *", [idOrder, idItem, price, quantity]);
};
