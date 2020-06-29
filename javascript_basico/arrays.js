//declaracion de arreglos
var vacio=[];
var nombres=["carlos","alberto","andrea","marcela"];
console.log(nombres);

//tamaño del arreglo
console.log(nombres.length);

//acceder al arreglo
console.log(nombres[0]);

//adicionar un elemento al final del arreglo
nombres.push("liliana");

//eliminar el ultimo elemento del array
nombres.pop();

//agregar elemento al inicio del arreglo
nombres.unshift("julieta");

//borra el primer elemento
nombres.shift();

//posicion de un elemento
var posicion=nombres.indexOf("andrea");
console.log(posicion);

//agregar elementos en posicion especifica
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

//eliminar elemento de posicion especifica
var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
var removed = myFish.splice(3, 1);

// removed is ["mandarin"]
// myFish is ["angel", "clown", "drum", "sturgeon"] 