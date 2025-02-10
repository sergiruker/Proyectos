let frameworks = ["Angular", "React", "Vue", "Astro", "NodeJS", "Svelte", "SolidJS", "Qwik", "ExpressJS"];

// Acceso manual
console.log(frameworks[0]);
console.log(frameworks[1]);
console.log(frameworks[2]);
console.log(frameworks[3]);
console.log(frameworks[4]);

// Acceso con bucles
for(let i = 0; i < frameworks.length; i++){

    console.log(frameworks[i]);

}

// Mostrar por pantalla

document.write("<h1>Listado de frameworks</h1>");

document.write("<ul>");

for(let i = 0; i < frameworks.length; i++){

    document.write("<li>"+frameworks[i]+"</li>");

}

document.write("</ul>");

// Bucles para recorrer el array

console.log("**********************************")

let actores = ["Arnold Swarseneger", "Sylvester Stallone", "Al Pacino", "Robert de Niro", "Leonardo Di Caprio", "Brad Pitt"];

console.log("Listado de actores:");

// Bucle For

for (let contador = 0; contador < actores.length; contador++){

    console.log(actores[contador]);

}

// Bucle For OF

for(let actor of actores){

console.log(actor);

}

// Bucle Foor IN

for(let indice in actores){

    console.log(indice, actores[indice]);

}

// Bucle For Each

actores.forEach((actor) => {

    console.log(actor);

});

// Bucle map

let nuevosActores = actores.map(actor => {

    console.log(actor)

    return actor + " Hollywood";

})

console.log(nuevosActores)

let categorias = ["Lucha", "Deportes", "Acción", "Sandbox", "Carreras"];
let titulos = ["Tekken", "Fifa", "Max Payne 3", "GTA 6", "NFS Unbound"];

let videojuegos = [categorias, titulos];

console.log(videojuegos);

console.log(videojuegos[1][2]);
console.log(videojuegos[0][4]);

// Arrays bidimensionales

let tabla = [
    ["Producto","Cantidad", "Precio"],
    ["PC",          2,          350],
    ["Smartphone",  4,          127],
    ["Impresora",   10,          57]
];

console.table(tabla);

console.log(tabla[2][0], tabla[2][2]);

document.write("<table border = 1>")

tabla.forEach((fila, indexFila) => {

    document.write("<tr>")

    fila.forEach(elemento =>{

        if(indexFila === 0){

            document.write("<th>"+ elemento + "</th>")

        } else {

            document.write("<td>"+ elemento + "</td>")

        }

    });
    document.write("</tr>")
});

document.write("</table>")

// Arrays tridimensionales

let cartaRestaurante = [
    ["Plato", "Cantidad", "Precios", "Tamaños"],
    ["Menu Pizza", 2, [8, 10, 15], ["pequeño", "mediano", "grande"]],
    ["Menu Burger", 4, [10, 12, 17], ["pequeño", "mediano", "grande"]],
    ["Menu Paella", 10, [14, 18, 25], ["pequeño", "mediano", "grande"]]
];

for (let menu of cartaRestaurante){

    console.log("-------------------------");

    console.log(menu)

    if(Array.isArray(menu[2]) && Array.isArray(menu[3])){
        console.log(menu[0]);

        for (let index in menu[2]){

            console.log(menu[3][index], menu[2], index, "euros")

        }
    }

    for(let elemento of menu){

        console.log(elemento)

        if(Array.isArray(elemento)){

            for(let subElemento of elemento){
                console.log(subElemento)
            }

        }else{
            console.log(elemento);
        }

    }

}