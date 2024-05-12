const express = require("express");
const passport = require("passport");
const router = express.Router();

const {
  getAllProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../products/product.controllers");
const { authenticateToken } = require("../middlewares/auth");

router.get("/", getAllProducts);

router.post(
  "/",
  // passport.authenticate("jwt", { session: false }),
  authenticateToken,
  createProduct
);

router.put(
  "/:id",
  // passport.authenticate("jwt", { session: false }),
  authenticateToken,
  updateProduct
);

router.delete(
  "/:id",
  // passport.authenticate("jwt", { session: false }),
  authenticateToken,
  deleteProduct
);

module.exports = router;
