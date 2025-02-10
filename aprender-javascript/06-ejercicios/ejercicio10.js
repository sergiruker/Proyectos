/* 
Ejercicio 10

El otro día fui con mi amigo Pepe y Manolo a un restaurante de smash burgers.

Yo me comí 2, Pepe se comió 3 y Manolo, como es culturista se comió 6.

¿Cuántas hamburguesas nos comimos en total?

Y... ¿Es cierto que yo comí menos que Pepe?

Responde a estas dos preguntas devolviendo el resultado en la consola del navegador.
*/

let yo = 2;
let pepe = 3;
let manolo = 6;

let hamburguesasTotales = yo + pepe + manolo;

let esCierto = yo < pepe;

console.log("En total hemos comido " + hamburguesasTotales + " hamburguesas");
console.log("¿Es cierto que yo comí menos que Pepe?: " + esCierto);