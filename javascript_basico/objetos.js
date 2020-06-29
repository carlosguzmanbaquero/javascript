var objeto = {};

var persona = {
    id: 12345,
    nombre: "carlos",
    apellido: "guzman",
    sexo: "M",
    descripcion: function () {
        console.log(`nombre: ${this.nombre} apellido: ${this.apellido}`);
    }
};

console.log(persona.nombre);
console.log(persona.id);
persona.descripcion();

//////////////////////////////////////////////////
//crear funcion constructora
function persona(id, nombre, apellido, sexo) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.sexo = sexo;
}

var nuevaPersona = new persona(123456, "carlos", "guzman", "M");
var nuevaPersona = new persona(223456, "alberto", "baquero", "M");

