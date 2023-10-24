const { models } = require("../models");

module.exports = {
  getCategory: async () => {
    const result = await models.category.findAll();
    return result;
  },
  getCategoryById: async (id) => {
    const result = await models.category.findByPk(parseInt(id));
    if (!result) {
      return "The product with the given ID was not found."; //404
    } else {
      return result;
    }
  },

  createCategory: async (data) => {
    const result = await models.category.create({
      type: data.type,
    });

    return result;
  },

  updateCategory: async (id, data) => {
    const result = await models.category.findByPk(id);
    if (!result) {
      return "The category with the given ID was not found."; //404
    } else {
      result.type = data.type;

      await result.save();
      await result.save();

      return result;
    }
  },
  deleteCategory: async (id) => {
    const result = await models.category.findByPk(parseInt(id));
    if (!result) {
      return "The category with the given ID was not found."; //404
    } else {
      await result.destroy();
      return result;
    }
  },
};
