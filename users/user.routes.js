const express = require("express");
const router = express.Router();

// const passport = require("passport");

const { signIn, signup } = require("../users/user.controllers");
const { authenticateUser } = require("../middlewares/auth");

router.post("/signup", signup);

router.post(
  "/sign-in",
  // passport.authenticate("local", { session: false }), // Using passport to authenticate users
  authenticateUser, // using jwt to authenticate users
  signIn
);

module.exports = router;
