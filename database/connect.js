const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    logging: false,
  }
);

const connectDB = () => {
  return sequelize
    .sync()
    .then(() => console.log("connected to database"))
    .catch((err) => console.log(err));
};

module.exports = { sequelize, connectDB };
