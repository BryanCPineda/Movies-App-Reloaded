const { jsToHtmlCards } = require("./jsToHtmlCards");
const { tempData } = require("./tempData");

function moviesDataFail(){
  alert("la busqueda no arrojo ningun resultado, se utilizara informacion fake")
  const arrayHtml = tempData.map(jsToHtmlCards)
  arrayHtml.forEach( (elementoHtml) => container.appendChild(elementoHtml));
}

module.exports = {
  moviesDataFail
}