const express = require("express");

const {
  handleImageUpload,
  addProduct,
  editProduct,
  fetchAllProducts,
  deleteProduct,
} = require("../../controllers/admin/product-controllers");

const { upload } = require("../../helpers/cloudinary");

const route = express.Router();

route.post("/upload-image", upload.single("my_file"), handleImageUpload);
route.post("/add", addProduct);
route.put("/edit/:id", editProduct);
route.delete("/delete/:id", deleteProduct);
route.get("/get", fetchAllProducts);

module.exports = route;
