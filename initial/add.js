const Movie = require("../models/movie");
const Actor = require("../models/actor");
const MovieActor = require("../models/movie-actor");
const data = require("./data.json");

Movie.belongsToMany(Actor, { through: MovieActor });
Actor.belongsToMany(Movie, { through: MovieActor });

const func = async () => {
  for (const movie of data) {
    const oneMovie = await Movie.create(movie);
    for (const id of movie.actorIds) {
      await MovieActor.create({
        MovieId: oneMovie.dataValues.id,
        ActorId: id,
      });
    }
  }
};

func();
