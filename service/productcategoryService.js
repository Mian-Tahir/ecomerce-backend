const { models } = require("../models");

module.exports = {
  createProductCategory: async (data) => {
    const result = await models.ProductCategory.create({
      productID: data.productID,
      categoryID: data.categoryID,
    });
    return result;
  },
};