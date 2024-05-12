const express = require("express");
const router = express.Router();

const { signIn, signup } = require("../users/user.controllers");

router.post("/signup", signup);

router.post("/sign-in", signIn);

module.exports = router;
