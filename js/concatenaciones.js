let saludo = "holas";
let mundo = "mundos";

// length sirve para contar todo lo caracteres de la variable
longutud = saludo.length;
console.log(longutud);


// Con charAt() escogemos individualmente un carates de la cadena de la variable
escogo = saludo.charAt(3);
console.log(escogo);


// Con concat("") nos permite unir cadenas de texto en una sola variable
unidendo = "wo".concat("rl").concat("d");
console.log(unidendo);


// indexOf("h") no permite saber en que numero de idexsacion esta el carater
// lastIndexOf() es pracicamente lo mismo solo que nos indica el ultimo 
ubica = "ho-ho-ho".indexOf("h");
console.log(ubica);


// split("-") es util para cortar las cadenas determinandole un carater divisor
// generando una matriz de cadenas 
cortar = "cut-cut-cut".split("-");
console.log(cortar);


// toUpperCase y toLowerCase nos sirve para tranformar la cadena a mayusculas o minusculas
mayusculas = "soy minusculas";
minusculas = "SOY MAYUSCULAS";
mayus = mayusculas.toUpperCase();
minus= minusculas.toLowerCase();
console.log(mayus);
console.log(minus);