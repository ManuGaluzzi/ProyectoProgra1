let linkFavs = document.querySelector(".btnFavs")
let recuperoStorage = localStorage.getItem("listaFavs")
let storageToArray = JSON.parse(recuperoStorage)
let string = location.search
let data = new URLSearchParams(string);
let ID = data.get("id")



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