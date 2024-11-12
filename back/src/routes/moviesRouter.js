//* CREAR UN ROUTER PERSONALIZADO , CONFIGURARLO CON LOS ENDPOINTS Y EL LLAMADO A LOS CONTROLADORES - EXPORTAMOS

const { Router } = require("express");
const {
  getMoviesController,
  getMovieIdController,
  createMovieController,
} = require("../controllers/moviesController");
const { infoValidationMovieMid } = require("../middlewares");

const moviesRouter = Router();

moviesRouter.get("/", getMoviesController);

moviesRouter.get("/:id", getMovieIdController);
moviesRouter.post("/", infoValidationMovieMid, createMovieController);

module.exports = {
  moviesRouter,
};
