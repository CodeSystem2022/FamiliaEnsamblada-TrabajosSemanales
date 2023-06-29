
//Ejercicio Gerardo Duckwitz
console.log(persona.nombreEdad);
console.log("Comenzamos con el metodo get y set para idiomas");
persona.lang = "en";
console.log(persona.lang);

function Persona3(nombre, apellido, email) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;
  this.nombreCompleto = function () {
    return this.nombre + " " + this.apellido;
  };
}
let padre = new Persona3("Leo", "Lopez", "lopezl@gmail.com");
padre.nombre = "Luis";
padre.telefono = "5466132564";

console.log(padre);
console.log(padre.nombreCompleto());
let madre = new Persona3("Laura", "Contrera", "contraral@gmail.com");
console.log(madre);
console.log(madre.nombreCompleto());
console.log(madre.telefono);

//Fin ejercicio Gerardo Duckwitz

//Victoria Zaccaro
//Diferentes formas de crear objetos
//caso numero 1
let miObjeto = new Object();
//caso numero 2
let miObjeto2 = {};
//caso string 1
let miCadena1 = new String("Hola");
//caso string 2
let miCadena2 = "Hola";

// caso con numeros 1
let miNumero1 = new Number(1); //Es formal no recomendable
//caso con numeros 2
let miNumero2 = 1; //Sintaxis recomendada

//caso boolean 1
let miBoolean1 = new Boolean(false); //formal
//caso boolean 2
let miBoolean2 = false; //recomendada

//caso Arreglos 1
let miArreglo1 = new Array(); //Formal
//caso Arreglos 2
let miArreglo2 = []; //recomendada

//caso funciones 1
let miFuncion1 = new (function () {})(); //Formal
//caso funciones 2
let miFuncion2 = function () {}; //recomendada

Persona3.prototype.telefono = "123456789123";
console.log(padre.telefono);
console.log(madre.telefono);
//Uso de call
let persona4 = {
  nombre: "Juan",
  apellido: "Perez",
  nombreCompleto2: function (titulo, telefono) {
    return titulo + ": " + this.nombre + " " + this.apellido + ", " + telefono;
    // return this.nombre + " " + this.apellido;
  },
};
let persona5 = {
  nombre: "Carlos",
  apellido: "Lara",
};
console.log(persona4.nombreCompleto2("Lic.", "123456789"));
console.log(persona4.nombreCompleto2.call(persona5, "Ing.", "987654321"));

//Metodo Apply
let arreglo = ["Ing.", "542618282821"];
console.log(persona4.nombreCompleto2.apply(persona5, arreglo));

//Fin Victoria Zaccaro

//Ejercicio Jose Remaggi

let personaA = {
  nombre: 'Jose',
  apellido: 'Remaggi',
  email:'jremaggi@gmail.com',
  edad:36,
  nombreCompleto: function(){
    return this.nombre+''+this.apellido;
  },
  get nombreEdad(){
    return this.nombre+', Edad: '+this.edad;
  }
 
}
console.log('Comenzamos a utilizar el metodo get')
console.log(personaA.nombreEdad);
//Fin ejercicio Jose Remaggi

//Ejercicio Anabel Alesci
//Objeto
let persona = {
    nombre: 'Mariela',
    apellido: 'Gomez',
    email: 'maru@gmail.com',
    edad: 35,
    idioma: 'es',
    
    get lang(){
        return this.idioma.toUpperCase();//Convierte las minusculas a mayusculas
    },
    set lang(Lang){ //Convierte el idioma
        this.idioma = Lang.toUpperCase();
    },

    nombreCompleto: function(){
        return this.nombre+ 'this'+ this.apellido;
    },
    get nombreEdad(){//este es el metodo get
        return 'El nombre es: ' +this.nombre+', Edad: '+ this.edad;
    }
   
}
console.log('Comenzamos a utilizar el método get');
console.log(persona.nombreEdad);

console.log('Comenzamos con el metodo get y set para idiomas');
persona.lang = 'en';
console.log(persona.lang);

//Fin Ejercicio Anabel Alesci

//Ejercicio Yesica López
//Utilizaremos el método JSON.stringify
console.log('Distinta formas de imprimir un objeto: forma 4');
let personaString=JSON.stringify(persona);
console.log(personaString);

console.log('Comenzamos a utilizar el método get');
console.log(persona.nombreEdad);

console.log('Comenzamos con el método GET y SET para idiomas');
persona.lang='en';
console.log(persona.lang);

function Persona3(nombre, apellido,email){//constructor
    this.nombre=nombre;
    this.apellido=apellido;
    this.email=email;
}

let padre= new Persona3('Leo','Gomez','gomez@gmail.com');
padre.nombre='Luis';
console.log(padre);

let madre= new Persona3('Yesica','López','lopez@gmail.com');
console.log(madre);

//Fin Ejercicio Yesica López

// Ejercicio Jesús Mercado:
// 5.3 - Constructores de Objetos:
function Persona3(nombre, apellido, email){ // Constructor
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}
let padre = new Persona3('Leo', 'Lopez', 'lopezl@gmail.com');
padre.nombre = 'Luis'; // modificamos el nombre
padre.telefono = '5491234512345'; // Una propiedad exclusiva del objeto padre
console.log(padre);
console.log(padre.nombreCompleto()); // <utilizamos la función

let madre = new Persona3('Laura', 'Contrera', 'contreral@gmail.com');
console.log(madre);
console.log(madre.telefono); // La propiedad no está definida
console.log(madre.nombreCompleto());

// Fin Ejercicio Jesús Mercado

//EJERCICIOS MATÍAS VILLA

//en js casi todo son objetos
//hay de tipo primitivo, numero y objeto
//primitivo != propiedades y metodos
let x = 10; //variable de tipo primitivo
console.log(x.length);
console.log('Tipo primitivos:');

//objeto 
let persona= {
    nombre: 'Carlos',
    apellido:'Gil',
    email:'cgil@gmail.com',
    edad:28,
    idioma:'ES',

    
    get lang(){return this.idioma.toUpperCase();},
    set lang(lang){
        this.idioma = lang.toUpperCase();  //conviernte mayusculas a minusculas

    },
    nombreCompleto: function(){ //esto es un metodo o una función en JS
        return this.nombre+''+this.apellido;
        },

    get nombreEdad(){ //metodo get
        return this.nombre+', Edad: '+this.edad;    

    }

}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona);
console.log(persona.nombreCompleto());
console.log('Ejecutamos con un objeto');

let persona2=new Object();
persona2.nombre= 'Juan';
persona2.direccion = 'Salada 14'
persona2.telefono='115356581'
console.log(persona2.telefono)

console.log(persona['apellido']);//accedemos como arreglo

//for in
for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad])

}

persona.apellido='Bentancud'; //cambio dinamico del valor del objeto
console.log(persona);

//Distintas formas de imprimir un objeto
//Concatenando valores:

console.log(persona.nombre+','+persona.apellido);

//
//Por un ciclo For
for(nombrePropiedad in persona ){
    console.log(persona[nombrePropiedad]);


}

//Número 3: La función object.values()
//Con un método o funcion values
let personaArray=Object.values(persona);
console.log(personaArray);

//Número 4 utlizaremos el metodo JSON.stringfy
console.log('Distintas formas de imprimir un objeto: forma 4 JSON');
let personaString= JSON.stringify(persona);
console.log(personaString);


//console log para el get
console.log('Usamos el metodo Get:')
console.log(persona.nombreEdad)


//Set significa establecer o modificar
console.log('Comenzamos con el método get y set para idiomas');
persona.lang = 'EN';
console.log(persona.lang);

//crear una función
//esta función es un constructor:
function Persona3(nombre, apellido, email){  //el parametro puede ser preasignado 
    this.nombre= nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto=function(){ //crear un método dentro de la función o metodo constructor que retorna nombre y concatena con un espacio seguido de apellido
            return this.nombre+' '+this.apellido;
    }
}

let padre = new Persona3('Leo','Lopez','lopezleo123@gmail.com'); //metodo para la creacion de objetos
padre.nombre='Luis' //modifica el nombre 
padre.telefono = '3323452331';
console.log(padre);

console.log(padre.nombreCompleto()) //Utiliza la funcion 

let madre = new Persona3('Laura','Contreras','contreras@gmail.com');
console.log(madre);
console.log(madre.telefono) //Propiedad no definida.
console.log(madre.nombreCompleto()) 

//Diferentes formas de crear objetos
//Caso objeto 1
let miobjeto = new Object()
//caso objeto 2
let mibojeto2={}; //manera recomendada

//caso string 1
let miCadena1= new String('Hola soy una cadena');//sintaxis formal
//caso String 2
let miCadena2= 'Hola soy el caso 2 de los casos cadena'; //Manera recomendada


//caso con numeros 1    
let miNumero = new Number(1);

//caso con numeros 2

let miNumero2= 1; //sintaxis recomendada

//Caso booleano 1
let miBolean = new Boolean(false) //formal
//caso booleano 2
let miBolean2= false; //sintaxis recomendada

//Caso Arreglo 1
miArreglo = new Array(); //caso formal
//Caso Arreglo 2
miArreglo2=[]; //Sintaxis recomendada

//Caso funciones 1
let miFuncion1= new function(){} //Todo despues de new es considerado objeto
//caso Funciones 2
let miFuncion2=function(){}; //Notación simple y recomendada.


//Uso de prototype
Persona3.prototype.telefono='26132456'; //agregamos un numero de telfono
console.log(padre);
console.log(madre.telefono); //le asigna el telefono a mdre
madre.telefono='1111111111'
console.log(madre.telefono); //modificámos el número  
//uso de call
//permite llamar un metodo que esta definido en un objeto desde otro objeto
let Persona4 = {
    nombre:'Juan',
    apellido:'Perez',
    nombreCompleto2:function(titulo,telefono){
       return  titulo+': '+this.nombre+' '+this.apellido+' '+telefono;
        //return this.nombre+' '+this.apellido;
    }

}


//otro objeto más
let Persona5={
    nombre:'Carlos',
    apellido:'Lara'

}

console.log(Persona4.nombreCompleto2('Lic.', '897987987'));
console.log(Persona4.nombreCompleto2.call(Persona5,'Ingeniero', '1123231231')); //función o método call  permite completar el objeto con todos los argumentos necesarios.4



//Método Apply
let arreglo=['Ing.','5464564654'];
console.log(Persona4.nombreCompleto2.apply(Persona5, arreglo)); //Metodo aplly permite llamar aun objeto que no tiene definido ciertos metodos






