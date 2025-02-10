/*
Ejercicio 16:

Escribe un programa que muestre la tabla de multiplicar 
del numero que te diga el usuario

*/

let numero = parseInt(prompt("Escribe el número del que quieras saber su tabla de multiplicar"));
let resultado = "Tabla Del " + numero + ":\n"; 

for (let i = 1; i <= 10; i++) {
    let multiplicar = numero * i;
    resultado += i + " x " + numero + " = " + multiplicar + "\n"; 
}

console.log(resultado);

