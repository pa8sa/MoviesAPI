const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/connect");

const MovieActor = sequelize.define("MovieActor", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

module.exports = MovieActor;
