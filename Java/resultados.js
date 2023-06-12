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
                <a href="../Html/canciones.html?id=${datos.data[i].id}" class = "cancionesbus"> <h2> ${datos.data[i].title}</h2>  </a>
                <a href="../Html/canciones.html?id=${datos.data[i].id}"> <img src= "${datos.data[i].album.cover_medium}" alt='' class = "imgbus" /> </a>
                <a href="../Html/artistas.html?id=${datos.data[i].artist.id}"> <h3 class= "artistabus" > Artist: ${datos.data[i].artist.name}  </h3> </a>
                <a href="../Html/album.html?id=${datos.data[i].album.id}"> <p class = "albumesbus"> Album: ${datos.data[i].album.title}  </p> </a>
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
