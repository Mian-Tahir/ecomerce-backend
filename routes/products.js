var express = require("express");
var router = express.Router();
var {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/productController");
const productcategoryController = require("../controller/productcategoryController");

/* GET Products listing. */
//
router.get("/", getProducts);
router.get("/getProduct/:id", getProductById);

// categoryId,userId,
// {
// userId:
// product model
// categoryId:
// }
router.post("/createProduct", createProduct);
router.put("/updateProduct/:id", updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);
router.post("/productCategory", productcategoryController.createProductCategory);
module.exports = router;
