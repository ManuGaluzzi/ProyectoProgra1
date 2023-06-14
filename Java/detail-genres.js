let string = location.search
let data = new URLSearchParams(string);
let ID = data.get("id")

let endpoint = `https://api.allorigins.win/raw?url=https://api.deezer.com/genre/${ID}`

fetch(endpoint)
    .then(function (response) {
        return response.json()

    })
    .then(function (data) {
        console.log(data);
        let detgenre = document.querySelector(".ListaDetalleGen")
        let detalle =
            ` <li>  
                <h2>${data.name}  </h2>
                <img src= "${data.picture_medium}" alt='' />
                ${fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/genre/${ID}/artists`)
                .then(function (response) {
                    return response.json()
                })
                .then(function (data) {
                    console.log(data)
                    let artistasgen = document.querySelector(".ListaArtGenre")
                    let artistas = []
                    for (let i = 0; i < 10; i++) {
                        artistas += `<li>
        
                        <a href="../Html/artistas.html?id=${data.data[i].id}"> <p> ${data.data[i].name}</p> </a>
                        <a href="../Html/artistas.html?id=${data.data[i].id}"> <img class= "ftodetgen" src= "${data.data[i].picture_medium}" alt="" />   </a>
                                </li>`;
                              
                    }
                    artistasgen.innerHTML = artistas
                  })
                }
             </li>`;

        detgenre.innerHTML = detalle
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