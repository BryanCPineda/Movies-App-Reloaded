//* LEVANTA NUESTRO SERVIDOR

const { dbConnection } = require("./src/config/db");
const {app} = require("./src/server")


dbConnection()
  .then(() => {
      console.log("Conexion a mongodb realizada con exito")

      app.listen(3000, () => {
        console.log("Server listen on port 3000");
      })
  })
  .catch((err) => {
      console.log(err);
  })





