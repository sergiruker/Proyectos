// Array, matrices, arreglos

let nombre = "Sergio Rocha"

let nombres = ["Sergio Rocha", "Juan", "Pepe", "Manolillo", "Jose"];
//                  0             1       2        3        4

let peliculas = new Array("Ironman", "Gran Torino", "Mama mia");

console.log(nombres);
console.log(nombres.length);

console.log(peliculas);
console.log(peliculas.length);

// Acceder a los elementos 

console.log(nombres[3]);
console.log(nombres[0]);

// Modificar elementos array

nombres[3] = "Manuel";
nombre[0] = "Sergio Rocha Bouso";

console.log(nombres);

// Práctica

let elemento = parseInt(prompt("¿Qué usuario quieres (del array)", 0));

if (elemento >= nombres.length){

    alert("Upps!! ese usuario en concreto no existe, elige otro!!");

}else {

    alert("Bieeen!! el usuario seleccionado es ".concat(nombres[elemento]));

}

