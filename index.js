//01//
let Coche = {
    marca: 'carro',
    modelo: 'carro',
    matricula: 'car-098'
}
//02//
let Casa = {
    codPostal: 123456,
    calle: 'callecita',
    portal: 3,
    piso: 3
}
//03//
let FullStackDeveloper = {
    lenguajes : ['uno', 'dos', 'tres'],
    proyectos: ['proyect1', 'proyect2']
}
//04//
let Perro = {
    nombre: 'Chuletas',
    raza: 'Sharpei',
    color: 'crema',
    edad: 7,

    ladrar(){
        console.log('guau');
    },
    popo(){
        return Math.random()*3;
    }
}
//05//
let marcaPortatil = Portatil.marca;
//06//
let marcaPortatil2 = Portatil['marca'];
//07//
let grupos = Concierto.grupos;
//08//
let RGB = []
RGB.push(Led.rojo);
RGB.push(Led.verde);
RGB.push(Led.azul);
//09//
Portatil.modelo = 'P345';
//10//
Concierto.cartelera.push("Guns N' Roses")
//11//
Concierto.fecha = new Date();
//12//
Impresora.imprimiendo={nombreArchivo: 'tarea', copias: 4, numPaginas: 4}
//13//
let Noticia = {
    titular: 'noticia',
    cuerpo: 'muchas noticias',
}
//14//
let Persona = {
    nombre: 'Stephani',
    apellidos: 'Damiani',
    edad: 16 
}
//15//
let Avion={
    numPasajeros: 5,
    despegar(){
        console.log('despegando');
    },
    volar(){
        console.log('llegando al destino');
    },
    aterrizar(){
        console.log('aterrizando')
    }
}
//16//

//17//
let Pais = {
    numHabitantes: 33000000,
    continente: 'america',
    gentilicio: 'peruano'
}
//18//
let codError = O_Error.codigo;
//19//
let integrantes = Grupo.integrantes;
//20//
let nivelesTinta= Impresora.tinta;
//21//
let pixeles = Pantalla.pixeles;
//22//
let especificaciones = Movil['especificaciones']
//23//
Grupo.numIntegrantes = 5;
//24//
Pantalla.dimensiones = '1920x1080';
//25//
if(Led.encendido){
    Led.encendido = false
}
else{
    Led.encendido = true
}
//26//
Movil.temperatura = '20º';