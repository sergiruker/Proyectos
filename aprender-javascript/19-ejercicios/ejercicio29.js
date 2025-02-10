/*
Ejercicio 29:

Crea una función que reciba una palabra y devuelva cuántas vocales contiene.
*/

function misVocales(palabra) {
    const vocales = "aeiouAEIOU";
    let count = 0;

    for (let letra of palabra) {
        if (vocales.includes(letra)) {
            count++;
        }
    }
    return count;
}

// Pedimos la palabra al usuario
let palabra = prompt("Dime tu palabra y te cuento las vocales");

// Contamos las vocales
let numeroDeVocales = misVocales(palabra);

// Mostramos el resultado
console.log("El número de vocales de la palabra es: " + numeroDeVocales);
