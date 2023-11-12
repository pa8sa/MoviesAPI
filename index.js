require("dotenv").config();
const express = require("express");
const { connectDB } = require("./database/connect");
const homeRouter = require("./routes/homeRouter");
const moviesRouter = require("./routes/moviesRouter");

const app = express();

app.use(express.json());
app.use("/", homeRouter);
app.use("/api/movies", moviesRouter)

const port = process.env.PORT;

const start = async () => {
  try {
    await connectDB();
    app.listen(port, console.log(`server is running on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
