require("dotenv").config();
const express = require("express");
const { connectDB } = require("./database/connect");
const Movie = require("./models/movie")
const Actor = require("./models/actor")
const MovieActor = require("./models/movie-actor")
const homeRouter = require("./routes/homeRouter");
const moviesRouter = require("./routes/moviesRouter");

const app = express();

app.use(express.json());
app.use("/", homeRouter);
app.use("/api/movies", moviesRouter);

const port = process.env.PORT;

Movie.belongsToMany(Actor, { through: MovieActor });
Actor.belongsToMany(Movie, { through: MovieActor });

connectDB()
  .then(() => {
    app.listen(port, console.log(`server is running on port ${port}`));
  })
  .catch((err) => {
    console.log(err);
  });
