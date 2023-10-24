const userService = require("../service/userService");

module.exports = {
  getUsers: async (req, res) => {
    const result = await userService.getUsers();
    res.send(result);
  },
  getUserById: async (req, res) => {
    try {
      const result = await userService.getUserById(req.params.id);
      res.send(result);
    } catch (error) {
      res.send(error);
    }
  },
  createUser: async (req, res) => {
    
    const result = await userService.createUser(req.body);
    res.send(result);
  },
  updateUser: async (req, res) => {
    const result = await userService.updateUser(req.params.id, req.body);
    res.send(result);
  },
  deleteUser: async (req, res) => {
    const result = await userService.deleteUser(req.params.id);

    res.send(result);
  },
};
