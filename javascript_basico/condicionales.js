//if
if (false) {
    console.log("hola");
}

if (true) {
    console.log("hola");
} else {
    console.log("no hola");
}

var edad = 17;
if (edad === 18) {
    console.log("primera votación");
} else if (edad > 18) {
    console.log("puedes votar de nuevo");
} else {
    console.log("no puedes votar");
}

var numero = 4;
var resultado = numero == 4 ? "el número es cuatro" : `el número no es cuatro`
console.log(resultado);

//switch
var numero=1;
switch(numero){
    case 1:
        console.log("valor 1");
        break;
    case 2:
        console.log("valor 2");
        break;
    default:
        console.log("numero no configurado");
}