const Movie = require("../models/movie");

const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.findAll();
    res.status(200).send(movies);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getMovie = async (req, res) => {
  try {
    const movie = await Movie.findByPk(req.params.id);
    if (!movie) {
      return res.status(404).send("Movie Didnt Found");
    }

    res.status(200).send(movie);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findByPk(req.params.id);
    if (!movie) {
      return res.status(404).send("Movie Didnt Found");
    }

    await movie.destroy();
    res.status(200).send(movie);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateMovie = async (req, res) => {
  try {
    const [rowsAffected, [updatedMovie]] = await Movie.update(req.body, {
      where: {
        id: req.params.id,
      },
      returning: true,
    });

    if (rowsAffected === 0 || !updatedMovie) {
      res.status(404).send("Movie Didnt Found");
    } else {
      res.status(200).send(updatedMovie);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const addMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);

    res.status(200).send(movie);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllMovies,
  getMovie,
  deleteMovie,
  updateMovie,
  addMovie,
};
