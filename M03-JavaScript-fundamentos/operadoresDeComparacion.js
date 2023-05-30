//Operadores de Comparación: Devuelven un valor booleano para indicar si la operación es verdadera o falsa;
// > < >= <= == != 

console.log(4 < 7);
console.log(4 > 7);
console.log(4 > 4);
console.log(4 == 7);


// declaramos una var con asignación (=) anteriormente
var cajón = 'Bufanda verde';


// = <- asignación | == <- igualdad | === <- igualdad estricta

console.log(3 === '3');
console.log(3 == '3');


//Asociatividad
//var a = 1;
//var b = 2;
//var c = a = b;

//mismo valor de precedencia

var a = 1;
var b = 2;
var c = (a = b);

console.log(a);
console.log(b);
console.log(c);

