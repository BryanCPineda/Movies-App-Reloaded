const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form); 
  const selectedGenres = Array.from(document.querySelectorAll('input[name="genres"]:checked')).map(checkbox => checkbox.value);
  const data = {
    title: formData.get("title"),
    year: formData.get("year"),
    director: formData.get("director"),
    duration: `${formData.get("durationh")} horas ${formData.get("durationm")} minutos`,
    rate: formData.get("rate"),
    poster: formData.get("poster"),
    genre: selectedGenres
  };
  
  for (const propiedad in data) {
      if(!data[propiedad] ){
        alert(`El campo ${propiedad} debe completarse para crear la pelicula`)
        return
      }
      if(data.genre.length === 0){
        alert("Se debe seleccionar por lo menos 1 genero para crear la pelicula")
        return
      }
  }

  axios.post("http://localhost:3000/movies", data)  
    .then((response) => {
          alert(response.data.message)
    })
    .catch((err) => {
          alert("Ocurrio un error en el servidor, intentelo nuevamente")
    })

  form.reset()

})

const resetButton = document.querySelector("#reset")
resetButton.addEventListener("click", () => {
  form.reset()
})

