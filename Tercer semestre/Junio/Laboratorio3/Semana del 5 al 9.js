// Ejercicios correspondientes a Laboratorio III JS, de la semana del 05 al 09 de Júnio de 2023
// Clase 9: Herencia

// Ejercicio Jesús Mercado:
// Corresponde al archivo PruebaPersonas.js, donde cargamos las 3 clases creadas previamente y
// realizamos las pruebas sugeridas por la catedra
class Persona{

    static contadorPersonas = 0;

    constructor(nombre, apellido, edad){
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get idPersona(){
        return this._idPersona;
    }

    get nombre(){
        this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    get edad(){
        this._edad;
    }

    set edad(edad){
        this._edad = edad;
    }

    toString(){
        return `${this._idPersona} ${this._nombre} ${this._apellido} ${this._edad}`;
    }
}

class Empleado extends Persona{

    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`;
    }
}

class Cliente extends Persona{

    static contadorClientes = 0;

    constructor(nombre, apellido, edad, fecharegistro){
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fecharegistro;
    }

    get idCliente(){
        return this._idCliente;
    }

    get fecharegistro(){
        return this._fechaRegistro;
    }

    set fecharegistro(fecharegistro){
        this._fechaRegistro = fecharegistro;
    }

    toString(){
        return `${super.toString()} ${this._idCliente} ${this._fechaRegistro}`;
    }
}

// Prueba clase Persona:
let persona1 = new Persona('Juan', 'Perez', 32);
console.log(persona1.toString());

let persona2 = new Persona('Carla', 'Ortega', 22);
console.log(persona2.toString());

// Prueba clase Empleado:
let empleado1 = new Empleado('Pedro', 'Román', 18, 5000);
console.log(empleado1.toString());

let empleado2 = new Empleado('Jonas', 'Torres', 30, 7000);
console.log(empleado2.toString());

// Prueba clase Cliente:
let cliente1 = new Cliente('Miguel', 'Zala', 29, new Date());
console.log(cliente1.toString());

let cliente2 = new Cliente('Natalia', 'Ortega', 22, new Date());
console.log(cliente2.toString());
// Fin Ejercicio Jesús Mercado

// Ejercicio Anabel Alesci:

class Persona{

    static contadorPersonas = 0;

    constructor(nombre, apellido, edad){
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get idPersona(){
        return this._idPersona;
    }

    get nombre(){
        this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    get edad(){
        this._edad;
    }

    set edad(edad){
        this._edad = edad;
    }

    toString(){
        return `${this._idPersona} ${this._nombre} ${this._apellido} ${this._edad}`;
    }
}

class Empleado extends Persona{

    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`;
    }
}

class Cliente extends Persona{

    static contadorClientes = 0;

    constructor(nombre, apellido, edad, fecharegistro){
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fecharegistro;
    }

    get idCliente(){
        return this._idCliente;
    }

    get fecharegistro(){
        return this._fechaRegistro;
    }

    set fecharegistro(fecharegistro){
        this._fechaRegistro = fecharegistro;
    }

    toString(){
        return `${super.toString()} ${this._idCliente} ${this._fechaRegistro}`;
    }
}

// Prueba clase Persona:
let pers1 = new Persona('Anabel', 'Alesci', 34);
console.log(persona1.toString());

let pers2 = new Persona('Elvira', 'Flores', 70);
console.log(persona2.toString());

// Prueba clase Empleado:
let emp1 = new Empleado('Jose', 'Remaggi', 36, 3000);
console.log(empleado1.toString());

let emp2 = new Empleado('Laura', 'Garcia', 30, 4500);
console.log(empleado2.toString());

// Prueba clase Cliente:
let cli1 = new Cliente('Marcos', 'Rojo', 33, new Date());
console.log(cliente1.toString());

let cli2 = new Cliente('Valentin', 'Barco', 18, new Date());
console.log(cliente2.toString());
// Fin Ejercicio Anabel Alesci

// Ejercicio Jose Remaggi:

class Persona{

    static contadorPersonas = 0;

    constructor(nombre, apellido, edad){
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get idPersona(){
        return this._idPersona;
    }

    get nombre(){
        this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    get edad(){
        this._edad;
    }

    set edad(edad){
        this._edad = edad;
    }

    toString(){
        return `${this._idPersona} ${this._nombre} ${this._apellido} ${this._edad}`;
    }
}

class Empleado extends Persona{

    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`;
    }
}

class Cliente extends Persona{

    static contadorClientes = 0;

    constructor(nombre, apellido, edad, fecharegistro){
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fecharegistro;
    }

    get idCliente(){
        return this._idCliente;
    }

    get fecharegistro(){
        return this._fechaRegistro;
    }

    set fecharegistro(fecharegistro){
        this._fechaRegistro = fecharegistro;
    }

    toString(){
        return `${super.toString()} ${this._idCliente} ${this._fechaRegistro}`;
    }
}

// Prueba clase Persona:
let p1 = new Persona('Harry', 'Potter', 17);
console.log(persona1.toString());

let p2 = new Persona('Tom', 'Riddle', 50);
console.log(persona2.toString());

// Prueba clase Empleado:
let e1 = new Empleado('Albus', 'Dumbledore', 55, 10000);
console.log(empleado1.toString());

let e2 = new Empleado('Severus', 'Snape', 30, 6000);
console.log(empleado2.toString());

// Prueba clase Cliente:
let c1 = new Cliente('Ron', 'Weasley', 17, new Date());
console.log(cliente1.toString());

let c2 = new Cliente('Hermione', 'Granger', 17, new Date());
console.log(cliente2.toString());
// Fin Ejercicio Jose Remaggi

//Ejercicio Yesica López
class Cliente extends Persona{
    static contadorClientes = 0;

    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fecharegistro;
    }

    get idCliente(){
         return this._idCliente;
    }

    set fecharegistro(fecharegistro){
        this._fechaRegistro = fecharegistro;
    }

    toString(){
        return `
        ${super.toString()}
        ${this._idCliente}
        ${this._fechaRegistro}`;
    }
}
//Fin Ejercicio Yesica López


//Ejercicio Gerardo Duckwitz
class Empleado extends Persona {
  static contadorEmpleados = 0;
  constructor(nombre, apellido, edad, sueldo) {
    super(nombre, apellido, edad);
    this._idEmpleado = ++Empleado.contadorEmpleados;
    this._sueldo = sueldo;
  }
  get idEmpleado() {
    return this._idEmpleado;
  }
  get sueldo() {
    return this._sueldo;
  }
  set sueldo(sueldo) {
    this._sueldo = sueldo;
  }
  toString() {
    return `
        ${super.toString()}
        ${this._idEmpleado}
        ${this._sueldo}`;
  }
}
class Cliente extends Persona {
  static contadorClientes = 0;
  constructor(nombre, apellido, edad, fechaRegistro) {
    super(nombre, apellido, edad);
    this._idCliente = ++Cliente.contadorClientes;
    this._fechaRegistro = fechaRegistro;
  }
  get idCliente() {
    return this._idCliente;
  }
  get fechaRegistro() {
    return this._fechaRegistro;
  }
  set fechaRegistro(fechaRegistro) {
    this._fechaRegistro = fechaRegistro;
  }
  toString() {
    return `
        ${super.toString()}
        ${this._idCliente}
        ${this._fechaRegistro}`;
  }
}
//Fin ejercicio Gerardo Duckwitz


//Ejercicio victoria zaccaro
class Persona{
    static contadorPersonas = 0;
    constructor(nombre, apellido, edad){
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get idPersona(){
        return this._idPersona;
    }

    get nombre(){
        this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    get edad(){
        this._edad;
    }

    set edad(edad){
        this._edad = edad;
    }

    toString(){
        return `${this._idPersona} ${this._nombre} ${this._apellido} ${this._edad}`;
    }
}
class Empleado extends Persona{
    static contadorEmpleados = 0;
    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`;
    }
}

class Cliente extends Persona{
    static contadorClientes = 0;
    constructor(nombre, apellido, edad, fecharegistro){
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fecharegistro;
    }

    get idCliente(){
        return this._idCliente;
    }

    get fecharegistro(){
        return this._fechaRegistro;
    }

    set fecharegistro(fecharegistro){
        this._fechaRegistro = fecharegistro;
    }

    toString(){
        return `${super.toString()} ${this._idCliente} ${this._fechaRegistro}`;
    }
}
//Prueba clase Persona
let p1 = new Persona('Marisa', 'Zarate', 21);
console.log(persona1.toString());
let p2 = new Persona('Alina', 'Zarate', 35);
console.log(persona2.toString());
//Prueba clase Empleado
let e1 = new Empleado('Lina', 'Tabares', 26, 5000);
console.log(empleado1.toString());
let e2 = new Empleado('Alejandra', 'Quara', 33, 300);
console.log(empleado2.toString());
//Prueba clase Cliente
let c1 = new Cliente('Ramona', 'Hernadez', 20, new Date());
console.log(cliente1.toString());
let c2 = new Cliente('Jose', 'Gonzalez', 19, new Date());
console.log(cliente2.toString());
// fin ejercico victoria
