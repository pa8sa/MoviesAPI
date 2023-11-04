require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.json())

const port = process.env.PORT;

const start = async () => {
  try {
    app.listen(port, console.log(`server is running on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();