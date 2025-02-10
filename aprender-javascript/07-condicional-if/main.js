// Condicional IF
// Si A es igual a B entonces haz algo

// Ejemplo 1:

let estaLloviendo = true;

if (estaLloviendo === true){

    // Si se cumple la condición, Se ejecuta esto
    console.log("Me llevo mi paraguas, para que no me llueva encima!!");

} else{

    // Si no se cumple, ejecuta esto otro
    console.log("No me llevo paraguas.");

}

// Ejemplo 2:

let quieroCebolla = true;

if(quieroCebolla){

    console.log("Tu hamburguesa llevará cebolla");

}else{

    console.log("Tu burguer no lleva cebolla");

}

// Ejemplo 3

let nombre = "Joaquín Pérez";
let edad = 1;

if(edad >= 18){
    
    // Es mayor de edad
    console.log(nombre + " tiene " + edad + " años, y es mayor de edad");
    if(edad <=20){
    
        console.log("Es un adolescente");
    
    } else if (edad >= 70){

        console.log("Es un anciano");

    } else{

        console.log("Es un adulto");

    }

}else{

    // No es mayor de edad
    console.log(`${nombre} que tiene ${edad} años, NO ES MAYOR DE EDAD`);
    
}

// Ejemplo 4:

let buenTiempo = false;

if(!buenTiempo){
    console.log("No vamos a ningún sitio, nos quedamos en casa");
}

// Ejemplo 5:

let year = 2027;

if(year >= 2000 && year <= 2030){
    
    console.log("Estamos en la era moderna");

}else if(year > 2030){

    console.log("Estamos en la era POST MODERNA");

}else{

    console.log("Estas en la era antigua!!");

}

// Ejemplo 6

if (year == 2007 || year == 2017 || year == 2027 || year == 2037){

    console.log("El año acaba en 7");

}else {

    console.log("Año desconocido");

}