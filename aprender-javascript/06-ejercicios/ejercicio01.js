/*
    Ejercicio 1:

    Calcula cuántas horas le llevaría llegar a la luna una nave espacial y
    guarda el resultado en una variable.

    La distancia desde la tierra hasta la luna es de 384.400 kilómetros

    La velocidad de la nave es de 1225 kilómetros por hora.

*/

let distanciaLuna = 384400;
let velocidad = 1225;

let tiempoTotal = distanciaLuna / velocidad;

console.log("El tiempo en horas que tarda la nave es de " + Math.ceil(tiempoTotal) + " horas")