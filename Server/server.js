const express = require("express");
const cors = require("cors");
const port = 8888;
require('dotenv').config()

var corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
  credentials: true,
};

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/orders", require("./paypal/router"));

app.use("/v1/dummy", (req, res) => {
  res.send({ text: "test dummy" });
});

app.listen(port, () => {
  console.log(`Serverul rulează la http://localhost:${port}`);
});
