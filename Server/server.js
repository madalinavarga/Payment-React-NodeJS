const express = require("express");
const cors = require("cors");
const port = 3000;

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/v1/dummy", (req, res) => {
  res.send({text:"test dummy"});
});

app.listen(port, () => {
  console.log(`Serverul rulează la http://localhost:${port}`);
});
