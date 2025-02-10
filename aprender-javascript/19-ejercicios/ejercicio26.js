/*
Ejercicio 26:

Dado un array de palabras, cuenta cuantas letras tiene cada palabra 
y crea un nuevo array que contenga solo esos números

*/

function cuentaLetras(datos){

    let nuevosDatos = datos.map(elemento => elemento.length);

    return nuevosDatos;

}

const frutas = ["naranja", "manzana", "sandia", "cereza"];

console.log(cuentaLetras(frutas))