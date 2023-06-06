

let urlSongs = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart"

fetch (urlSongs)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);

    let songsList = document.querySelector(".ListaCanciones")
    let songs = [];
    for(let i= 0; i < data.results.length; i++){
        songs += `<article>
        <p> ${data.results[i].title_short}</p>
        <img src= "${data.results[i].picture}"  alt='' />
        </article>`
    }
    songsList.innerHTML=songs
})
.catch(function(error){
    console.log("Error: "+ error);
})







// let albumID = [1, 2, 3, 4, 5];
// for (let i = 1; i < 6; i++) {
//     let url = `https://api.allorigins.win/raw?url=https://api.deezer.com/album/${i}`

// fetch(url)
//     .then(function(response){
//         return response.json()
       
//     })
//     .then(function(data){
//         console.log(data)
//         let albumesap = document.querySelector(".ListaAlbum")
//         let album = `
//             <article>
//                 <p> Name: ${data.title}  </p>
//                 <img src= "${data.cover}" alt='' />
//              </article>`;
    
//     albumesap.innerHTML += album
// })
//     .catch(function(error){
//         alert(error);
//     })
// }


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