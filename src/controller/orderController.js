const express = require("express");
const orderService = require("../service/orderService");
const router = express.Router();

router.post("/orders", async function (req, res) {
	const input = req.body;
	const output = await orderService.saveOrder(input);
	res.json(output);
});

module.exports = router;
