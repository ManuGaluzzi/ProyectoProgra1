let string = location.search
let data = new URLSearchParams(string);
let ID = data.get("id")

let endpoint = `https://api.allorigins.win/raw?url=https://api.deezer.com/track/${ID}`

fetch(endpoint)
    .then(function (response) {
        return response.json()

    })
    .then(function (data) {
        console.log(data);
        let detcancion = document.querySelector(".detalle_cancion")
        let detalle =
            ` <li>  
            <a href="../Html/artistas.html?id=${data.artist.id}"> <p> Artist: ${data.artist.name} </p> </a>
                <p> Song: ${data.title}  </p>
                <img src= "${data.album.cover_medium}" alt='' />
                <a href="../Html/album.html?id=${data.album.id}">   <p> Album: ${data.album.title}  </p> </a>
                <button class = "btnFavs"> Agregar canción a favoritos </button>
             </li>`;

        detcancion.innerHTML = detalle
        let audio = document.querySelector(".audio")
        audio.src = `${data.preview}`
    })
    .catch(function (error) {
        console.log(error);
    })

    let indice = document.querySelectorAll(".navegadores");
for (let i = 0; i < indice.length; i++) {
    indice[i].addEventListener("mouseover", function() {
      indice[i].style.color = "white";
    });
  }
   for (let i = 0; i < indice.length; i++) {
    indice[i].addEventListener("mouseout", function() {
      indice[i].style.color = "black";
    });
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