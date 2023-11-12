const Movie = require("../models/movie");
const data = require("./data.json");

Movie.create(data)
  .then(() => console.log("Done"))
  .catch((err) => console.log(err));
