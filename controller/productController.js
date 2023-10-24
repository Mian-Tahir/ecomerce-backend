const productService = require("../service/productService");

module.exports = {
  getProducts: async (req, res) => {
    const result = await productService.getProducts();
    res.send(result);
  },
  getProductById: async (req, res) => {
    try {
      const result = await productService.getProductById(req.params.id);
      res.send(result);
    } catch (error) {
      res.send(error);
    }
  },
  createProduct: async (req, res) => {
    const { title, image, description, price, rating, categoryID } = req.body;

    if (!categoryID || !Array.isArray(categoryID)) {
      return res.status(400).json({ error: "categoryIds must be an array" });
    }

    const result = await productService.createProduct(
      {
        title,
        image,
        description,
        price,
        rating,
      },
      categoryID
    );
    // console.log(result);
    res.send(result);
  },
  updateProduct: async (req, res) => {
    const result = await productService.updateProduct(req.params.id, req.body);
    res.send(result);
  },
  deleteProduct: async (req, res) => {
    const result = await productService.deleteProduct(req.params.id);
    res.send(result);
  },
};
