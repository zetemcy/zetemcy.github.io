// LLAMAMOS COMO UNA VARIABLE NORMAL


// SIEMPRE CON CORCHETES NOMALES ------> {}
let manager = {}
// 1---
// ASIGANMOS CON (PUNTO)( . ) NUEVAS NOMBRE DE PROPIEDADES PARA EL OBEJTO
// OBJETO.PROPIEDAD = VALOR (O.P = V )
// ASIGNAMOS VALOR CON IGUAL ( P = V )
manager.rangeTilesPerTurn=4;
manager.socialSkills = 50;
manager.streetSmarts = 50;
manager.health = 30;
manager.specialAbility="finder business opportunities";
manager.greeting = " lets make some money";


// 2 ---
// ASIGNAMOS TODO EN UN BLOQUE SEPARANDOLOS CON COMA ( PROPIEDAD:VALOR )( COMA )
// ASIGNAMOS EL VALOR CON 2 PUNTOS  (P : V)
let assitant = {
    movement:3,
    socialSkills:30,
    streetSmarts:30,
    health:40
}

// PODEMOS AGREGAR PROPIEDADES

manager.nextArchivement = "Open a new sotre";
assitant.nextArchivement = "get promoted";


// 3---
// OBJETO CON CORCHETES
var car={};
// asignamos la clave propiedad con corchetes cuadrados y entre comillas
// esto acepta espacion en las claves
// OBJETO['PROPIEDAD']=VALOR;
car['color']='green';
car["speed"]=250;
car['doors']=2;

// esta menra me permite evaluar condiciones

let dronCuality=['speed','color','altitud']
let dron={
    speed:200,
    altitud:1000,
    color:'black'
}
for (let i = 0; i < dronCuality.length; i++) {
    console.log(dron[dronCuality[i]])
}

// ++++++++las matrices tambien son objetos+++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// para manipular las matrices objeto 

// push() ----------para agregar
// pop() -----------para borra el ultimo objeto

// push()-------------
let fruit=[];

fruit.push('manzana')
fruit.push('pera')

console.log(fruit)

// Pop()---------


fruit.pop()

console.log(fruit)


// combinacion de habilidades con matrices


function fruitBuilder(one,two,three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}

var frutas = fruitBuilder('mango','banano','sandia');

console.log(frutas)