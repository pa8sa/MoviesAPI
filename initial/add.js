const Movie = require("../models/movie");
const Actor = require("../models/actor");
const MovieActor = require("../models/movie-actor");
const data = require("./data.json");

Movie.belongsToMany(Actor, { through: MovieActor });
Actor.belongsToMany(Movie, { through: MovieActor });

Movie.bulkCreate(data)
  .then(() => console.log("Done"))
  .catch((err) => console.log(err));
