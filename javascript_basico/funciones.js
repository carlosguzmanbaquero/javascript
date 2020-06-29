//declarativas
function miFuncion() {
    return 4;
}

miFuncion();

//expresión
var miFuncion = function (a, b) {
    return "hola";
}

miFuncion(a, b);

function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}

saludar("carlos");

function sumar(a, b) {
    var resultado = a + b;
    return resultado;
}

sumar(5, 1);

