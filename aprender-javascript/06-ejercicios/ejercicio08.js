/* 
Ejercicio 8

Tengo una heladería y cada bola de helado vale 1.8 euros 

¿Cuánto cuestan los cucuruchos de 1, 2 y 3 bolas?

Ten en cuenta que el barquillo cuesta cincuenta céntimos de euro.

*/

let precioBola = 1.8;
let precioBarquillo = 0.5;

let unaBola = (precioBola * 1) + precioBarquillo;
let dosBolas = (precioBola * 2) + precioBarquillo;
let tresBolas = (precioBola * 3) + precioBarquillo;

console.log(`
    1. Cucurucho de una bola: ${unaBola} euros
    2. Cucurucho de dos bolas: ${dosBolas} euros
    3. Cucurucho de tres bolas: ${tresBolas} euros
    `)