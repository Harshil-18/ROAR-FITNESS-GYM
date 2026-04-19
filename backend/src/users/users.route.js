const express = require("express");
const router = express.Router();

const { createUser, getUser } = require("../users/users.controller");
const authMiddleware = require("../../middleware/middleware");

router.post("/create", authMiddleware, createUser);
router.get("/get-user", authMiddleware, getUser);

module.exports = router;