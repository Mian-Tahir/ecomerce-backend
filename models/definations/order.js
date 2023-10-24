const { DataTypes } = require("sequelize");
let sequelize = require("../../common/dbConnection");
const order = sequelize.define(
  "order",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    price: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
    modelName: "order",
  }
);
module.exports = order;
