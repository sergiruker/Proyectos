/* 
Ejercicio 15:

Muestra la suma y la media de los números introducidos 
hasta introducir un número negativo;

*/

let suma =  0;
let numero = 0;
let ejecuciones = 0;

do{

    numero = parseInt(prompt("Introduce un número hasta que introduzcas un número negativo"));

    if(isNaN(numero)){

        numero = 0;
        
    } else if(numero >= 0){

        suma += numero

        ejecuciones ++;

    }

}while(numero >= 0)

alert("La suma de todos los números es: " + suma);
alert("La media de todos los números es: " + suma/ejecuciones);