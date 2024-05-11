const express = require("express");
const {
  getAllProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../products/product.controllers");
const passport = require("passport");

const router = express.Router();

router.get("/", getAllProducts);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  createProduct
);

router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  updateProduct
);

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  deleteProduct
);

module.exports = router;
