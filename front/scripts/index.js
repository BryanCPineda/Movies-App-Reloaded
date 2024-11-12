const { moviesDataDone } = require("./moviesDataDone.js")
const { moviesDataFail } = require("./moviesDataFail.js")
const axios = require("axios")


const fetchData = async () => {

  try {
    const { data } = await axios.get("http://localhost:3000/movies")
    moviesDataDone(data.data)
  } catch (error) {
    moviesDataFail()
  }
  
}

fetchData()

// axios.get("https://students-api.up.railway.app/movies")
// 	.then((respuesta) => moviesDataDone(respuesta.data))
// 	.catch(moviesDataFail)

