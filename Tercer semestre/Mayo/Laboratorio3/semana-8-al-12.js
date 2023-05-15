
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
