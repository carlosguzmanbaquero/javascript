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

//trae la lista a de lo encontrado
var busquedaPersona=personas.find(function(persona){
    return persona.nombre==="carlos";
});

//trae los nombres de cada objeto
personas.forEach(function(persona){
    console.log(persona.nombre)
});

//valida si se cumple la condicion sin retornar una lista (true o false)
var personasMenoresDeEdad= personas.some(function(persona){
    return persona.edad>=17;
})