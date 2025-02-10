/*
Ejercicio 30:

Crea una función que reciba un número y devuelva un factorial
*/

let elFactorial = (numero)=> {
    if(numero <= 1){
        return 1;
    }

    let factorial = 1;

    for(let i = 2; i <= numero; i++){
        
        factorial = factorial * i;
    }

    return factorial;
}

console.log(
    elFactorial(
        Number(prompt("Dime un número y te dire su factorial", 0))
    )
)