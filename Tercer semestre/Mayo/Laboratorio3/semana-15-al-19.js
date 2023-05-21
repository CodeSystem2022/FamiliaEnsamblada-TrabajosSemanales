//Ejercicios Gerardo Duckwitz
// let persona3 = new Persona("Pablo", "Ramirez");
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
}

let persona1 = new Persona("Pablo", "Ramirez");
console.log(persona1.nombre);
persona1.nombre = "Juan Pablo";
console.log(persona1.nombre);
// console.log(persona1);

let persona2 = new Persona("Leandro", "Gomez");
console.log(persona2.nombre);
persona2.nombre = "Ana Laura";
console.log(persona2.nombre);
// console.log(persona2);

let empleado1 = new Empleado("Maria", "Gimenez", "Sistemas");
console.log(empleado1);
console.log(empleado1.nombre);

//Fin Ejercicio Gerardo Duckwitz


// Inicio Trabajo Semanal Jesús Mercado
// let persona3 = new Persona('Carla', 'Ponce'); esto no se debe hacer, Persona is not defined

class Persona{ // Clase padre
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

    // Tarea:
    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }
}

class Empleado extends Persona{ // Clase hija
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
}

let persona1 = new Persona('Martín','Perez');
console.log(persona1.nombre);
persona1.nombre = 'Juan Carlos';
console.log(persona1.nombre);
// console.log(persona1);

let persona2 = new Persona('Carlos', 'Lara');
console.log(persona2.nombre);
persona2.nombre = 'María Laura';
console.log(persona2.nombre);
// console.log(persona2);

// Ejercicio Métodos get y set para el apellido:
console.log(persona1.apellido);
persona1.apellido = 'Gomez';
console.log(persona1.apellido);

// Ejercicio Métodos get y set para el apellido:
console.log(persona2.apellido);
persona2.apellido = 'Schwarzenegger';
console.log(persona2.apellido);

let empleado1 = new Empleado('María', 'Gimenez', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombre);
// Fin Trabajo Semanal Jesús Mercado


//Victoria Zaccaro
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
}

let persona1 = new Persona("Martin", "Perez");
console.log(persona1.nombre);
persona1.nombre = "Juan Carlos";
console.log(persona1.nombre);
// console.log(persona1);

let persona2 = new Persona("Carlos", "Lara");
console.log(persona2.nombre);
persona2.nombre = "Maria Laura";
console.log(persona2.nombre);
// console.log(persona2);
//Fin Victoria Zaccaro

//Ejercicio Jose Remaggi

class Persona{ // Clase padre
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
}

class Empleado extends Persona{ // Clase hija
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
}

let persona1 = new Persona('Jose','Remaggi');
console.log(persona1.nombre);
persona1.nombre = 'Jose Luis';
console.log(persona1.nombre);
// console.log(persona1);

let persona2 = new Persona('Anabel', 'Alesci');
console.log(persona2.nombre);
persona2.nombre = 'Anabel Gisella';
console.log(persona2.nombre);
// console.log(persona2);

// Ejercicio Métodos get y set para el apellido:
console.log(persona1.apellido);
persona1.apellido = 'Pietrasanta';
console.log(persona1.apellido);

// Ejercicio Métodos get y set para el apellido:
console.log(persona2.apellido);
persona2.apellido = 'Flores';
console.log(persona2.apellido);

let empleado1 = new Empleado('Horacio', 'Remaggi', 'Contabilidad');
console.log(empleado1);
console.log(empleado1.nombre);
//Fin Ejercicio Jose Remagi
