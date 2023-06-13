let linkFavs = document.querySelector(".btnFavs")
let recuperoStorage = localStorage.getItem(".listaFavs")
let storageToArray = JSON.parse(recuperoStorage)
let ID =  data.get("id")


let cancionesFavs = []

if (recuperoStorage !==null){
  cancionesFavs = storageToArray
}

linkFavs.addEventListener("click",function(e){
  e.preventDefault();
  cancionesFavs.push(ID);
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