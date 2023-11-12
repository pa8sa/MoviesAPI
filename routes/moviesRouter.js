const express = require("express");
const router = express.Router();

const {
  getAllMovies,
  getMovie,
  deleteMovie,
  updateMovie,
  addMovie,
} = require("../controllers/moviesController");

router.route("/").get(getAllMovies).post(addMovie);
router.route("/:id").get(getMovie).delete(deleteMovie).patch(updateMovie);

module.exports = router;
