// DOM - Document Object Model

// getElementByID - Seleccionar elementos por su ID

let caja = document.getElementById("caja");

//Modificar características de un elemento seleccionado

caja.innerHTML = "<h2>Hola soy Sergio</h2>";
/*
caja.style.background = "lightblue";
caja.style.maxWidth = "50%";
caja.style.margin = "0 auto";
caja.style.padding = "35 px";
caja.style.textAlign = "center";
caja.style.fontFamily = "Arial";
*/

// Me permite agregar métodos
caja.classList.add("cajita");
caja.classList.add("cajaza");
caja.classList.add("cajon");

//ClassName me permite agregar clases
console.log(caja.className)

function cambiaColor(color, borderRadius){
    caja.style.background = color;
    caja.style.borderRadius = borderRadius;
}

console.log(caja.innerHTML);

// articuloUltimo - Seleccionar múltiples elementos con una clase

/*

let articulos = document.getElementsByClassName("articulo");
console.log(articulos);

// Recorremos los articulos del HTML
for (let i=0; i < articulos.length; i++){

    // Añado la clase articuloBase
    articulos[i].classList.add("articuloBase");

    //Añadir contenido a todo
    articulos[i].innerHTML +="<a href='https://acb.com'>ACB</a>";

    // Añadir un nodo del dom
    let enlace = document.createElement("a");
    enlace.setAttribute("href", "https://abc.es");
    enlace.setAttribute("target","_blank");
    enlace.style.color = "green";

    let textoEnlace = document.createTextNode("Sigue leyendo")

    enlace.append(textoEnlace);
    articulos[i].append(enlace);

    // Creo una clase para dar estilos en CSS al primer articulo
    if(i == 0){
        articulos[i].classList.add("articuloAmarillo");
    }
    // Creo una clase para el ultimo articulo
    if (i === (articulos.length - 1)){
        articulos[i].classList.add("articuloUltimo");
        // Añadir contenido diferente
        articulos[i].innerHTML = "<h2>Sigue leyendo mas cosas en el futuro</h2>"
    }
}
    */

// getElementByTagName - Funciona igual que getElementByClassName

let etiquetasArticulo = document.getElementsByTagName("article")

etiquetasArticulo[3].style.backgroundColor = "green";
etiquetasArticulo[3].style.color = "white";

console.log(etiquetasArticulo);

// RECOMENDABLE: QuerySelector - Puedes seleccionar una cosa de un ID o clase

let seccionArticulos = document.querySelector("#articulos");

// seccionArticulos.style.background = "lightblue";
seccionArticulos.style.padding = "40px"

seccionArticulos.innerHTML += ("<h1>Articulos</h1>");

console.log(seccionArticulos);

// querySelector y clases En este ejemplo me coge el primero solamente

let primerArticulo = document.querySelector("#articulos > .articulo");
primerArticulo.style.borderRadius = "50px";
console.log(primerArticulo);


// RECOMENDABLE: QuerySelectorAll - Puedes seleccionar varias cosas de un ID o clase

let articulos = document.querySelectorAll("#articulos article");

// Recorre todos los elementos articulo
articulos.forEach((articulo, i) => { 
    articulo.classList.add("articuloBase");

    //Añadir contenido a todo
    articulo.innerHTML +="<a href='https://acb.com'>ACB</a>";

    // Añadir un nodo del dom
    let enlace = document.createElement("a");
    enlace.setAttribute("href", "https://abc.es");
    enlace.setAttribute("target","_blank");
    enlace.style.color = "green";

    let textoEnlace = document.createTextNode("Sigue leyendo")

    enlace.append(textoEnlace);
    articulo.append(enlace);
      // Creo una clase para dar estilos en CSS al primer articulo
    if(i == 0){
        articulo.classList.add("articuloAmarillo");
    }
    // Creo una clase para el ultimo articulo
    if (i === (articulos.length - 1)){
        articulo.classList.add("articuloUltimo");
        // Añadir contenido diferente
        articulo.innerHTML = "<h2>Sigue leyendo mas cosas en el futuro</h2>"
    }
});

// Modificaciones

const tarjeta = document.querySelector("#tarjeta");
console.log(tarjeta);

// Modificar el texto
tarjeta.textContent = "Contenido nuevo de mi tarjeta";

//Modificar el HTML
tarjeta.innerHTML = "<strong>Contenido en HTML de mi tarjeta</strong>";

// Añadir clases, Ids
tarjeta.setAttribute("data-id", 12);
tarjeta.setAttribute("class", "hola que tal");

// Obtener los atributos
console.log(tarjeta.getAttribute("class"));

tarjeta.style.border = "1px solid blue";
tarjeta.style.backgroundColor = "steelblue";
tarjeta.style.padding = "30px";

tarjeta.classList.add("destacar");
// Borrar clases
tarjeta.classList.remove("que");

//toggle Si existe la clase la va a quitar
tarjeta.classList.toggle("hola");

const titular = document.createElement("h2");

titular.textContent = "Esta es la tarjeta";

//tarjeta.append(titular);

// Poner al principio
tarjeta.insertBefore(titular, tarjeta.firstChild);

// Borra el contenido 
tarjeta.querySelector("strong").remove();