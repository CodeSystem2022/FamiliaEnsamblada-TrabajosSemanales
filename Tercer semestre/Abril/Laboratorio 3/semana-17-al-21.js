//Ejercicio Anabel Alesci
miFuncion(8, 2); //Esto se lo conoce como hosting


function miFuncion(a,b){
    //console.log("Sumamos: "+ (a + b));
    return a + b;
}
//LLamando la función
miFuncion(5,4);

let resultado = miFuncion(6, 7);
console.log(resultado);

//Declaramos una función de tipo expresión o anonima
let x = function(a, b){return a + b};//necesita cierre con punto y coma
resultado = x(5, 6);//al llamarla se pone la variable y parentesis
console.log(resultado);

//Funciones de tipo self y invoking
(function(a,b){
    console.log('Ejecutando la función: ' + (a + b));
})(9, 6);

console.log(typeof miFuncion);
function miFuncionDos(a, b){
    console.log(arguments.length);
}
miFuncionDos(5, 7, 3,6);

//toString
var miFuncionTexto = miFuncionDos.toString();
console.log(miFuncionTexto);

//Funciones flecha
const sumarFuncionFlecha = (a, b) => a + b;
resultado = sumarFuncionFlecha(3, 7); //Asignamos el valor a una variable
console.log(resultado);

//Función tipo expresión
let sumar = function(a = 4, b = 8){
    console.log(arguments[0]); //muestra el parametro de a
    console.log(arguments[1]); //muestra el parametro de b
    
    return a + b + (arguments[2]);

}
resultado = sumar(3, 2, 9);
console.log(resultado);

//sumar todos los argumentos-hosting
let respuesta = sumarTodo(5, 4, 13, 10, 9 );
console.log(respuesta);
function sumarTodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i]; //arguments es para arreglos
    }
    return suma;
}
//Tipos primitivos
let k = 10;
function cambiarValor(a){//paso por valor
    a = 20;
}
cambiarValor(k);
console.log(k);

//Paso por referencia
const persona = {
    nombre: 'Juan',
    apellido: 'Lepez'
}
console.log(persona);

function cambiarValorObjeto(p1){
    p1.nombre = 'Ignacio';
    p1.apellido = 'Perez';
}
cambiarValorObjeto(persona);
console.log(persona);
// Fin Ejercicio Anabel Alesci

// Ejercicio Jesús Mercado

// Sumar todos los argumentos
let respuesta = sumarTodo(5, 4, 13, 10, 9);
console.log(respuesta);

function sumarTodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i]; // arguments es para arreglos
    }
    return suma;
}
// Fin Ejercicio Jesús Mercado

// Ejercicios Yesica López

miFuncion(5,6);
//palabra return
function miFuncion (a,b){
   // console.log("Sumamos: "+(a+b));
   return a+b;
}
//Llamamos la función
miFuncion(2,8);

let resultado=miFuncion(6,7);
console.log(resultado);

//Declaramos una función de tipo expresión o anonima
let  x =function(a,b){ return a +b};// necesita cierre con punto y coma
resultado=x(5,6);//al llamarla se pone la variable y parentesis
console.log(resultado);

//Funciones de tipo Self y Invoking
(function(a, b){
    console.log('Ejecutando la funcion: '+(a+b));
})(9,6);

//Tipos de Datos en una Función
console.log(typeof miFuncion);
function miFuncionDos(a, b){
    console.log(arguments);
    console.log(arguments.length);
}

miFuncionDos(5,7);

//toString
var miFuncionTexto=miFuncionDos.toString();
console.log(miFuncionTexto);

//Funciones Flecha
const sumarFuncionFlecha = (a, b)=> a+b;
resultado=sumarFuncionFlecha(3,7); //asignamos el valor a unna variable
console.log(resultado);

//Argumentos y parámetros
//función tipo de expresión
let sumar=function(a=4, b=8){
    console.log(arguments[0]); //muestra el parametro de a
    console.log(arguments[1]); //muestra el parametro de b

    return a+b+arguments[2];
}
resultado=sumar(3,2,9);
console.log(resultado);

//Concepto hoisting
//Sumar todos los argumentos
let respuesta=sumarTodo(5,4,13,10,9);
console.log(respuesta);
function sumarTodo(){
    let suma=0;
    for(let i=0;i<arguments.length;i++){
        suma += arguments[i];//arguments es para arreglos
    }
    return suma;
}

// Paso por valor
//Tipos primitivos 
let z=10;
function cambiarValor(a){ //paso por valor
    a=20;
}
cambiarValor(z);
console.log(z);

//Paso por referencia
const persona={
    nombre:'Juan',
    apellido:'lepez'
}
console.log(persona);
function cambioValorObjeto(p1){
    p1.nombre='Ignacio';
    p1.apellido='Perez';
}
cambioValorObjeto(persona);
console.log(persona);

//Fin Ejercicios Yesica López


//Ejercicios Gerardo Duckwitz
miFuncion(8, 3); // Esto se lo conoce como hoisting
function miFuncion(a, b) {
  // console.log("Sumamos: " + (a+b));
  return a + b;
}
//Llamamos a la funcion
miFuncion(2, 3);

let resultado = miFuncion(4, 7);
console.log(resultado);

//Declaramos una funcion de tipo expresion o anonima
let x = function (a, b) {
  return a + b;
};
resultado = x(3, 4);
console.log(resultado);

//Funciones tipo self e invoking
(function (a, b) {
  console.log("Ejecutando la funcion " + (a + b));
})(3, 4);

console.log(typeof miFuncion);

//Fin ejercicios Gerardo Duckwitz
