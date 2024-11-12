const infoValidationMovieMid = (req, res, next) => {
  const { title, year, director, duration, genre, rate, poster } = req.body;
  if (!title || !year || !director || !duration || !genre || !rate || !poster) {
    res.status(400).json({
      message: "falta informacion para crear la pelicula",
    });
  } else {
    next();
  }
};

module.exports = {
  infoValidationMovieMid,
};
