// Funciones anónimas
// es una función "sin nombre"

const saludo = function(nombre = ""){
    console.log("Hola abuela "+ nombre +" que tal estás");
}

saludo();

// Funciones de callback
// Se pasan como parametro de otra función, para que la otra función las ejecute

/*
let veces = 0;

setInterval(function(){
    veces++;
    console.log("Se ha ejecutado el timeout"+veces+" veces" )

}, 1000);
*/

setTimeout(saludo("Pepa"), 1000)

// Funciones de Callback "avanzadas"

function restame(n1, n2, mostrar, multiplicarPorTres){

    let resta = n1 - n2;

    mostrar(resta);

    multiplicarPorTres(resta);

    return resta;

}

restame(20,5, function(resultado){

    console.log(resultado)

},
function(resultado){

    console.log(resultado*3)

});

// Ambito variables (scope)

// Ambito global

let ruta = "acb.com";

function mostrarRuta(){

    console.info(ruta);

    let nombre = "Sergio"

    console.log(nombre)

}

// console.log(nombre);

console.warn(ruta);

mostrarRuta();

if(true){
    var deporte = "Mi deporte favorito es el baloncesto";

    console.log(deporte);

}

//console.log(deporte);

// Hoisting o elevación



console.log(coche)

var coche = "Ford Fiesta";

console.log(coche);

let moto = "Ducati X1";

console.log(moto)

// Funciones de flecha 

// Definir función

let nuevoCurso = horas => {

    console.log("Curso de matemáticas que dura " + horas + " horas")
    
};

nuevoCurso(12);

// Utilizar en un callback

setTimeout(() =>{

    console.log("Estoy usando una función de flecha")

}, 2000);