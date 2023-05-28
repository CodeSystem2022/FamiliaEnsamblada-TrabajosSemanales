//Ejercicio Yesica López
class Persona{
    constructor(nombre, apellido){
      this._nombre = nombre;
      this._apellido = apellido;
    }

    get nombre(){
return this._nombre;
}

set nombre(nombre){
  this._nombre = nombre;
}

get apellido(){
  return this._apellido;
}

set apellido(apellido){
  this._apellido = apellido;
}

nombreCompleto(){
  return this._nombre+' '+this._apellido;
}
}

class Empleado extends Persona{//Clase hija
constructor(nombre, apellido, departamento){
  super(nombre, apellido);
  this._departamento = departamento;
}

get departamento(){
  return this._departamento;
  }

  set departamento(departamento){
    this._departamento = departamento;
  }

  //sobreescritura
  nombreCompleto(){
      return super.nombreCompleto()+', '+this._departamento;
  }
}

let persona1 = new Persona('Yesica','López');
console.log(persona1.nombre);
persona1.nombre ='Agustín Fernandez';
console.log(persona1.nombre);

let persona2 = new Persona('Lisandro','Ayala');
console.log(persona2.nombre);
persona2.nombre ='Beatriz Sandra';
console.log(persona2.nombre);

let empleado1 = new Empleado('Maia','Gimenez','Sistemas');
console.log(empleado1);
console.log(empleado1.nombreCompleto());

//Fin Ejercicio Yesica López
//Ejercicio Anabel Alesci
// let persona5 = new Persona("Laura", "Carrizo");

class Persona {
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  get apellido() {
    return this._apellido;
  }
  set apellido(apellido) {
    this._apellido = apellido;
  }
  nombreCompleto(){
    return this._nombre+ ' '+ this._apellido;
  }
}
class Empleado extends Persona {
  //Clase hija
  constructor(nombre, apellido, departamento) {
    super(nombre, apellido);
    this._departamento = departamento;
  }
  get departamento() {
    return this._departamento;
  }
  set departamento(departamento) {
    this._departamento = departamento;
  }
  //Sobreescritura
  nombreCompleto(){
    return super.nombreCompleto()+ ', '+ this._departamento;
  }
}

let persona1 = new Persona("Laura", "Carrizo");
console.log(persona1.nombre);
persona1.nombre = "Nazarena Ruel";
console.log(persona1.nombre);
// console.log(persona1);

let persona2 = new Persona("Luisina", "Scipioni");
console.log(persona2.nombre);
persona2.nombre = "Noe Rio";
console.log(persona2.nombre);
// console.log(persona2);

let empleado1 = new Empleado("Ana", "Laura", "Nutricion");
console.log(empleado1);
console.log(empleado1.nombreCompleto());

//Fin Ejercicio Anabel Alesci

//Ejercicio Jose Remaggi
class Persona {
  constructor(nombre, apellido){
    this._nombre = nombre;
    this._apellido = apellido;
  }

  get nombre(){
return this._nombre;
}

set nombre(nombre){
this._nombre = nombre;
}

get apellido(){
return this._apellido;
}

set apellido(apellido){
this._apellido = apellido;
}

nombreCompleto(){
return this._nombre+' '+this._apellido;
}

toString(){
  return this.nombreCompleto();
}
}

class Empleado extends Persona1{
constructor(nombre, apellido, departamento){
super(nombre, apellido);
this._departamento = departamento;
}

get departamento(){
return this._departamento;
}

set departamento(departamento){
  this._departamento = departamento;
}

//sobreescritura
nombreCompleto(){
    return super.nombreCompleto()+', '+this._departamento;
}


}
let persona3 = new Persona("Anabel", "Alesci")
let empleado2 = new Empleado("Jose", "Remaggi", "IT");
console.log(empleado2.toString());
console.log(persona3.toString())

//Object.prototype.toString
//Fin Ejercicio Jose Remaggi

