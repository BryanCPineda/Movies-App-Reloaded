//* CREAR EL ROUTER PRINCIPAL, CONFIGURARLO CON LOS DIFERENTES ROUTERS ( FEAT ) - EXPORTAMOS EL ROUTER

const { Router } = require("express");
const { moviesRouter } = require("./moviesRouter");

const router = Router();

router.use("/movies", moviesRouter);

module.exports = {
  router,
};
