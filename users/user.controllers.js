const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generateToken = (userCredentials) => {
  const payload = {
    id: userCredentials._id,
    username: userCredentials.username,
    email: userCredentials.email,
    firstName: userCredentials.firstName,
    lastName: userCredentials.lastName,
    exp: process.env.EXP,
  };
  const token = jwt.sign(payload, process.env.SECRET_KEY);
  return token;
};

const signup = async (req, res, next) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    req.body.password = hashedPassword;
    const newUser = await User.create(req.body);
    const generatedToken = generateToken(newUser);
    res.status(201).json({ generatedToken });
  } catch (error) {
    next(error);
  }
};

const signIn = async (req, res, next) => {
  try {
    const payload = req.user;
    const generatedToken = generateToken(payload);
    res.status(201).json({ generatedToken });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signup,
  signIn,
};
