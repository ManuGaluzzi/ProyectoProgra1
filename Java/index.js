let urlArt = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/artists"

fetch(urlArt)
    .then(function(response){
        return response.json()
       
    })
    .then(function(data){
        console.log(data);
        let artistasap = document.querySelector(".ListaArtista")
        let artistas = [];
        for (let i =0; i < data.data.length; i++){
            artistas+= ` <a href="../Html/artistas.html?id=${data.data[i].id}" class = "artistlist">  
                <p>${data.data[i].name}  </p>
                <img src= "${data.data[i].picture_medium}" alt='' class= "fotoArtists" /> 
             </a>`;
        }
        artistasap.innerHTML=artistas
})
    .catch(function(error){
        console.log(error);
    })


let urlSongs = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/tracks"

fetch (urlSongs)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);

    let songsList = document.querySelector(".ListaCanciones")
    let songs = [];
    for (let i =0; i < data.data.length; i++){
        songs+= `<a href="../Html/canciones.html?id=${data.data[i].id}" class = "songslist">
        <p class = "ptit"> ${data.data[i].title_short}</p>
        <p class = "pnom"> ${data.data[i].artist.name}</p>
        <img src= "${data.data[i].album.cover_medium}" alt='' class="fotoSongs"/>
        </a>`;
    }
    
    songsList.innerHTML=songs
})
.catch(function(error){
    console.log(error);
})

let urlAlbums = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/albums"

fetch (urlAlbums)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);

    let albumList = document.querySelector(".ListaAlbumm")
    let albums = [];
    for (let i =0; i < data.data.length; i++){
        albums+= `<a href="../Html/album.html?id=${data.data[i].id}" class = "albumlist">
        <p> ${data.data[i].title}</p>
        <img src= "${data.data[i].cover_medium}" alt='' class="fotoAlbum"/>
        </a>`;
    }
    albumList.innerHTML = albums
})
.catch(function(error){
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