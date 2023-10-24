var express = require("express");

const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controller/userController");
const authenticationController = require("../common/authenticationController");
var router = express.Router();

/* GET users listing. */
router.get("/", authenticationController.authenticaToken,getUsers);
router.get("/:id", getUserById);
router.post("/createUser", createUser);
router.put("/updateUser/:id", updateUser);
router.delete("/deleteUser/:id", deleteUser);
router.post('/login', authenticationController.login);

module.exports = router;
