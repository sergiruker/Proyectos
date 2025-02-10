/*
Ejercicio 14:

Un DJ no sabe que género musical poner en la fiesta...

Pregúntales al usuario que genero quiere (pop, rock, o rap)

Según lo que prefiera devuelve un mensaje diferente

*/

let genero = prompt("¿Qué género musical quieres (pop, rock, rap)?");

if(genero === "pop"){

    alert("El usuario ha elegido pop");
}else if (genero === "rock"){

    alert("El usuario ha elegido rock");

 }else if (genero === "rap"){

    alert("El usuario ha elegido rap");

 }else{

    alert("Elige una opción entre pop, rock o rap")

 }



