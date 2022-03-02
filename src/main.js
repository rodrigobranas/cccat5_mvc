const express = require("express");

const app = express();

app.use(express.json());

app.use("/", require("./controller/orderController"));
app.use("/", require("./controller/itemController"));

app.listen(3000);
