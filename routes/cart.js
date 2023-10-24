var express = require("express");

const {
  getCarts,
  getUserCart,
  addProductToCart,
  removeProductFromCart,
} = require("../controller/cartController");
var router = express.Router();

/* GET Cart listing. */
router.get("/", getCarts);
router.get("/:userID", getUserCart);
router.post("/add/:userID/:productID", addProductToCart);
router.delete("/remove/:userID/:productID", removeProductFromCart);

module.exports = router;
