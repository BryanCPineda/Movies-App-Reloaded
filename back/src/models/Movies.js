const mongoose = require("mongoose")

const objetoMovie = {
      title: {
          type: String,
          required: true,
          unique: true,
      },
      year: Number,
      director: String,
      duration: String,
      genre: [String],
      rate: Number,
      poster: String
}

const movieSchema = new mongoose.Schema(objetoMovie)

const Movie = mongoose.model("Movie", movieSchema)

module.exports = {
  Movie
}