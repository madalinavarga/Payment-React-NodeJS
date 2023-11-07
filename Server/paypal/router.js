const express = require("express");
const { createOrder, captureOrder } = require("./controller");

const router = express.Router();

router.post("/", createOrder);
router.post("/:orderID/capture", captureOrder);


module.exports = router;
