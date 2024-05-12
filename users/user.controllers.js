const User = require("../models/User");

const signup = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({ newUser });
  } catch (error) {
    next(error);
  }
};

const signIn = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signup,
  signIn,
};
