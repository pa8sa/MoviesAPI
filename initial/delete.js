const Movie = require("../models/movie");
const Actor = require("../models/actor");
const MovieActor = require("../models/movie-actor");

Movie.destroy({
  where: {},
})
  .then(() => console.log("Done"))
  .catch((err) => console.error(err));
