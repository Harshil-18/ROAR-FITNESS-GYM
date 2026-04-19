const express = require("express");
const router = express.Router();

router.use("/auth", require("../../utils/tokenroute"));
router.use("/", require("../users/users.route"));

module.exports = router;
