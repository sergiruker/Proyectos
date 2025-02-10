/*
Ejercicio 19:

Muestra los numeros divisores de un número introducido en un prompt

*/

let numero = parseInt(prompt("Introduce el número del que quieres saber sus divisores"))

for (let contador = 1; contador <= numero; contador++){

    if(numero % contador == 0){

        console.log(`El ${contador} es divisor de ${numero}`)

    }

}
