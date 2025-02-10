/*
Ejercicio 6

En mi tienda de videojuegos tenemos una oferta.

Si compras un juego de 50 euros o más, te hacemos un 20% de descuento.

Si un cliente compra el Tekken 15 que cuesta 50 euros ¿En cuánto se le queda?

*/

let juego = 50;
let descuento = juego * 0.2;

let precio = juego - descuento;

console.log("El precio del Tekken 15 tras aplicar el descuento es de: " + precio + " euros")
