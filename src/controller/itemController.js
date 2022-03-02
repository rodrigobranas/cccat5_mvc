const express = require("express");
const itemService = require("../service/itemService");
const router = express.Router();

router.get("/items", async function (req, res) {
	const items = await itemService.getItems();
	res.json(items);
});

module.exports = router;
