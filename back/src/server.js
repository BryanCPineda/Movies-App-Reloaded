//* CREAR EL SERVIDOR Y SU CONFIGURACION Y LUEGO EXPORTARLO

const express = require("express")
const { router } = require("./routes")
const cors = require("cors")
const morgan = require("morgan")

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

app.use(router)

module.exports = {
  app
}