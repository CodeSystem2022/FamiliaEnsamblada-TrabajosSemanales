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
