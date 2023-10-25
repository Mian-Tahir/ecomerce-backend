var express = require("express");

const {
  getCarts,
  getUserCart,
  addProductToCart,
  removeProductFromCart,
  getProductInCart
} = require("../controller/cartController");
var router = express.Router();

/* GET Cart listing. */
router.get("/", getCarts);
router.get("/:userID", getUserCart);
router.get("/getProductsInCart/:cartID", getProductInCart);
router.post("/add/:userID/:productID", addProductToCart);
router.delete("/remove/:userID/:productID", removeProductFromCart);

module.exports = router;
