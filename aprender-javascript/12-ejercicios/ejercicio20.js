/*
Ejercicio 20:

En base al número que nos de el usuario.

Decirle si es un numero par o impar

*/

let numero = parseInt(prompt("Pasame números para saber si es par o impar (Escribe 0 para salir)"));

while(isNaN(numero)){

    numero = parseInt(prompt("Pasame números para saber si es par o impar (Escribe 0 para salir)"));

}
if(numero % 2 == 0 ){

    console.log(`El número ${numero} es un número par`)

}else {

    console.log(`El número ${numero} es un número impar`)

}