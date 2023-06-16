let linkFavs = document.querySelector(".btnFavs")
let recuperoStorage = localStorage.getItem("listaFavs")
let storageToArray = JSON.parse(recuperoStorage)
let string = location.search
let data = new URLSearchParams(string);
let ID = data.getItem("id")

let cancionesFavs = []

if (recuperoStorage !==null){
  cancionesFavs = storageToArray
}

if(cancionesFavs.includes(ID)){
  linkFavs.innerText="Quitar de favoritos"
}

linkFavs.addEventListener("click",function(e){
  e.preventDefault();
  
if(cancionesFavs.includes()){
   let posicion = cancionesFavs.indexOf(ID);
   cancionesFavs.splice(posicion, 1);
   linkFavs.innerText = "Agregar a favoritos";
   } else{
  cancionesFavs.push(ID);
  linkFavs.innerText = "Quitar de favoritos"
}

  cancionesAJSON = JSON.stringify(cancionesFavs);
  localStorage.setItem(".listaFavs",cancionesAJSON)

  console.log(localStorage);
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