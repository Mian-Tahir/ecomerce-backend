const { DataTypes } = require("sequelize");
let sequelize = require("../../common/dbConnection");
const cart = sequelize.define(
  "cart",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
    modelName: "cart",
  }
);
module.exports = cart;
