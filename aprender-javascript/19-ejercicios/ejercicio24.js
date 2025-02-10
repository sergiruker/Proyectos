/*
Ejercicio 24:

Crea un array con 10 números aleatorios del 1 al 100.
Luego pide al usuario que adivine el número.

Si acierto muestra un mensaje de celebración;
si no, muestra el número correcto
*/

let numeros = [11, 23, 28,49,51,82,1,5,7,99];

// let numeros2 = Array.from({length: 10}, () => Math.floor(Math.random() * 100)+1);

let elije = prompt("Adivina el número del 1 al 100");

if(numeros.includes(Number(elije))){
    alert("¡ENHORABUENA MACHO! Has adivinado el número");
} else{
    alert("¡QUE MALA SUERTE! No has acertado");
}