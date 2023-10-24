const cartService = require("../service/cartService");

module.exports = {
  getCarts: async (req, res) => {
    const result = await cartService.getCarts();
    res.send(result);
  },
  getUserCart: async (req, res) => {
    const userID = req.params.userID;
    const userCart = await cartService.getUserCart(userID);

    if (userCart) {
      res.send(userCart);
    } else {
      res.status(404).json({ message: "Cart not found for this user" });
    }
  },
  addProductToCart: async (req, res) => {
    const userID = req.params.userID;
    const productID = req.params.productID;
    const result = await cartService.addProductToCart(userID, productID);
    if (result) {
      res.send(result);
    } else {
      res.status(404).json({ message: "Product or Cart not found" });
    }
  },

  removeProductFromCart: async (req, res) => {
    const userID = req.params.userID;
    const productID = req.params.productID;
    const result = await cartService.removeProductFromCart(userID, productID);
    if (result) {
      res.send(result);
    } else {
      res.status(404).json({ message: "Product or Cart not found" });
    }
  },
};
