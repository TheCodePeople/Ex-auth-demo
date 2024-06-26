const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
    required: true,
    min: [8, "Password should be more or qual than 8 chars"],
  },
});

const User = model("User", UserSchema);
module.exports = User;
