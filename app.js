const dotenv = require("dotenv");
dotenv.config();

const express = require("express");

const connectDB = require("./database");

const productRoutes = require("./products/product.routes");
const userRoutes = require("./users/user.routes");

const notFoundPage = require("./middlewares/notFoundPage");
const errorHandling = require("./middlewares/errorHandling");

const app = express();
const PORT = 8000;

connectDB();

app.use(express.json());

app.use("/auth", userRoutes);
app.use("/products", productRoutes);

app.use("*", notFoundPage);
app.use(errorHandling);

app.listen(PORT, () => {
  console.log(`the server is running on port ${PORT}`);
});
