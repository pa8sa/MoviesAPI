const { DataTypes } = require("sequelize");
const { sequelize, connectDB } = require("../database/connect");

const Movie = sequelize.define("Movie", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genre: {
    type: DataTypes.ENUM("comedy", "drama", "romance", "horror", "action"),
    allowNull: false,
  },
  director: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rate: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: 0,
      max: 10,
    },
  },
  time: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  actors: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    allowNull: false,
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

connectDB();

module.exports = Movie;