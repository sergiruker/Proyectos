// Crear un array

let dispositivos = ["pc", "laptop", "tablet", "movil", "smartwatch"];

console.log(dispositivos);

// Longitud del array
console.log(dispositivos.length);

// Añadir elementos

dispositivos.push("ps5");
dispositivos.push("tostadora");

console.log(dispositivos);

// Eliminar elementos

dispositivos.pop();
console.log(dispositivos);

// Agregar elementos al principio de un array
dispositivos.unshift("psp");
dispositivos.unshift("ps4");

// Eliminar el primer elemento de un array
dispositivos.shift();
dispositivos.shift();

// Búsqueda devuelve indice

let indice = dispositivos.indexOf("laptop");

console.log(indice);

// Búsqueda para ver si existe un elemento

let existe = dispositivos.includes("ps4");

console.log(existe);

// Filtrar arrays
dispositivos.push("ps4");
dispositivos.push("frigorífico");
dispositivos.push("robot aspirador");

let dispositivosConA= dispositivos.filter(dispositivo =>{

    let resultado = false;
    
    if(dispositivo.includes("a")){

        resultado = true;

    }
    
    return resultado
});

console.log(dispositivosConA)

let dispositivosConA2= dispositivos.filter(dispositivo => dispositivo.includes("a"));
console.log(dispositivosConA2);

// Reduce
let reducir = dispositivos.reduce((total, actual, indice) => {
    let capitalizarTotal = total;

    if (indice === 1) {
        capitalizarTotal = total[0].toUpperCase() + total.slice(1).toLowerCase();
    }

    let capitalizarActual = actual[0].toUpperCase() + actual.slice(1).toLowerCase();

    return capitalizarTotal + ", " + capitalizarActual;
});

console.log(reducir);

let numeros = [1, 2, 3, 4];

let suma = numeros.reduce((acumulador, numeroActual, iteraciones) => acumulador+numeroActual)

console.log(suma)

// Ordenar 

dispositivos.sort();

console.log(dispositivos);

// Revertir

dispositivos.reverse();

console.log(dispositivos);

// Combinar arrays

let union = dispositivos.concat(numeros);

console.log(union);

// Convertir en cadena

let etiquetas = dispositivos.join(", ");

console.log(etiquetas);

// Copiar porción de array

let misGadgetsFavs = dispositivos.slice (3,5);

console.log(misGadgetsFavs);

// Búsqueda en arrays

let buscar = dispositivos.find(dispositivo => dispositivo.length > 5);

console.log(buscar);

// Buscar pero devuelve index

let buscarIndice = dispositivos.findIndex(dispositivo => dispositivo.length > 7);

console.log(buscarIndice);

// Some

let letrasE = dispositivos.some(dispositivo => dispositivo.includes("e"));

console.log(letrasE);

// Every

let letrasA = dispositivos.every(dispositivo => dispositivo.includes("a"));

// Aplanar

let anios = [
    [1990, 1991, 1992],
    [2001, 2002, 2005],
    [2010, 2011, 2015, [2020,2021,2024,[2025,2026,2027]]]
];

let plana = anios.flat(3);

console.log(plana)

// CopyWithin
let fechas = ["01-01-1991", "02-02-1992", "03-03-1993", "04-04-1994", "05-05-1995"];

fechas.copyWithin(0, 3, 5);

console.log(fechas)

// Convertir string en array

let nombre = "Sergio";

let arrayString = Array.from(nombre);

console.log(arrayString);

// Desestructuración

let [uno, dos, tres] = [1,2,3];

console.log(tres);

let [actor, ...restodeActores] = ["Robert de Niro", "Bruce Willis", "Keanu Reeves"];

console.log(restodeActores);

// Expandir arrays

let array1 = [1,2,3];
let array2 = [4,5,6];

let arrayCompleto = [...array1,...array2];

console.log(arrayCompleto)

// De array a string

console.log(dispositivos.toString());

// De string a array

let frase = "Bienvenidos al curso de Javascript mas sencillo de entender";

let palabras = frase.split(" ");

console.log(palabras);

// Pasar a seo slug

let slug = palabras.join("-").toLowerCase;

console.log(slug);