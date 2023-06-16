let string = location.search
let data = new URLSearchParams(string);
let Busqueda = data.get("buscador")
let searchcriteria = data.get("criterio")
console.log(searchcriteria);


if (searchcriteria === 'artists') {
    endpointBusqueda = `https://api.allorigins.win/raw?url=https://api.deezer.com/search/artist?q=${Busqueda};`
} else if (searchcriteria === 'albums') {
    endpointBusqueda = `https://api.allorigins.win/raw?url=https://api.deezer.com/search/album?q=${Busqueda};`
} else if (searchcriteria === 'tracks') {
    endpointBusqueda = `https://api.allorigins.win/raw?url=https://api.deezer.com/search/track?q=${Busqueda};`
} else {
    endpointBusqueda = `https://api.allorigins.win/raw?url=https://api.deezer.com/search?q=${Busqueda};`
}


if (Busqueda === "") {
    alert("Oops!, parece que no escribiste nada.")
} else if (Busqueda.length < 3) {
    alert("Tu busqueda debe contener al menos 3 caracteres")
} else {
    fetch(endpointBusqueda)
        .then(function (response) {
            return response.json();
        })
        .then(function (datos) {
            console.log(datos);
            if (datos.data.length == 0) {
                let noresult = document.querySelector(".termino")
                noresult.innerHTML = "No se encontraron coincidencias con el término buscado"
                noresult.style.color = "red"
            } else {
                let resultados = document.querySelector(".resultsbusqueda");
                let busqul = [];
                for (let i = 0; i < datos.data.length; i++) {
                    if (searchcriteria === 'all') {
                        busqul += `
                                <li class = "art">
                                    <a href="../Html/canciones.html?id=${datos.data[i].id}" class = "cancionesbus"> <h2> ${datos.data[i].title}</h2>  </a>
                                    <a href="../Html/canciones.html?id=${datos.data[i].id}"> <img src= "${datos.data[i].album.cover_medium}" alt='' class = "imgbus" /> </a>
                                    <a href="../Html/artistas.html?id=${datos.data[i].artist.id}"> <h3 class= "artistabus" > Artist: ${datos.data[i].artist.name}  </h3> </a>
                                    <a href="../Html/album.html?id=${datos.data[i].album.id}"> <p class = "albumesbus"> Album: ${datos.data[i].album.title}  </p> </a>
                                </li>`;
                    } else if (searchcriteria === 'artists') {
                        busqul += `
                <li class = "art">
                    <a href="../Html/artistas.html?id=${datos.data[i].id}"> <img src= "${datos.data[i].picture_medium}" alt='' class = "imgbus" /> </a>
                    <a href="../Html/artistas.html?id=${datos.data[i].id}"> <h3 class= "artistabus" > Artist: ${datos.data[i].name}  </h3> </a>

                </li>`;

                    } else if (searchcriteria === 'albums') {
                        busqul += `
                <li class = "art">
                    <a href="../Html/album.html?id=${datos.data[i].id}" class = "cancionesbus"> <h2> ${datos.data[i].title}</h2>  </a>
                    <a href="../Html/album.html?id=${datos.data[i].id}"> <img src= "${datos.data[i].cover_medium}" alt='' class = "imgbus" /> </a>
                    <a href="../Html/artistas.html?id=${datos.data[i].artist.id}"> <h3 class= "artistabus" > Artist: ${datos.data[i].artist.name}  </h3> </a>
                   
                </li>`;

                    } else  {
                        busqul += `
                <li class = "art">
                    <a href="../Html/canciones.html?id=${datos.data[i].id}" class = "cancionesbus"> <h2> ${datos.data[i].title}</h2>  </a>
                    <a href="../Html/canciones.html?id=${datos.data[i].id}"> <img src= "${datos.data[i].album.cover_medium}" alt='' class = "imgbus" /> </a>
                    <a href="../Html/artistas.html?id=${datos.data[i].artist.id}"> <h3 class= "artistabus" > Artist: ${datos.data[i].artist.name}  </h3> </a>
                    <a href="../Html/album.html?id=${datos.data[i].album.id}"> <p class = "albumesbus"> Album: ${datos.data[i].album.title}  </p> </a>
                </li>`;
                    }

                }
                resultados.innerHTML = busqul
                let term = document.querySelector(".termino")
                term.innerHTML += Busqueda + " (" + searchcriteria + ")";
                term.style.color = "green";
        
                
            }

        })
        .catch(function (error) {
            console.log(error);
        })

    let indice = document.querySelectorAll(".navegadores");
    for (let i = 0; i < indice.length; i++) {
        indice[i].addEventListener("mouseover", function () {
            indice[i].style.color = "white";
        });
    }
    for (let i = 0; i < indice.length; i++) {
        indice[i].addEventListener("mouseout", function () {
            indice[i].style.color = "black";
        });
    }
}
document.querySelector(".botonluz").addEventListener('click',function() {
    let body = document.querySelector("body")
    if (body.classList.contains("light-mode")) {
        body.classList.remove("light-mode")
        localStorage.setItem('modo','dark')
        
    } else{
        body.classList.add("light-mode")
        localStorage.setItem('modo','light')
        
    }
  })

window.onload = function() {
    let theme = localStorage.getItem('modo');
    let body = document.querySelector("body")
    if (theme === 'light') {
        body.classList.add('light-mode');
    } else {
        body.classList.remove('light-mode');
        }
};

