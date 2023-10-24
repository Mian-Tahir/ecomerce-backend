const { models } = require("../models");

module.exports = {
  getUsers: async () => {
    const result = await models.user.findAll();
    return result;
  },
  getUserById: async (id) => {
    const result = await models.user.findByPk(parseInt(id));
    if (!result) {
      return "The product with the given ID was not found."; //404
    } else {
      return result;
    }
  },

  createUser: async (data) => {
    const result = await models.user.create({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
    });
    // default cart while creating user
    const cart = await models.cart.create({ userID: result.id });
    result.setCart(cart);
    return result;
  },

  updateUser: async (id, data) => {
    const result = await models.user.findByPk(id);
    if (!result) {
      return "The user with the given ID was not found."; //404
    } else {
      result.firstName = data.firstName;
      result.lastName = data.lastName;
      result.email = data.email;
      result.phoneNumber = data.phoneNumber;

      await result.save();
      return result;
    }
  },
  deleteUser: async (id) => {
    const result = await models.user.findByPk(id);
    console.log(result);
    if (!result) {
      return "The user with the given ID was not found."; //404
    } else {
      await result.destroy();

      return result;
    }
  },
};
