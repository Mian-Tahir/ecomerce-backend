const { models } = require("../models");

module.exports = {
  getProducts: async () => {
    const result = await models.product.findAll();
    return result;
  },
  getProductById: async (id) => {
    const result = await models.product.findByPk(parseInt(id));
    if (!result) {
      return "The product with the given ID was not found."; //404
    } else {
      return result;
    }
  },

  createProduct: async (data, categoryID) => {
    const result = await models.product.create({
      title: data.title,
      image: data.image,
      description: data.description,
      price: data.price,
      rating: data.rating,
    });
    if (Array.isArray(categoryID) && categoryID.length > 0) {
      await result.addCategory(categoryID);
    }
    return result;
  },
  updateProduct: async (id, data) => {
    const result = await models.product.findByPk(id);
    if (!result) {
      return "The product with the given ID was not found."; //404
    } else {
      result.title = data.title;
      result.image = data.image;
      result.description = data.description;
      result.price = data.price;
      result.rating = data.rating;
      result.categoryID = data.categoryId;

      await result.save();

      return result;
    }
  },
  deleteProduct: async (id) => {
    const result = await models.product.findByPk(parseInt(id));
    if (!result) {
      return "The product with the given ID was not found."; //404
    } else {
      await result.destroy();
      return result;
    }
  },
};
