var express = require("express");

const {
  getCategory,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controller/categoryController");
var router = express.Router();

/* GET Category listing. */
router.get("/", getCategory);
router.get("/:id", getCategoryById);
router.post("/createCategory", createCategory);
router.put("/updateCategory/:id", updateCategory);
router.delete("/deleteCategory/:id", deleteCategory);

module.exports = router;
