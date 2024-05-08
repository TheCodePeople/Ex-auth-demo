const express = require("express");
const router = express.Router();
const { signIn, signup } = require("../users/user.controllers");
const passport = require("passport");

router.post("/signup", signup);
router.post(
  "/sign-in",
  passport.authenticate("local", { session: false }),
  signIn
);

module.exports = router;
