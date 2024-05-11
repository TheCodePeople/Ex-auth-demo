const express = require("express");
const router = express.Router();

const passport = require("passport");
const { signIn, signup } = require("../users/user.controllers");

router.post("/signup", signup);

router.post(
  "/sign-in",
  passport.authenticate("local", { session: false }),
  signIn
);

module.exports = router;
