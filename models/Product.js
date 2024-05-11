const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const ProductSchema = new Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Product = model("Product", ProductSchema);
module.exports = Product;
