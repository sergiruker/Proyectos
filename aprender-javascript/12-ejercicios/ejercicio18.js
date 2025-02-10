/* 
Ejercicio 18:

Tenemos una colección de números desde el 1 al 17.

Y el usuario tiene que adivinar cuál es el elegido

Haz un programa que pueda adivinar el número.

*/

const numeroAdivinar = 7;
let intento;


while(intento != numeroAdivinar){
    intento = parseInt(prompt("Adivina el número (entre el 1 y 17)"));

    if(numeroAdivinar == intento){
        alert("Enhorabuena has acertado, era el "+ numeroAdivinar);
    }else{
        alert("Sigue intentándolo!!")
    }
}

