var nombres = ["carlos", "andres", "maria", "laura"]

function saludar(nombre) {
    console.log(`hola ${nombre}`);
}

console.log("for");
//for
for (var i = 0; i < nombres.length; i++) {
    saludar(nombres[i]);
}

console.log("for of");
//for of
for (var nombre of nombres) {
    saludar(nombre);
}

console.log("while");
//while
var i=0;
while(i<nombres.length){
    saludar(nombres[i]);
    i++;
}

console.log("while2");
//otro ejemplo de while
while(nombres.length>0){
    var nombre=nombres.shift();
    saludar(nombre);
}
console.log(nombres);