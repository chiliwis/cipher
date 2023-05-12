function encriptar () {
    let frase = document.getElementById("mensaje").value.toLowerCase();

//i=insensible a mayusculas y minusculas
//g= toma en cuenta toda la linea o la oracion
//m= toma en cuenta todas las lineas

    var mensaje = frase.replace(/e/img, "enter");
    var mensaje = mensaje.replace(/o/img, "ober");
    var mensaje = mensaje.replace(/i/img, "imes");
    var mensaje = mensaje.replace(/a/img, "ai");
    var mensaje = mensaje.replace(/u/img, "ufat");

    document.getElementById("resultado").innerHTML = mensaje;
}

function desencriptar () {
    let frase = document.getElementById("mensaje").value.toLowerCase();

//i=insensible a mayusculas y minusculas
//g= toma en cuenta toda la linea o la oracion
//m= toma en cuenta todas las lineas

    var mensaje = frase.replace(/enter/img, "e");
    var mensaje = mensaje.replace(/ober/img, "o");
    var mensaje = mensaje.replace(/imes/img, "i");
    var mensaje = mensaje.replace(/ai/img, "a");
    var mensaje = mensaje.replace(/ufat/img, "u");

    document.getElementById("resultado").innerHTML = mensaje;
}