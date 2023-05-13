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
