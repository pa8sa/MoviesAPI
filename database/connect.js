const Sequelize = require("sequelize");
const dbConfig = require("../config/dbConfig");

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect,
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
