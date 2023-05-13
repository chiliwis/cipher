function encriptar () {
    let frase = document.getElementById("mensaje").value.toLowerCase();

//i=insensible a mayusculas y minusculas
//g= toma en cuenta toda la linea o la oracion
//m= toma en cuenta todas las lineas

    let mensaje = frase.replace(/e/img, "enter");
    mensaje = mensaje.replace(/o/img, "ober");
    mensaje = mensaje.replace(/i/img, "imes");
    mensaje = mensaje.replace(/a/img, "ai");
    mensaje = mensaje.replace(/u/img, "ufat");

    document.getElementById("resultado").innerHTML = mensaje;
    document.getElementById("resultado").classList.add("sin-muneco");
    document.getElementById("botoncopiar").style.display = "show";
    document.getElementById("botoncopiar").style.display = "inherit"; 
}

function desencriptar () {
    let frase = document.getElementById("mensaje").value.toLowerCase();

//i=insensible a mayusculas y minusculas
//g= toma en cuenta toda la linea o la oracion
//m= toma en cuenta todas las lineas

    let mensaje = frase.replace(/enter/img, "e");
    mensaje = mensaje.replace(/ober/img, "o");
    mensaje = mensaje.replace(/imes/img, "i");
    mensaje = mensaje.replace(/ai/img, "a");
    mensaje = mensaje.replace(/ufat/img, "u");

    document.getElementById("resultado").innerHTML = mensaje;
    document.getElementById("resultado").classList.add("sin-muneco");
}

function copiar() {
    let contenido = document.querySelector("#resultado");
    contenido.select();
    document.execCommand("copy");
}