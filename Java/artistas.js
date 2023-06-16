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
                </li>`;
                fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${ID}/albums`)
                .then(function (response) {
                    return response.json()

                })
                .then(function (data) {
                    console.log(data);
                    let topalbum = document.querySelector(".top_album")
                    let albums = [];
                    for (let i = 0; i < 5; i++) {
                        albums += `<li>
                        <a href="../Html/album.html?id=${data.data[i].id}"> <p class = "ptit"> ${i+1}: ${data.data[i].title}</p> </a>
                                
                                </li>`;
                    }

                    topalbum.innerHTML = albums

                })
            
             

        detartistas.innerHTML = detalleart
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