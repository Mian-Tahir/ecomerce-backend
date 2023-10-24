const { DataTypes } = require("sequelize");
let sequelize = require("../../common/dbConnection");
const category = sequelize.define(
  "category",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    type: {
      allowNull: false,
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
    modelName: "category",
  }
);
module.exports = category;
