const { jsToHtmlCards } = require("./jsToHtmlCards.js");

const container = document.getElementById("cardsContainer");

function moviesDataDone(moviesData){ 
	const arrayHtml = moviesData.map(jsToHtmlCards) 
	arrayHtml.forEach( (elementoHtml) => container.appendChild(elementoHtml));
}

module.exports = {
  moviesDataDone
}