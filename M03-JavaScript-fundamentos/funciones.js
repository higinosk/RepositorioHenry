//concepto de funciones
//f(x) = x + 3
//x = 5 -> 8

// /function sumaTres(x) {
//     console.log(x + 3);    
// };

// sumaTres(5);
// -> 8

// Sintaxis de una function
// function -> palabra reservada
// sumaTres -> Nombre de Función
// (x) -> Argumento o parámetro
// {console.log(x + 3)} -> cuerpo de la función

//PRIMERO

function sumaTres(x) {
    return x + 3;
}

//SEGUNDO

var sumaTres = function (x) {
    return x + 3;
}

//TERCERO

var sumaTres = (x) => {
    return x + 3;
}

//Error común: RETURN vs. CONSOLE.LOG();
//CONSOLE.LOG(): ayuda visual para saber cual el valor de una variable. Ninguna aplicación o programa real debería tener un console.log() dentro de su codigo;

var animal = 'caballo';

console.log(animal);

//RETURN: Fundamental para toda función ya que es la instrucción que va a indicar qué valor nos debe devolver;

function cuidadoConElConsoleLog(nombre) {
    console.log(nombre);
    return nombre;
}

function otraFuncion() {
    return (
        "El nombre retornado por la funcion 'cuidadoConElConsoleLog'  es: " + cuidadoConElConsoleLog('Camilo')
        );
    
}

function cuidadoConElReturn(nombre) {
    return nombre;
    console.log(nombre);
}

//Si no definimos un valor, javascript por defecto va a retornar Undefined.