const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/connect");

const Actor = sequelize.define("Actor", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 120,
    },
  },
  nationality: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Actor;
