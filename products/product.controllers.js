const Product = require("../models/Product");

const getAllProducts = async (req, res, next) => {
  try {
    const allProducts = await Product.find({});
    res.status(200).json({ allProducts });
  } catch (error) {
    next(error);
  }
};
const createProduct = async (req, res, next) => {
  try {
    const productData = req.body;
    const newProduct = await Product.create(productData);

    res.status(201).json({ newProduct });
  } catch (error) {
    next(error);
  }
};
const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (deletedProduct)
      return res.status(200).json({ message: "Deleted successfully" });
    else res.status(404).json({ message: "Product not found" });
  } catch (error) {
    next(error);
  }
};
const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newData = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(id, newData, {
      new: true,
    });
    if (updatedProduct) return res.status(201).json({ updatedProduct });
    else res.status(404).json({ message: "Product not found" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProducts,
  createProduct,
  deleteProduct,
  updateProduct,
};
