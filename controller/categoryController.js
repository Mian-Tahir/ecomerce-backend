const categoryService = require("../service/categoryService");

module.exports = {
  getCategory: async (req, res) => {
    const result = await categoryService.getCategory();
    res.send(result);
  },
  getCategoryById: async (req, res) => {
    try {
      const result = await categoryService.getCategoryById(req.params.id);
      res.send(result);
    } catch (error) {
      res.send(error);
    }
  },
  createCategory: async (req, res) => {
    const result = await categoryService.createCategory(req.body);
    // console.log(result);
    res.send(result);
  },
  updateCategory: async (req, res) => {
    const result = await categoryService.updateCategory(
      req.params.id,
      req.body
    );
    res.send(result);
  },
  deleteCategory: async (req, res) => {
    const result = await categoryService.deleteCategory(req.params.id);
    res.send(result);
  },
};
