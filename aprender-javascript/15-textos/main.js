// Longitud

let nombre = "Sergio Rocha";

console.log(nombre.length);

// Cnversión a texto

let numero = 1255;

console.log(typeof numero.toString());

// Convertir texto a mayúsculas

let web = "acb.com";

let webMayus = web.toUpperCase();

console.log(webMayus);

// Convertir  minúsculas

let plato = "PIZZA NAPOLITANA";

console.log(plato.toLowerCase());

// Conseguir una letra concreta

let frase  = "Soy muy guay del paraguay";

console.log(frase.charAt(1))

// Comprobar si una cadena tiene dentro otra

let eslogan = "No soy el mejor, pero seguramente si seré al que mejor entiendas";

if(eslogan.includes("programador")){

    console.log("La palabra SEGURAMENTE si existe en el eslogan");

}else{

    console.log("Que dices loco!! esa palabra no existe")

}

// Buscar la posición de una palabra

let mensaje = "Estas aprendiendo Javascript como un autentico loco";

console.log(mensaje.indexOf("autentico"));

// Extraer parte de un texto

let curso = "Master en Javascript";

console.log(curso.slice(0,6));

// Remplazar parte de un texto
// .replace remplazo 1 aparición
// .replaceAll sustituyo todas las aparieciones

let pelicula = "Dos tontos muy tontos";

console.log(pelicula.replace("tontos", "listos"));
console.log(pelicula.replaceAll("tontos", "listos"));

// Trim eliminar espacios por delante y por detrás

let email = "   sergiruker@gmail.com    ";
console.log(email.trim());

// Separar cadena por partes

let listaCompra = "huevos,hamburguesas,platanos,lechuga,tomate,yogures";

let listaArray = listaCompra.split(",");

console.log(listaArray);

// Extraer parte de un texto

let cursoDos = "Master en React";

console.log(cursoDos.substring(10));

// Concatenar o unir cadenas de texto

let ciudad = "Murcia";
let pais = "España";

let fraseFinal = "Mi ciudad es "+ ciudad + " y está en " + pais;
console.log(fraseFinal)

fraseFinal = `Mi ciudad es ${ciudad} y está en ${pais}`;
console.log(fraseFinal)

fraseFinal = "".concat("Mi ciudad es ",ciudad, " y está en ", pais);
console.log(fraseFinal)

// Comienza por una frase específica

let fraseDos = "Bienvenido a mi nuevo curso de programación";
console.log(fraseDos.startsWith("Bienvenido"));

// Acaba por una frase específica

let fraseTres = "Bienvenido a mi nuevo curso de programación";
console.log(fraseTres.endsWith("programación"));

// Repetir palabras

let mensajito = "Javascript mola mucho \n";
console.log(mensajito.repeat(10));

// Buscar texto en una cadena

// Método search y match

let miCadena = "Pablito clavó un clavito clavó";
console.log(miCadena.search("clavó"));
console.log(miCadena.search(/clavó/g));

console.log(miCadena.match("clavó"));
