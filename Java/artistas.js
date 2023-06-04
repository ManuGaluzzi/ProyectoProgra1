let url = "https://api.allorigins.win/raw?url=https://api.deezer.com/artist/246791"
let SectionGenres = document.querySelector(".SectionGenres")


fetch(url)
	.then(function(response){
	return response.json();
})
	.then(function(data){
	console.log(data);

    let contenedor = document.querySelector(".SectionGenres");
    let elementos = {};

 
    elementos+=`<article>
         <img src= "${data.name}" alt='' />
          <p>Name: ${data.picture} </p>
          <p>Status: ${data.tracklist} </p>
          </article>`
    

    contenedor.innerHTML=elementos
})


.catch(function(error){
    console.log("error" +error);
})





