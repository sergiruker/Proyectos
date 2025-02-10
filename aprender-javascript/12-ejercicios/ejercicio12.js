/* 
Ejercicio 12:

Programa que pida dos números y que nos diga cuál es mayor, el menor y si son iguales

PLUS: Si los números no son un numero o son menores o iguales a 0,
no los vuelva a pedir

*/

let numero1 = parseInt(prompt("Dame el primer número:", 0));
let numero2 = parseInt(prompt("Dame el segundo número:", 0));

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){

    numero1 = parseInt(prompt("Dame el primer número:", 0));
    numero2 = parseInt(prompt("Dame el segundo número:", 0));
}

if(numero1 === numero2){

    alert("Los números son exactamente iguales")

} else if(numero1 > numero2){

    alert("El numero mayor es el " + numero1);
    alert("El número menor es el " +numero2)

} else if(numero1 < numero2){

    alert("El numero mayor es el " + numero2);
    alert("El número menor es el " +numero1)
    
} else{

    alert("No has metido bien los números !!")

}