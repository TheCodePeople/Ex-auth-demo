const Product = require("../models/Product");

const getAllProducts = async (req, res, next) => {
  try {
    const allProducts = await Product.find({}).populate("user");
    res.status(200).json({ allProducts });
  } catch (error) {
    next(error);
  }
};

const createProduct = async (req, res, next) => {
  try {
    const newProduct = await Product.create(productData);
    res.status(201).json({ newProduct });
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const foundProduct = await Product.findById(id);

    if (!foundProduct)
      return res.status(404).json({ message: "Product not found" });
    const deletedProduct = await Product.deleteOne({ _id: foundProduct.id });
    if (deletedProduct)
      return res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newData = req.body;

    const foundProduct = await Product.findById(id);
    const updatedProduct = await Product.updateOne(
      { _id: foundProduct._id },
      newData,
      {
        new: true,
      }
    );
    if (updatedProduct)
      return res.status(201).json({ message: "Updated successfully" });
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
