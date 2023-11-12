const Movie = require("../models/movie");

Movie.destroy({
  where: {},
  truncate: true,
})
  .then(() => console.log("Done"))
  .catch((err) => console.error(err));
