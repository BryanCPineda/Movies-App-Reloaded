//* CREAR LAS FUNCIONES CONTROLADORAS Y EXPOTARLAS
const {
  getMovieService,
  getMovieById,
  createdMovieService,
} = require("../service/movieServices");

const getMoviesController = (req, res) => {
  const response = getMovieService();
  res.status(200).json({
    message: "aqui van todas las peliculas",
    data: response,
  });
};

const getMovieIdController = (req, res) => {
  const { id } = req.params;

  try {
    const response = getMovieById(id);
    res.status(200).json({
      message: "pelicula encontrada",
      data: response,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const createMovieController = (req, res) => {
  const response = createdMovieService(req.body);
  res.status(201).json({
    message: "pelicula creada con exito",
    data: response,
  });
};

module.exports = {
  getMoviesController,
  getMovieIdController,
  createMovieController,
};
