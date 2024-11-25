//* CREAR LAS FUNCIONES CONTROLADORAS Y EXPOTARLAS
const {
  getMovieService,
  getMovieById,
  createdMovieService,
} = require("../service/movieServices");

const getMoviesController = async (req, res) => {

  try {
    const response = await getMovieService();
    res.status(200).json({
      message: "aqui van todas las peliculas",
      data: response,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error en el servidor",
      data: error.message,
    });
  }
};

const getMovieIdController = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await getMovieById(id);
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

const createMovieController = async (req, res) => {
  try {
    const response = await createdMovieService(req.body);
    res.status(201).json({
      message: "pelicula creada con exito",
      data: response,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  getMoviesController,
  getMovieIdController,
  createMovieController,
};
