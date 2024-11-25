const { formJs } = require("./form.js")
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

if(location.pathname.includes("/index")){
    fetchData()
} else if(location.pathname.includes("/form")){
    formJs()
}








