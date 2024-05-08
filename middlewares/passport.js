const User = require("../models/User");

const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;
const JWTStrategy = require("passport-jwt").Strategy;
const { fromAuthHeaderAsBearerToken } = require("passport-jwt").ExtractJwt;

exports.localStrategy = new LocalStrategy(async (username, password, done) => {
  try {
    const user = await User.findOne({ username: username });

    const comparedPassword = user
      ? await bcrypt.compare(password, user.password)
      : false;
    comparedPassword ? done(null, user) : done(null, false);
  } catch (error) {
    done(error);
  }
});

exports.jwtStrategy = new JWTStrategy(
  {
    jwtFromRequest: fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY,
  },
  async (jwtPayload, done) => {
    console.log("🚀 ~ jwtPayload:", jwtPayload);
    if (Date.now() > jwtPayload.exp) {
      done(null, false);
    } else {
      const user = await User.findById(jwtPayload.id);
      done(null, user);
    }
  }
);
