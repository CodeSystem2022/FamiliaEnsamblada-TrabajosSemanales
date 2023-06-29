// Ejercicio Jesús Mercado, correspondiente a la clase 8 de JS: Static del día 29/05/2023
// let persona3 = new Persona('Carla', 'Ponce'); esto no se debe hacer, Persona is not defined

class Persona{ // Clase padre

    static contadorPersonas = 0; // Atributo estático
    // email = 'Valor default email'; // Atributo no estático

    static get MAX_OBJ(){ // Este Método simula una constante
        return 5;
    }

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if(Persona.contadorPersonas < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersonas;
        }
        else{
            console.log('Se ha superado el máximo de objetos permitidos');
        }
        
        // console.log('Se incrementa el contador: ' + Persona.contadorObjetosPersona);
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

    nombreCompleto(){ // Método que devuelve el nombre completo
        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido;
    }

    // Sobreescribiendo el método de la clase padre (Object)
    toString(){ // Regresa un String
        // Se aplica el polimorfismo que significa = múltiples formas en tiempo de ejecución
        // El método que se ejecuta depende si es una referencia de tipo padre o hija 
        return this.nombreCompleto();
    }

    static saludar(){
        console.log('Saludos desde este método static');
    }

    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido);
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

    // Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
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
console.log(empleado1.nombreCompleto());

// Object.prototype.toString Esta es la manera de acceder a atributos y métodos de manera dinámica
console.log(empleado1.toString());
console.log(persona1.toString());

// persona1.saludar(); No se utiliza desde el objeto
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

// console.log(persona1.contadorObjetosPersona);
console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);

console.log(persona1.email);
console.log(empleado1.email);
// console.log(Persona.email); No puede acceder desde la clase

console.log(persona1.toString());
console.log(persona2.toString());
console.log(empleado1.toString());
console.log(Persona.contadorPersonas);

let persona3 = new Persona('Carla', 'Pertosi');
console.log(persona3.toString());
console.log(Persona.contadorPersonas);

console.log(Persona.MAX_OBJ);
// Persona.MAX_OBJ = 10; // No se puede modificar ni alterar
console.log(Persona.MAX_OBJ);

let persona4 = new Persona('Franco', 'Diaz');
console.log(persona4.toString());

let persona5 = new Persona('Liliana', 'Paz');
console.log(persona5.toString());

// Fin Ejercicio Jesús Mercado

//Ejercicio Yesica López
// let persona3 = new Persona('Yesica', 'López'); esto no se debe hacer, Persona is not defined
class Persona{

    static contadorObjetosPersona = 0;//Atributo estático
    email='Valor default email';//Atributo no estático

    constructor(nombre, apellido){
      this._nombre = nombre;
      this._apellido = apellido;
      Persona.contadorObjetosPersona++;
      console.log('Se incrementa el contador: '+Persona.contadorObjetosPersona);
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
  //Sobreescribiendo el método de la clase padre (Object)
  toString(){//Regresa un String
      //Se aplica el polimorfismmo que significa=multiples formas en tiempo de ejecución
     //El método que se ejecuta depende si es una referencia de tipo padre o hija
    return this.nombreCompleto();
  }
  
  static saludar(){
    console.log('Saludos desde este método static');
  }

  static saludar2(persona){
    console.log(persona.nombre+' '+persona.apellido);
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
//console.log(persona1);

let persona2 = new Persona('Lisandro','Ayala');
console.log(persona2.nombre);
persona2.nombre ='Beatriz Sandra';
console.log(persona2.nombre);
//console.log(persona2);

let empleado1 = new Empleado('Maia','Gimenez','Sistemas');
console.log(empleado1);
console.log(empleado1.nombreCompleto());

// Object.prototype.toString  Esta es la manera de acceder a atributos y métodos de manera dinámica
console.log(empleado1.toString());
console.log(persona1.toString());

//persona1.saludar(); no se puede utilizar desde el objeto
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

//console.log(persona1.contadorObjetosPersona)
console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);

console.log(persona1.email);
console.log(empleado1.email);
//console.log(Persona.email); No se puede acceder desde la clase 
//Fin Ejercicio Yesica López


//Ejercicio Gerardo Duckwitz
// let persona3 = new Persona("Pablo", "Ramirez");
class Persona {
  static contadorPersonas = 0; //Atributo estatico
  // email = "Valor default email"; //Atributo no estatico
  static get MAX_OBJ() {
    //Este metodo simula una constante
    return 5;
  }
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
    if (Persona.contadorPersonas < Persona.MAX_OBJ) {
      this.idPersona = ++Persona.contadorPersonas;
    } else {
      console.log(" Se ha superado el máximo de objetos permitidos");
    }
    // console.log("Se incrementa contador: " + Persona.contadorObjetosPersona);
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
    return this.idPersona + " " + this._nombre + " " + this._apellido;
  }
  toString() {
    //Regresa un string
    return this.nombreCompleto();
  }
  static saludar() {
    console.log("Saludos desde método static");
  }
  static saludar2(persona) {
    console.log(persona.nombre + " " + persona.apellido);
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
// persona1.saludar(); //No es posible llamar un método static desde un objeto
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);

console.log(persona1.email);
console.log(empleado1.email);
//console.log(Persona.email) //Error no se puede acceder desde la clase

console.log(persona1.toString());
console.log(empleado1.toString());
console.log(Persona.contadorPersonas);

let persona3 = new Persona("Carla", "Pertosi");
console.log(persona3.toString());

console.log(Persona.MAX_OBJ);
//Persona.MAX_OBJ = 10 //No se puede modificar
console.log(Persona.MAX_OBJ);

let persona4 = new Persona("Franco", "Diaz");
console.log(persona4.toString());
let persona5 = new Persona("Liliana", "Paz");
console.log(persona5.toString());

//Fin ejercicio Gerardo Duckwitz

//Ejercicio Jose Remaggi
// let persona3 = new Persona('Yesica', 'López'); esto no se debe hacer, Persona is not defined
class Persona{

  static contadorObjetosPersona = 0;//Atributo estático
  email='Valor default email';//Atributo no estático

  constructor(nombre, apellido){
    this._nombre = nombre;
    this._apellido = apellido;
    Persona.contadorObjetosPersona++;
    console.log('Se incrementa el contador: '+Persona.contadorObjetosPersona);
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
//Sobreescribiendo el método de la clase padre (Object)
toString(){//Regresa un String
    //Se aplica el polimorfismmo que significa=multiples formas en tiempo de ejecución
   //El método que se ejecuta depende si es una referencia de tipo padre o hija
  return this.nombreCompleto();
}

static saludar(){
  console.log('Saludos desde este método static');
}

static saludar2(persona){
  console.log(persona.nombre+' '+persona.apellido);
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
let persona1 = new Persona('Jose','Remaggi');
console.log(persona1.nombre);
persona1.nombre ='Horacio Jose';
console.log(persona1.nombre);
//console.log(persona1);

let persona2 = new Persona('Martha','Pietrasanta');
console.log(persona2.nombre);
persona2.nombre ='Martha Liliana';
console.log(persona2.nombre);
//console.log(persona2);

let empleado1 = new Empleado('Matias','Gonzalez','IT');
console.log(empleado1);
console.log(empleado1.nombreCompleto());

// Object.prototype.toString  Esta es la manera de acceder a atributos y métodos de manera dinámica
console.log(empleado1.toString());
console.log(persona1.toString());

//persona1.saludar(); no se puede utilizar desde el objeto
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

//console.log(persona1.contadorObjetosPersona)
console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);

console.log(persona1.email);
console.log(empleado1.email);
//console.log(Persona.email); No se puede acceder desde la clase 
//Fin Ejercicio Jose Remaggi

//Ejercicio Anabel Alesci
class Persona {
  static contadorPersonas = 0; //Atributo estatico
  // email = "Valor default email"; //Atributo no estatico
  static get MAX_OBJ() {
    //Este metodo simula una constante
    return 5;
  }
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
    if (Persona.contadorPersonas < Persona.MAX_OBJ) {
      this.idPersona = ++Persona.contadorPersonas;
    } else {
      console.log(" Se ha superado el máximo de objetos permitidos");
    }
    // console.log("Se incrementa contador: " + Persona.contadorObjetosPersona);
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
    return this.idPersona + " " + this._nombre + " " + this._apellido;
  }
  toString() {
    //Regresa un string
    return this.nombreCompleto();
  }
  static saludar() {
    console.log("Saludos desde método static");
  }
  static saludar2(persona) {
    console.log(persona.nombre + " " + persona.apellido);
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

let persona1 = new Persona("Anabel", "Alesci");
console.log(persona1.nombre);
persona1.nombre = "Anabel Gisella";
console.log(persona1.nombre);
// console.log(persona1);

let persona2 = new Persona("Elvira", "Flores");
console.log(persona2.nombre);
persona2.nombre = "Maria Laura";
console.log(persona2.nombre);
// console.log(persona2);

let empleado1 = new Empleado("Juan", "Lopez", "Sistemas");
console.log(empleado1);
console.log(empleado1.nombreCompleto());

// Object.prototype.toString
console.log(empleado1.toString());
console.log(persona1.toString());
// persona1.saludar(); //No es posible llamar un método static desde un objeto
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);

console.log(persona1.email);
console.log(empleado1.email);
//console.log(Persona.email) //Error no se puede acceder desde la clase

console.log(persona1.toString());
console.log(empleado1.toString());
console.log(Persona.contadorPersonas);

let persona3 = new Persona("Jazmin", "Chebar");
console.log(persona3.toString());

console.log(Persona.MAX_OBJ);
//Persona.MAX_OBJ = 10 //No se puede modificar
console.log(Persona.MAX_OBJ);

let persona4 = new Persona("Agustina", "Garfunkel");
console.log(persona4.toString());
let persona5 = new Persona("Federico", "Lopez");
console.log(persona5.toString());
//Fin Ejercicio Anabel Alesci

//Ejercicio Victoria Zaccaro
class Persona    // Clase padre
{
    static contadorPersonas = 0;    // Atributo estático
    email = 'Valor default email';  // Atributo no estático
    
    static get MAX_OBJ() { // Este Método simula una constante
        return 6;
    }

    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorObjetosPersona++;
        console.log("Se incrementa el contador " + Persona.contadorObjetosPersona);
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
        return this._nombre + ' ' + this._apellido;
    }

    //Sobreescribiendo el método de la clase padre (Object)
    toString() {
        return this.nombreCompleto();
    }

    static saludar() {
        console.log('Saludos desde este método static');
    }

    static saludar2(persona) {
        console.log(persona.nombre + ' ' + persona.apellido);
    }
}//Fin clase Persona

class Empleado extends Persona { // Clase hija
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

    // Sobreescritura
    nombreCompleto() {
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}

let persona1 = new Persona('Martín', 'Perez');
console.log(persona1.nombre);
persona1.nombre = 'Juan Carlos';
console.log(persona1.nombre);
// console.log(persona1);

let persona2 = new Persona('Carlos', 'Lara');
console.log(persona2.nombre);
persona2.nombre = 'María Laura';
console.log(persona2.nombre);
// console.log(persona2);
let empleado1 = new Empleado("Karina", "Bustos", "Administacion");
console.log(empleado1);
console.log(empleado1.nombreCompleto());

// Object.prototype.toString Esta es la manera de acceder a atributos y métodos de manera dinámica
console.log(empleado1.toString());
console.log(persona1.toString());

// persona1.saludar(); No se utiliza desde el objeto
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

// console.log(persona1.contadorObjetosPersona);
console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);

console.log(persona1.email);
console.log(empleado1.email);
// console.log(Persona.email); No puede acceder desde la clase
console.log(persona1.toString());
console.log(empleado1.toString());
console.log(Persona.contadorPersonas);

let persona3 = new Persona("Cinthia", "Meza");
console.log(persona3.toString());

console.log(Persona.MAX_OBJ);
//Persona.MAX_OBJ = 10 //No se puede modificar
console.log(Persona.MAX_OBJ);

let persona4 = new Persona("Leonardo", "Sanchez");
console.log(persona4.toString());
let persona5 = new Persona("Jazmin", "Torres");
console.log(persona5.toString());
let persona6 = new Persona("Javier", "Flores");
console.log(persona6.toString());
//Fin Ejercicio Victoria Zaccaro


//Ejercicio Matías Villa



//let persona3 = new Persona('Carla','Ponce'); esto esta mal.
//no es posible crear objetos antes de crear la clase


class Persona { //clase padre
    static contadorPersonas = 0 ;
    //static contadorObjetosPersona = 0 //Atributo estatico que pertenece a la clase pero no a un objeto
   // email='Valor default email'; //atributo no estatico
    
   //Creación de constantes staticas
   static get MAX_OBJ(){ //este método simula una constante
    return 5;
   }

    constructor(nombre, apellido){
        this._nombre= nombre; //inicializar atributos
        this._apellido=apellido;
        if(Persona.contadorPersonas < Persona.MAX_OBJ){
            this.idPersona=++Persona.contadorPersonas; }
        else{
            console.log('Se ha superado el MAximo de objetos permitidos');
        }
       // Persona.contadorObjetosPersona++;
       
       // console.log('Se incrementa el contador: '+Persona.contadorObjetosPersona);
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
            return this.idPersona+' '+this._nombre+' '+this.apellido;

        }

        //Método toString. Regresa un String
        //Sobreescribiendo el método de la clase padre object
        toString(){ 
            //se aplica el polimorfismo que significa = multiples formas en tiempo de ejecución
            //El método que se ejecuta depende si es una referencia de tipo padre o hija
            return this.nombreCompleto();
        }


        static saludar(){ //Este método se asocia a la clase pero no a los objetos
            console.log('Saludos desde el método static');
            
        } 

        static saludar2(persona){
            console.log(persona.nombre+' '+persona.apellido);
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


//persona1.saludar(); no se usa desde el objeto se usa desde la clase
Persona.saludar(); 
Persona.saludar2(persona1)






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

//se puede ejectuar el método statico desde la clase hija   
Empleado.saludar();
Empleado.saludar2(empleado1);


//Acceder con medio de un objeto
console.log(persona1.contadorObjetosPersona);

//Acceder por medio de una clase
console.log(Persona.contadorObjetosPersona);

//acceder desde la clase hija
console.log(Empleado.contadorObjetosPersona)

//atributo no estatico se asocia con los objetos

console.log(persona1.email);

//por herencia desde la clase hija
console.log(empleado1.email)

//acceder desde la clase no es posible
console.log(Persona.email)


console.log(persona1.toString());
console.log(persona2.toString())
console.log(empleado1.toString());
console.log(Persona.contadorPersonas);


//crear nuevos objetos de la clase persona
let persona3 = new Persona('Carla','Pertosi');
console.log(persona3.toString());
console.log(Persona.contadorPersonas);


//utilización del método 
console.log(Persona.MAX_OBJ);
//Persona.MAX_OBJ = 10; //no se puede modificar porque es statico

let persona4 = new Persona('Franco','Diaz');
console.log(persona4.toString())

let persona5= new Persona('Liliana','Paz')
console.log(persona5.toString())
//FIN EJERCICIO MATÍAS
