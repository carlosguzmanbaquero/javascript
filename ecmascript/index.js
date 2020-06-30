
//funciones con parametros por defecto
    //asi se creaba anteriormente
    function funcionAnteriormente(nombre, edad, pais) {
        var nombre = nombre || "carlos";
        var edad = edad || 31;
        var pais = pais || "Colombia";
        console.log(nombre, edad, pais);
    }

    //es6
    function funcionEs6(nombre = "carlos", edad = "31", pais = "Colombia") {
        console.log(nombre, edad, pais);
    }

    funcionEs6();
    funcionEs6("Alberto", "25", "Mexico");

//concatenar variables
    let hola = "hola";
    let mundo = "mundo";

    let concatenar = hola + ' ' + mundo;
    console.log(concatenar);

    //es6
    let concatenar2 = `${hola} ${mundo}`;
    console.log(concatenar2);

//multilinea en String
    let parrafo1 = "Esta es una prueba de parrafo con dos lineas\n" +
        "otro parrafo";
    //es6
    let parrafo2 = `Esta es una prueba de parrafo con dos lineas
                    otro parrafo`;

    console.log(parrafo1);
    console.log(parrafo2);


//let, var

    //var global
    //let presente por bloque
    {
        var globalVar = "Global var";
    }

    {
        let globalLet = "Global let";
        console.log(globalLet);
    }

    console.log(globalVar);
    //console.log(globalLet); //genera error por variable no definida

    //ejemplo en comportamiento
    function printNumbers() {
        for (var i = 0; i < 10; i++) {
            setTimeout(
                function printer() {
                    console.log(i);
                },
                100 * i
            );
        }
    }

    printNumbers();

    function printNumbers() {
        var i;

        for (i = 0; i < 10; i++) {
            setTimeout(
                function printer() {
                    console.log(i);
                },
                100 * i
            );
        }
    }

    printNumbers();

    //con let //es6
    function printNumbers() {
        for (let i = 0; i < 10; i++) {
            // Cuando usamos let en un for-loop, es como si definieramos `i` aquí.

            setTimeout(
                function printer() {
                    console.log(i);
                },
                100 * i
            );
        }
    }

    printNumbers();

//desestructurar objetos
    let persona = {
        'nombre': 'carlos',
        'edad': 31,
        'pais': 'Colombia'
    }

    console.log(persona.nombre, persona.edad, persona.pais);

    //es6
    let { nombre, edad, pais } = persona;
    console.log(nombre, edad, pais);

//propagacion de elementos es6
    let equipo1 = ["carlos", "alberto", "andres"];
    let equipo2 = ["maria", "julieth", "alexandra"];
    let equipo3 = ["juliana", ...equipo1, ...equipo2];
    console.log(equipo3);

//const
    const constante = 5;
    //constante=3; // no permite cambiar el valor
    console.log(constante);

//crear objetos apartir de variables
    let nombre = 'carlos';
    let edad = 31;

    obj = {
        nombre: nombre, edad: edad
    }

    //es6
    obj2 = {
        nombre, edad
    }

    console.log(obj);
    console.log(obj2);

//arrow functions
    const names =[
        {name: 'carlos', age:31},
        {name: 'alberto', age:31}
    ];

    let listName= names.map(function(item){
        console.log(item.name);
    });

    let listName2=names.map(item=>console.log(item.name));

    let nombrePrueba="carlos";
    let edadPrueba=31;
    const listName3=(nombrePrueba, edadPrueba)=>{
        console.log(nombrePrueba, edadPrueba);
    }
    listName3("hola",4);

    const listName4=name=>{
        console.log(name);
    }
    listName4('carlos');

    const square=num=>num*num;
    console.log(square(3));

//promesas
    const pruebaPromesa=()=>{
        return new Promise((resolve, reject)=>{
            if(false){
                resolve('ok');
            }else{
                reject('no ok');
            }
        });
    }

    pruebaPromesa()
    .then(response=>console.log(response))
    .catch(error=>console.log(error));

//clases
    class calculator{
        constructor(){
            this.valueA=0;
            this.valueB=0;
        }

        suma(valueA, valueB){
            this.valueA=valueA;
            this.valueB=valueB;
            return this.valueA+this.valueB;
        }
    }

    //llmar una clase y sus metodos
    const calc=new calculator();
    console.log(calc.suma(2,2));

//importar modulos
    import { hello } from './module';
    hello();

//generator
    function* helloWorld(){
        if(true){
            yield 'hello, ';
        }

        if(true){
            yield 'world';
        }
    }

    const generatorHello= helloWorld();
    console.log(generatorHello.next().value);
    console.log(generatorHello.next().value);

//es7
    let numbers = [1,2,3,7,8];

    if(numbers.includes(7)){
        console.log('si se encuentra el valor');
    }else{
        console.log('no se encuentra el valor');
    }

    let base=4;
    let exponent=3;
    let result=base**exponent;

    console.log(result);

//es8
    //entries
    const data ={
        fronted:'maria',
        backend:'lina',
        design:'juliana'
    }

    const entries=Object.entries(data);
    console.log(entries);
    console.log(entries.length);

    //object values
    const data ={
        fronted:'maria',
        backend:'lina',
        design:'juliana'
    }

    const values = Object.values(data);
    console.log(values);
    console.log(values.length);

    //pad start y pad end
    const string ='hola';
    console.log(string.padStart(7, 'hola'));
    console.log(string.padEnd(10, '......'));

    //async await
    const helloWorld =()=>{
        return new Promise((resolve, reject)=>{
            (true)
                ? setTimeout(()=>resolve('hello world'), 3000)
                : reject(new Error('Test error'))
        })
    };

    const helloAsync = async()=>{
        const hello = await helloWorld();
        //const hello2 = await helloWorld();
        console.log(hello);
       // console.log(hello2);
    }

    helloAsync();

    const anotherFunction = async()=>{
        try{
            const hello = await helloWorld();
            //const hello2 = await helloWorld();
            console.log(hello);
           // console.log(hello2);
        }catch(error){
            console.log(error);
        }
    };

    anotherFunction();

//es9
    let persona = {
        'nombre': 'carlos',
        'edad': 31,
        'pais': 'Colombia'
    };

    let { nombre, ...all} = persona;
    console.log(nombre, all);

    let persona1 = {
        'nombre': 'carlos',
        'edad': 31,      
    };

    let persona2 = {
        ...persona1,
        'pais': 'Colombia'
    };

    console.log(persona2);

    //promise finally
    const helloWorld=()=>{
        return new Promise((resolve, reject)=>{
            (true)
                //? resolve('hello world')
                ?setTimeout(()=>resolve('hello world'), 3000)
                : reject(new Error('test error'))
        });
    };

    helloWorld()
        .then(response=>console.log(response))
        .catch(error=>console.log(error))
        .finally(()=>console.log('finalizo'));

    //regex
    const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
    const match =regexData.exec('2020-06-28');
    const year = match[1];
    const month = match[2];
    const day = match[3];

    console.log(year,month, day);

//es10
    //aplanar matriz flat()
    let array = [1,2,3, [1,2,3, [1,2,3]]];
    console.log(array.flat(2));

    //flatMap()
    let array = [1,2,3,4,5];
    console.log(array.flatMap(value => [value, value*2]));

    //trimstart y trimEnd
    let hello='   hola mundo';
    console.log(hello);
    console.log(hello.trimStart());

    let hello='hola mundo     ';
    console.log(hello);
    console.log(hello.trimEnd());

    //convertir arreglos en objetos
    let entries = [['nombre','carlos'], ['edad',31]];
    console.log(Object.fromEntries(entries));

    //symbol
    let mySymbol='my symbol';
    let symbol= Symbol(mySymbol);
    console.log(symbol.description);

    //trabajar con el error del try catch si pasar el error como parametro en el catch
    try {
        
    } catch {
        error
    }

    