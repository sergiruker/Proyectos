/* 
Ejercicio 25:

Crea un array de ingredientes para una receta absurda
(como una pizza de chocolate y piña).

Muestra la receta completa en una frase divertida.
*/

const ingredientes = ["masa","chocolate", "queso", "piña", "jamon", "oregano"];

let frase = `Receta absurda: Pizza de ${ingredientes.join(", ")} ¡Umm que rica delicius!`;

document.write("<h1>"+frase+"</h1>");

