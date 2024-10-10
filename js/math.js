let number=120.6;

// Ramdom

let ramdon = Math.random() * 10;

console.log('Ramdom: ',ramdon);

let ramdonEntero= Math.ceil(ramdon);
console.log('Random entero', ramdonEntero);

// constantes

let pi= Math.PI;
let euler = Math.E;
let logarit2 = Math.LN2;

console.log('PI: ',pi);
console.log('EULER:',euler);
console.log('LOG', logarit2);
// redondeo

var ceeil = Math.ceil(number);
var flooor = Math.floor(number);
var rond = Math.round(number);
var truk = Math.trunc(number);

console.log('numero original: ',number);
console.log('aprox arriba: ',ceeil);
console.log('aprox abajo: ',flooor);
console.log('aprox cerca: ',rond);
console.log('corta decimal: ',truk);

// metodos aritmeticos y de calculo

let potencia = Math.pow(2,3);
let raiz = Math.sqrt(16);
let raiz3 = Math.cbrt(8);
let absoluto = Math.abs(-10);

console.log('Potencia: ',potencia);
console.log('Raiz: ',raiz);
console.log('Raiz3: ',raiz3);
console.log('Absoluto: ',absoluto);
// metodos


let loga = Math.log(8);
let loga2 = Math.log2(8);
let loga10 = Math.log10(8);

console.log('logaritmo: ',loga);
console.log('logaritmo2: ',loga2);
console.log('logaritmo10: ',loga10);
// DEVUELVE VALORES

let maxi = Math.max(2,5,9);
let mini = Math.min(2,5,9);

console.log('maximo: ', maxi);
console.log('minimo: ',mini);

// coseno  seno

let coss = Math.cos(50, 50);
let sinn = Math.sin(50, 50);
let tang = Math.tan(50, 50);

console.log('Coseno: ',coss);
console.log('Seno: ',sinn);
console.log('Tangente: ',tang);