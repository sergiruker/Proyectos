// BOM - Browser Object Model

// Alertas y dialogos

// alert("¡Saludos abuelita este curso lo estan viendo miles de personas!");

// prompt("¿Como se llama tu abuela?");

// confirm("¿Tu abuela tiene mas de 75 años?");

// Window

console.log(window);

// Ver alturas de la pantalla en px
console.log(window.innerWidth);
console.log(window.innerHeight);

// Alturas reales
console.log(window.outerWidth, window.outerHeight);

// Saber si tengo permisos en el DOM y saber que modelo de navegador estoy usando
console.log(window.closed, window.document, window.navigator.userAgent);

// Hacer temporizadores

/*
window.setInterval(() => {
    console.log("Hola abuelita");
}, 1000);
*/

// Para saber cuanto scroll ha hecho un usuario
console.log(window.scrollX, window.scrollY);

// Navigator

// Datos version de app y nombre
console.log(navigator);
/*
if(navigator.onLine){
    alert("OJO que no tienes internet, conectate al wifi más cercano");
} else{
    alert("Estas en línea!");
}
*/


// Location

console.log(location.href);
console.log(location.hostname);

// location.href = "https://acb.com"

// Reload para recargar la página

// History

// Vuelvo a la página anterior
history.back();

// Ir a la página siguiente
history.forward();

// Ir a la interacción 7
history.go(7);

// Screen 
console.log(screen.width, screen.height);

// Ventanas emergentes y pop ups 

let miWeb = window.open("https://acb.com", "Página web de baloncesto", "width=850,height=550,top=500");
