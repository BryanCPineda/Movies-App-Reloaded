//* LEVANTA NUESTRO SERVIDOR

const {app} = require("./src/server")


app.listen(3000, () => {
  console.log("Server listen on port 3000");
})



