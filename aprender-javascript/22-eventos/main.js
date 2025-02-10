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

// change oara cuando un elemento cambia de valor

let selectGenero = document.querySelector("#genero");

selectGenero.addEventListener("change", () =>{

    console.warn("Has cambiado el select a: "+selectGenero.value);

});