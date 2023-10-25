const { models } = require("../models");

module.exports = {
  getCarts: async () => {
    const result = await models.cart.findAll();
    return result;
  },

  getUserCart: async (userID) => {
    // Find the user's cart based on the user ID
    const result = await models.cart.findOne({ where: { userID } });
    return result;
  },
  getProductInCart: async (cartID) => {
    const result = await models.ProductCart.findAll({
      where: {
        cartID,
      },
    });
    if (!result) {
      result.send("not found");
    }
    const productIDs = result.map((result) => result.productID);

    const data = await models.product.findAll({
      where: { id: productIDs },
    });

    return data;
  },
  addProductToCart: async (userID, productID) => {
    const result = await models.cart.findOne({ where: { userID } });
    if (result) {
      // Find the product based on the product ID
      const product = await models.product.findByPk(productID);

      if (product) {
        // Add the product to the user's cart
        await result.addProduct(product);
        return true;
      }
    }

    return false;
  },

  removeProductFromCart: async (userID, productID) => {
    const result = await models.cart.findOne({ where: { userID } });
    if (!result) {
      throw new Error("Cart not found for this user");
    }
    const product = await models.product.findByPk(productID);
    if (!product) {
      throw new Error("Product not found");
    }
    try {
      // Remove the product from the user's cart
      await result.removeProduct(product);

      return product; // Return the removed product
    } catch (error) {
      throw error;
    }
  },
};
