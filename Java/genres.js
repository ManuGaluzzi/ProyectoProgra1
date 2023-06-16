let urlgenre = "https://api.allorigins.win/raw?url=https://api.deezer.com/genre"


fetch(urlgenre)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data)
    let listagen = document.querySelector(".ListaGenre")
    let generos = []
    for (let i = 0; i < data.data.length; i++) {
      generos +=
        ` <li class = "ligenre"> </a>
        <a href="../Html/detail-genres.html?id=${data.data[i].id}"><img class= "ftogenre" src= "${data.data[i].picture_medium}" alt="" /> </a>
        <a href="../Html/detail-genres.html?id=${data.data[i].id}"> <p> ${data.data[i].name} </p> </a>
          </li>`
    }
    listagen.innerHTML = generos;
  })
  .catch(function (error) {
    console.log(error);
})



let indice = document.querySelectorAll(".navegadores");
for (let i = 0; i < indice.length; i++) {
  indice[i].addEventListener("mouseover", function () {
    indice[i].style.color = "white";
  });
}
for (let i = 0; i < indice.length; i++) {
  indice[i].addEventListener("mouseout", function () {
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