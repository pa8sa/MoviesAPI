const Movie = require("../models/movie");
const data = require("./data.json");

Movie.bulkCreate(data)
  .then(() => console.log("Done"))
  .catch((err) => console.log(err));
