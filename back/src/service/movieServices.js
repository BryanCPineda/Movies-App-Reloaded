const { Movie } = require("../models/Movies");

const getMovieService = async () => {
    return await Movie.find()
}

const getMovieById = async (id) => {
  return await Movie.findById(id)
}


const createdMovieService = async (info) => {
  return await Movie.create(info)
}

module.exports = {
  getMovieService,
  createdMovieService,
  getMovieById
}