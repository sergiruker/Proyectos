/* 
Ejercicio 17:

Mostrar tosdos los números impares que hay entre dos números que nos de el usuario

*/

let numero1 = parseInt(prompt("Ingrese el primer número"))
let numero2 = parseInt(prompt("Ingrese el primer número"))

while (numero1 < numero2){

    numero1++;

    if(numero1 % 2 != 0){

        console.log(`El ${numero1} es impar`)

    }   

}