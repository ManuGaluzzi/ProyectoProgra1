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
for (let i = 0; i < indice.length; i++) {
    indice[i].addEventListener("mouseover", function() {
      indice[i].style.color = "white";
    });
  }
  for (let i = 0; i < indice.length; i++)
    indice[i].addEventListener("mouseout", function() {
      indice[i].style.color = "black";
    });
;