const database = require("../infra/database");

exports.getCoupon = function (code) {
	return database.query("select * from ccca.coupon where code = $1", [code]);
};
