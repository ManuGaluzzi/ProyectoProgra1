let string = location.search
let data = new URLSearchParams(string);
let ID = data.get("id")

let endpoint = `https://api.allorigins.win/raw?url=https://api.deezer.com/album/${ID}`

fetch(endpoint)
    .then(function (response) {
        return response.json()

    })
    .then(function (data) {
        console.log(data);
        let detalbum = document.querySelector(".detalle_album")
        let detalle =
            ` <li>  
                <p> Artist: ${data.artist.name}  </p>
                <p> Genre: ${data.genres.data[0].name}  </p>
                <img src= "${data.cover_medium}" alt='' />
                <p> Album: ${data.title}  </p>
                <p> Release Date: ${data.release_date}  </p>
                </li>`

                
                let lista = document.querySelector(".canciones_album")
                let songs =[];
                for (let i=0; i < data.tracks.data.length ;i++){
                songs +=`
                    <li>
                        <p> ${data.tracks.data[i].title}  </p>
                    </li>`;
                }
                lista.innerHTML = songs
            
             ;

        detalbum.innerHTML = detalle
    })
    .catch(function (error) {
        console.log(error);
    })
