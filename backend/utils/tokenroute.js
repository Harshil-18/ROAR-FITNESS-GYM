const express = require("express");
const router = express.Router();

const { login } = require("./tokenHandle");

router.get("/login", login);

module.exports = router;