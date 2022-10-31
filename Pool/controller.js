const express = require("express");
const cron = require("node-cron");
const poolRoutes = express.Router();
const bodyParser = require("body-parser");
const PoolModal = require("./schema");

poolRoutes.use(bodyParser.json());
//// server checking
poolRoutes.route("/").get(async (req, res) => {
  res.status(200).send("Server is Running on Full Speed");
});

///add pool
poolRoutes.route("/addPool").post(async (req, res) => {
  let poolRecord = new PoolModal(req.body);
  await poolRecord
    .save()
    .then(() => {
      res.status(200).json({ poolRecord: "Record save successfully" });
    })
    .catch((err) => {
      res.status(400).send("adding new record failed" + err);
    });
});
// get all pool
poolRoutes.route("/getAllPairs").get(async (req, res) => {
  PoolModal.find((err, pool) => {
    if (err) {
      res.status(400).send("error :" + err);
    } else {
      res.status(200).json(pool);
    }
  });
});
exports.checkPoolLength = () => {
  cron.schedule("*/1 * * * *", () => {
    console.log("running a task every one minutes");
  });
};
module.exports = poolRoutes;
