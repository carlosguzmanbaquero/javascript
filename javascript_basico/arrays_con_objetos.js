var personas = [
    {
        id: 12345,
        nombre: "carlos",
        apellido: "guzman",
        sexo: "M",
        edad: 18
    },
    {
        id: 22345,
        nombre: "alberto",
        apellido: "baquero",
        sexo: "M",
        edad: 15
    },
    {
        id: 32345,
        nombre: "andrea",
        apellido: "ramirez",
        sexo: "F",
        edad: 35
    }
];

//filtra por edad, retorna array
var personasFiltradas=personas.filter(function(persona){
    return persona.edad<=18;
});

//filtra por nopmbre, retorna array
var personasFiltradasNombre=personas.filter(function(persona){
    return persona.nombre=="carlos";
});

//mapea el valor del campo nombre de cada objeto, retorna array
var mapPersonas=personas.map(function(persona){
    return persona.nombre;
});

//mapea cual objeto tiene un nombre especifico, retorna array
var mapPersonaNombre=personas.map(function(persona){
    return persona.nombre=="carlos";
});

