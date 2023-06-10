let string = location.search 
let data = new URLSearchParams(string);
let Busqueda = data.get("buscador") 

let endpointBusqueda = `https://api.allorigins.win/raw?url=https://api.deezer.com/search?q=${Busqueda};`


fetch(endpointBusqueda)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        if (datos.data.length == 0){
            let noresult = document.querySelector(".termino")
            noresult.innerHTML = "No se encontraron coincidencias con el término buscado"
            noresult.style.color = "red"
        } else{
        let resultados = document.querySelector(".resultsbusqueda");
        let busqul =[];
        for (let i=0; i < datos.data.length ;i++){
        busqul += `
            <li class = "art">
                <h2  class = "cancionesbus">  ${datos.data[i].title}  </h2>
                <img src= "${datos.data[i].album.cover_medium}" alt='' class = "imgbus" /> 
                <h3 class= "artistabus" > Artist: ${datos.data[i].artist.name}  </h3>
                <p class = "albumesbus"> Album: ${datos.data[i].album.title}  </p>
            </li>`;
        }
        resultados.innerHTML = busqul
        let term = document.querySelector(".termino")
        term.innerHTML+= Busqueda;
        term.style.color = "white";
        }
          
    })
       .catch(function(error){
        console.log(error);
    })

