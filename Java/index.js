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
            artistas+= `  <article>
                <p>${data.data[i].name}  </p>
                <img src= "${data.data[i].picture_medium}" alt='' class= "fotoArtists" />
                
             </article>`;
        }
        artistasap.innerHTML=artistas
})
    .catch(function(error){
        alert(error);
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
        songs+= `<article>
        <p> ${data.data[i].title_short}</p>
        <img src= "${data.data[i].album.cover_medium}" alt='' class="fotoSongs"/>
        </article>`;
    }
    songsList.innerHTML=songs
})
.catch(function(error){
    console.log("Error: "+ error);
})


let indice = document.querySelectorAll(".navegadores");
indice.forEach(indice=> {
indice.addEventListener("mouseover", function (){
    indice.style.color="white"
    })

indice. addEventListener("mouseout", function(){
    indice.style.color="black"
})
});

let fotosArtists = document.querySelectorAll(".imagenes")

fotosArtists.forEach(fotosArtists=> {
    fotosArtists.addEventListener("mouseover", function (){
        fotosArtists.style.height = "135px"
        fotosArtists.style.width = "120px"
    })
    fotosArtists.addEventListener("mouseout", function(){
        fotosArtists.style.height = "100px"
        fotosArtists.style.width = "100px"
    })
})

let fotosAlbums = document.querySelectorAll(".ImagenesAlbum")

fotosAlbums.forEach(fotosAlbums=>{
    fotosAlbums.addEventListener("mouseover", function (){
        fotosAlbums.style.height = "135px"
        fotosAlbums.style.width = "135px"
    })
    fotosAlbums.addEventListener("mouseout", function(){
        fotosAlbums.style.height = "100px"
        fotosAlbums.style.width = "100px"
    })
})