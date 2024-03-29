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
            <a href="../Html/artistas.html?id=${data.artist.id}"> <p> Artist: ${data.artist.name}  </p> </a>
            <a href="../Html/detail-genres.html?id=${data.genre_id}"><p> Genre: ${data.genres.data[0].name}  </p> </a>
                <img src= "${data.cover_medium}" alt='' />
                <p> Album: ${data.title}  </p>
                <p> Release Date: ${data.release_date}  </p>
                </li>`

                
                let lista = document.querySelector(".canciones_album")
                let songs =[];
                for (let i=0; i < data.tracks.data.length ;i++){
                songs +=`
                    <li>
                    <a href="../Html/canciones.html?id=${data.tracks.data[i].id}"> <p> ${i}: ${data.tracks.data[i].title}  </p> </a>
                    </li>`;
                }
                lista.innerHTML = songs
            
             ;

        detalbum.innerHTML = detalle
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