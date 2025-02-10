/* 
Ejercicio 13:

Tengo un canguro que salta 3 metros cada vez.

Haz un programa que me diga cuantos saltos ha dado el canguro...

y cual es la distancia total recorrida tras 17 saltos.

*/
let distanciaSalto = 3;
let saltos = 17;

let distanciaRecorrida = 0;

for ( let contador = 1; contador <= 17 ; contador++){

    distanciaRecorrida += distanciaSalto;

    console.log("El canguro ha saltado " + saltos + " saltos y la distancia recorrida es de " + distanciaRecorrida + " metros");

}

