let string = location.search
let data = new URLSearchParams(string);
let ID = data.get("id")

let endpoint = `https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${ID}`

fetch(endpoint)
    .then(function (response) {
        return response.json()

    })
    .then(function (data) {
        console.log(data);
        let detartistas = document.querySelector(".detalle_artista")
        let detalleart =
            ` <li>  
                <p>${data.name}  </p>
                <img src= "${data.picture_medium}" alt='' />
                ${fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${ID}/albums`)
                .then(function (response) {
                    return response.json()

                })
                .then(function (data) {
                    console.log(data);
                    let topalbum = document.querySelector(".top_album")
                    let albums = [];
                    for (let i = 0; i < 5; i++) {
                        albums += `<li>
                        <a href="../Html/album.html?id=${data.data[i].id}"> <p class = "ptit"> ${data.data[i].title}</p> </a>
                                
                                </li>`;
                    }

                    topalbum.innerHTML = albums

                })
            } 
             </li>`;

        detartistas.innerHTML = detalleart
    })
    .catch(function (error) {
        console.log(error);
    })
