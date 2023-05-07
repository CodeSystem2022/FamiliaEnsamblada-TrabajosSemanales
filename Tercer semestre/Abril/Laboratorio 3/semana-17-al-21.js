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

//Ejercicios Victoria Zaccaro
//Funcion de tipo expresion
let sumar = function (a = 4, b = 8) {
  console.log(arguments[0]); //Muestra el parametro a
  console.log(arguments[1]); //Muestra el parametro b
  console.log(arguments[2]);
  return a + b + arguments[2];
};
resultado = sumar(3, 5, 9);
console.log(resultado);
//Sumar todos los argumentos
let respuesta = sumarTodo(5, 4, 13, 10, 9);
console.log(respuesta);
function sumarTodo() {
  let suma = 0;
  for (let i = 0; i < arguments.length; i++) {
    suma += arguments[i]; //arguments es para arreglos
  }
  return suma;
}
//Tipos primitivos
let k = 10;
function cambiarValor(a) {
  //Paso por valor
  a = 20;
}

cambiarValor(k);
console.log(k);

const persona = {
  nombre: "Juan",
  apellido: "Lepez",
};
console.log(persona);
function cambiarValorObjeto(p1) {
  p1.nombre = "Carlos";
  p1.apellido = "Perez";
}

cambiarValorObjeto(persona);
console.log(persona);

//Fin ejercicios Victoria Zaccaro

//Jose Remaggi
let  result = sumarTodo(5, 4, 13, 10, 9);
console.log("La suma es: ",result);

function sumAll(){
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i]; // arguments es para arreglos
    }
    return sum;
}
//Fin Ejercicio Jose Remaggi

//EJERCICIO MATÍAS VILLA

//Hosting Se llama a la funcion antes de definirla o despues 
//miFuncion(8,2);

function miFuncion(a,b){
    //console.log("Sumamos: "+(a+b));
    return a+b; 

}

//llamamos a la función
miFuncion(5,4);

let resultado = miFuncion(6, 7);
 
console.log(resultado);

//Declaramos una función de tipo expresión o anonima
let x = function(a,b){return a+b}; //necesita cierra con punto y coma
resultado = x(5,6);//al llamarla se pone la variable y parentesis
console.log(resultado);

//funciones tipo self y invoking que se llaman a si mismas
(function(a,b){
    console.log("Ejecutando la funcion:"+ (a+b));


})(9,6); //no se puede reutilizar

//una fucnion es un tipo de dato

console.log(typeof miFuncion);

//tmb se pueden escribir como objetos 
function miFuncionDos(a,b){
    console.log(arguments.length); //nos dice cuentso argumentos tiene la funcion

}

miFuncionDos(5,7,3,5); 

//too string
var miFuncionTexto=miFuncionDos.toString();
console.log(miFuncionTexto);

//Funciones Flecha

const sumarFuncionFlecha= (a,b)=> a+b; //como es constante no se puede cambiar el valor asignado
resultado=sumarFuncionFlecha(3,7)
console.log(resultado);
//en funcion tipo flecha 
//no usar la palabra reservada function, no se usan las llaves, ni la palabra reservada return

//dentro de los parentesis van los parametros de la función 
//cuando llamamos, usamos los argumentos (valores)

//funcion tipo expresión
let sumar = function(a=4,b=8){
    console.log(arguments[0]); //muentras el primer parametro(A)
    console.log(arguments[1]); //muestra el segundo parametro (B)
   return a+b+ console.log(arguments[2])
}
resultado=sumar(3,5);
console.log(resultado);

//sumar todos los argumentso
//concepto hosting, llamar a la funcion antes de definirla
let respuesta = sumarTodo(5,4,5,5,6,5);
console.log(respuesta);
function sumarTodo(){
    let suma=0 ;
    for(let i = 0; i< arguments.length; i++){
        suma+=arguments[i]; //argumets  es para arreglos
    }
    return suma;
}

//paso por valor y referencia

//crear metodo de tipo primitivo

let k = 10;
function cambiarValor(a){ //paso por valor solo pasa una copia y no se modifica 
    a=20;

}

cambiarValor(k);
console.log(k);



const persona={
    nombre: 'Juan',
    apellido: 'Lepe'
}
//paso por referencia
console.log(persona);
function cambiarValorObjeto(p1){
    p1.nombre= 'Ignacio';
    p1.apellido='Perez';

}

cambiarValorObjeto(persona)
//al finalizar al función la variable p1 se destruye pero las modificaciones afectan al objeto persona

console.log(persona);

//FIN MATÍAS VILLA

