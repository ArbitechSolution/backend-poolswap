const express = require("express");
const { startPool } = require("../index");
const bodyParser = require("body-parser");
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.route("/startPool").get(startPool);

module.exports = router;
