/* 
Ejercicio 27:

Crea un array de personajes de péliculas y
clasificalos en grupos (héroes, villanos, etc.).

Muestra un mensaje para cada grupo.

*/

const personajes = [
    "V:Joker",
    "H:Batman", 
    "V:Duende Verde", 
    "H:Spiderman", 
    "V:Voldemort", 
    "H:Harry Potter", 
    "V:Frodo", "H:Sauron"];

let heroes = personajes.filter(personaje => personaje.startsWith("H:"));
let villanos = personajes.filter(personaje => personaje.startsWith("V:"));

console.log("Heroes:");
heroes.forEach(heroe => {
    console.log(heroe.split(":")[1]);
});

console.log("-----------------");

console.log("Villanos:");
heroes.forEach(villano => {
    console.log(villlano.split(2));
});