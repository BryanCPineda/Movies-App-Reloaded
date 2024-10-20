const container = document.getElementById("cardsContainer");

function jsToHtmlCards(objetoJs){
    const div = document.createElement("div")
    const h1 = document.createElement("h1")
    const button = document.createElement("button")
    const img = document.createElement("img")
    img.src = objetoJs.poster
    img.classList.add("cardImg")
    img.alt = objetoJs.title
    h1.innerHTML = objetoJs.title
    button.innerHTML = "ver ahora"
    div.classList.add("card")
    div.appendChild(img)
    div.appendChild(h1)
    div.appendChild(button)

    return div
}

const arrayHtml = tempData.map(jsToHtmlCards)
arrayHtml.forEach( elementoHtml => container.appendChild(elementoHtml));