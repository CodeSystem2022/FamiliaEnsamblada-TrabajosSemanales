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


//Ejercicio Gerardo Duckwitz
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
  nombreCompleto() {
    return this._nombre + " " + this._apellido;
  }
  toString() {
    //Regresa un string
    return this.nombreCompleto();
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
  nombreCompleto() {
    return super.nombreCompleto() + ", " + this._departamento;
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
console.log(empleado1.nombreCompleto());

// Object.prototype.toString
console.log(empleado1.toString());
console.log(persona1.toString());
//Fin ejercicio Gerardo Duckwitz

//###Ejercicios Matías Villa###
{
    class Persona { //clase padre
    constructor(nombre, apellido){
        this._nombre= nombre; //inicializar atributos
        this._apellido=apellido;
    }

    //Métodos set y get
    //get no se puede llamar igual que nuestra propiedad 
    
    get nombre(){
        return this._nombre; //acceder a la clase indirectamente por medio del metodo get
       
    }

    get apellido(){
        return this._apellido 
    }
    //set modifica o lee atributo
        set nombre(nombre){
            this._nombre=nombre;


        }
        set apellido(apellido){
            this._apellido=apellido;
        
            
        }
        //Definir metodo en la clase padre para heredar en la clase hija
        nombreCompleto(){
            return this._nombre+' '+this.apellido;

        }

        //Método toString. Regresa un String
        //Sobreescribiendo el método de la clase padre object
        toString(){ 
            //se aplica el polimorfismo que significa = multiples formas en tiempo de ejecución
            //El método que se ejecuta depende si es una referencia de tipo padre o hija
            return this.nombreCompleto();
        }

    }   

let persona1= new Persona('Martín','Perez');
console.log(persona1.nombre);
persona1.nombre = 'Juan Carlos'; //modificamos el atributo
persona1.apellido='Lopez'
console.log(persona1.nombre); 
console.log(persona1.apellido)
//console.log(persona1);
let persona2=new Persona('Carlos','Lara');
console.log(persona2.nombre);
persona2.nombre='Maria Laura';
persona2.apellido='Di Maria'
console.log(persona2.nombre)
console.log(persona2.apellido)
//console.log(persona2);





class Empleado extends Persona{ //clase hija
     constructor(nombre,apellido,departamento){ //agregar los parametros de la clase padre 

        super(nombre,apellido)//llamos al constructor de la calse padre por medio de super. entre parentesis se pasan los valores
        this._departamento=departamento;



     }

     get departamento(){
        return this._departamento


     }

     set departamento(departamento){
        this._departamento = departamento
     }

     //sobreescritura
     nombreCompleto(){
        return super.nombreCompleto()+', '+this._departamento;
    
    } 

}

//objeto de la calse hija

let empleado1 = new Empleado('Maria','Jimenez','Sistemas');
//console.log(empelado1);
console.log(empleado1.nombre);
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString())
console.log(persona1.toString());

    //####Fin EJercicios Matías Villa#####
