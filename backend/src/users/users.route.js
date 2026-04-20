const express = require("express");
const router = express.Router();

const { createUser, getUser } = require("../users/users.controller");

router.post("/create", createUser);
router.get("/get-user", getUser);

module.exports = router;