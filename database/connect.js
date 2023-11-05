const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.POSTGRES_USERNAME,
  host: "localhost",
  database: "moviesapi",
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
});

const connectDB = () => {
  return pool
    .connect()
    .then(() => console.log("connected to postgres"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
