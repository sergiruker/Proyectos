// Evento Lo que sucede cuando el usuario interactúa con la página

//***** EVENTOS DE RATON *****/

// Click

let botoncito = document.querySelector("#botoncito");

botoncito.addEventListener("click", (event) =>{

    alert("Has dado click al botoncito!!");

    console.log(event);

});

// Doble click

let botonDoble = document.querySelector("#botonDoble");

botonDoble.addEventListener("dblclick", () =>{

    alert("Has dado dos clicks!! :)")

});

let cajaTexto = document.querySelector("#cajaTexto");

cajaTexto.addEventListener("mouseover", () =>{
    console.log("Has pasado por encima de la textarea!");
})

cajaTexto.addEventListener("mouseout", () =>{
    console.warn("Has salido de la caja de texto!!");
});

cajaTexto.addEventListener("mousemove", () =>{
    console.error("Te estas moviendo dentro del textarea");
});

//****** EVENTOS DE TECLADO *****/

let campoTexto = document.querySelector("#campoTexto");

campoTexto.addEventListener("keydown", (event) => {
    console.log("Has presionado la tecla: "+ event.key);
});

campoTexto.addEventListener("keyup", (event) => {
    console.warn("Has levantado la tecla: "+ event.key);
});

campoTexto.addEventListener("keypress", (event) => {
    console.error("Mantienes presionada la tecla: "+ event.key);
});

/***** EVENTOS DE FORNULARIO *****/

let superFormulario = document.querySelector("#superFormulario");

superFormulario.addEventListener("submit", (event) =>{

    event.preventDefault();

    let nombre = document.querySelector("#nombre").value;
    let email = document.querySelector("#email").value;

    alert(nombre);
    alert(email);
    alert(genero);

});

let inputNombre = document.querySelector("#nombre");

inputNombre.addEventListener("input", function() {

    console.log("El usuario ha escrito: "+this.value);

});

// change para cuando un elemento cambia de valor

let selectGenero = document.querySelector("#genero");

selectGenero.addEventListener("change", () =>{

    console.warn("Has cambiado el select a: "+selectGenero.value);

});

let campoEmail = document.querySelector("#email");

campoEmail.addEventListener("focus", ()  => {

    console.log("Acabas de entrar al campo del email OJITO");

    campoEmail.style.border = "5px solid red";

});

campoEmail.addEventListener("blur", ()  => {

    console.log("Has salido del foco");

    campoEmail.style.border = "2px solid black";

});

// Eventos del documento y la ventana para saber que el Dom está cargandose en nuestra web

document.addEventListener("DOMContentLoaded", () =>{

    // Aquí hago todo mi código de JavaScript

    console.log("TODO EL DOM ESTA CARGADO");

});

window.addEventListener("load", () => {

    console.warn("Toda la web esta cargada, incluido los recursos !!**");

});

// Para saber temas de responsive y el tamaño de la pantalla
window.addEventListener("resize", () => {

    console.log("Ventana redimensionada!!"+window.innerWidth+ " "+window.innerHeight);
});

// scroll para saber el pixel en el que estoy de scroll

window.addEventListener("scroll", () => {

    console.log("Estas en el pixel"+Math.round(window.scrollY)+" de scroll en la pantalla");

});

// Eventos del portapapeles

let portapapeles = document.querySelector("#portapapeles");

portapapeles.addEventListener("copy", () => {

    alert("Ey ey no copies, está prohibido");

    // Vaciar el portapapeles
    navigator.clipboard.writeText("");

});

portapapeles.addEventListener("paste", () => {

    alert("Has pegado un texto en el input!!");

});

portapapeles.addEventListener("cut", () => {

    alert("Has cortado un texto para llevartelo a saber!!");

});

portapapeles.addEventListener("contextmenu", () => {

    console.warn("El usuario ha abierto el menú contextual");

});

// Bloquear el menu contextual
portapapeles.addEventListener("contextmenu", (event) => {
    
    event.preventDefault();

});

// Dejar de escuchar eventos

let botoncito2 = document.querySelector("#botoncito2");
function alertita (){

    alert("Has dado click al botoncito2!!");

}

botoncito2.addEventListener("click", alertita);

setTimeout(() => {

    botoncito2.removeEventListener("click", alertita);

    alert("¡YA NO PUEDES USAR EL BOTONCITO!");

}, 10000);

// Propagación de eventos

let cajaPadre = document.querySelector("#cajaPAdre");
let botonHijo = document.querySelector("#botonHijo");

cajaPadre.addEventListener("click", () => {

    alert("Has tocado el ELEMENTO PADRE!!");

});

botonHijo.addEventListener("click", (event) => {

    // Para evitar la propagación
    event.stopPropagation();

    alert("Has tocado el ELEMENTO HIJO!!");

});