// Funciones
// Una función agrupa una serie de instrucciones para poder usarlas varias veces
// Es una agrupación reutilizable de un conjunto de instrucciones

function saludo(nombre, plato = "tortilla de patatas"){

    console.log("Hola abuela " +nombre+ "!!");

    console.log("¿Qué tal estás?");

    console.log("¿Me pasas la receta de tu "+plato+"??");

    return "Abuela " + nombre + " saludada correctamente"; 

}

let mensajeFinal = saludo("Carmen", "Lentejas");
saludo("Pepa", "tortilla")
saludo("Juana", "espaguetis")
saludo("Paz", "croquetas")
saludo("Laura", "potaje")
saludo("Amelia")

alert(mensajeFinal)

/*
for (let i = 0; i <=20; i++){

    saludo();

}
*/

// Calculadora

function operaciones(n1, n2) {
    let resultados = {
        "suma": (n1 + n2), 
        "resta": (n1 - n2),
        "multiplicacion": (n1 * n2),
        "division": (n1 / n2)
    };
    return resultados;
}

function porConsola(n1, n2) {
    let resultados = operaciones(n1, n2);

    console.log("Suma: " + (resultados.suma));
    console.log("Resta: " + (resultados.resta));
    console.log("Multiplicación: " + (resultados.multiplicacion));
    console.log("División: " + (resultados.division));

    return true;
}

function porPantalla(n1, n2) {
    let resultados = operaciones(n1, n2);

    document.write("<h1>Calculadora</h1>");
    document.write("<h2>Suma: " + (resultados.suma) + "</h2>");
    document.write("<h2>Resta: " + (resultados.resta) + "</h2>");
    document.write("<h2>Multiplicación: " + (resultados.multiplicacion) + "</h2>");
    document.write("<h2>División: " + (resultados.division) + "</h2>");
    document.write("<hr>");

    return true;
}

function calculadora(n1, n2, mostrar = false){

    if(mostrar == false){

        porConsola(n1,n2);

    } else{
        porPantalla(n1,n2)

        }
    }


calculadora(7,9);
calculadora(7,12,true);

//Parámetros ...REST 

function misPeliculas (pelicula1, pelicula2, ...resto_de_peliculas){

    console.log(pelicula1);
    console.log(pelicula2);
    console.log(resto_de_peliculas);

}

misPeliculas("Transporter", "Terminator", "Scary Movie", "Star Wars", "Vacaciones")

// Operador SPREAD

let numeros = [1, 2, 3, 4]; 

let misNumeros = [...numeros, 5, 6, 7, 8, 9, 10];

console.log(misNumeros);

let misPelisFav = ["TED", "Monstruos SA"];
misPeliculas(...misPelisFav, "Toy Story", "Saw", "Anabel");