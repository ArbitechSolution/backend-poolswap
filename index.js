const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const Connection = require("./Pool/server");
const PoolModal = require("./Pool/schema");
const PoolRoutes = require("./Pool/controller");
// const { CheckPoolLength } = require("./Pool/controller");
const port = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", PoolRoutes);

app.listen(port, () => {
  PoolModal();
  // CheckPoolLength();
  Connection();
  console.log("server is running on port : " + port);
});
