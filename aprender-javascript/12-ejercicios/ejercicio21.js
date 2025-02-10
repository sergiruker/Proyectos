/*
Ejercicio 21:

Calculadora:
- Pide dos números por pantalla 
- Si metemos uno mal que nos lo vuelva a pedir
- En una alerta y por la consola el resultado de
  sumar, restar, multiplicar y dividir esas dos cifras

*/

let n1;
let n2;

while (n1 < 0 || n2 < 0 || isNaN(n1) || isNaN(n2)){

    n1 = parseInt(prompt("Dame el primer número"));
    n2 = parseInt(prompt("Dame el segundo número"));

}

let resultado = `
Suma: ${n1+n2}
Resta: ${n1-n2}
Multiplicación: ${n1*n2}
División: ${n1/n2}
Resto: ${n1%n2}
`;

alert(resultado);
console.log(resultado);
