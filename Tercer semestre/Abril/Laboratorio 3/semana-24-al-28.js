//Ejercicio Anabel Alesci

//let x = 10; //variable de tipo rpimitva
//console.log(x.length);

//Objeto
let persona = {
    nombre: 'Carlos',
    apellido: 'Gil',
    email: 'cgil@gmail.com',
    edad: 30,
    nombreCompleto: function(){//metodo o funcion en javascript
        return this.nombre + ' ' + this.apellido;
    }
        
    
}
console.log(persona.nombre)
console.log(persona.apellido)
console.log(persona.edad)
console.log(persona.email)
console.log(persona)
console.log(persona.nombreCompleto());

// Fin Ejercicio Anabel Alesci

//Ejercicio Jose Remaggi

let persona2 = new Object(); // Debe crear un nuevo objeto en memoria
    persona2.nombre = 'Ash'
    persona2.apellido = 'Ketchum'
    persona2.edad = 10
    persona2.telefono = '1234567890'
    persona2.direccion = 'Pueblo Paleta 123'
    console.log(persona2.telefono)
    console.log(persona['apellido']) // accedemos como si fuera un arreglo
    
    //for_in y accedemos al objeto como si fuera un arreglo
    for(propiedad in persona2){
        console.log(propiedad);
        console.log(persona2[propiedad])
    }

// FIn Ejercicio Jose Remaggi

//Ejercicio Yesica López

//Distintas formas de imprimir un objeto
//Número 1: la más sencilla: concatenar cada valor de cada propiedad
console.log('Distinta formas de imprimir un objeto: forma 1');
console.log(persona.nombre+', '+persona.apellido);

//Número 2: A tráves del ciclo for in
console.log('Distinta formas de imprimir un objeto: forma 2');
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//Número 3: La función Object.values()
console.log('Distinta formas de imprimir un objeto: forma 3');
let personaArray = Object.values(persona);
console.log(personaArray);

//Número 4: Utilizamos el método JSON. stringify
console.log('Distinta formas de imprimir un objeto: forma 4'); 
let personaString= JSON.stringify(persona);
console.log(personaString);

//Fin Ejercicio Yesica López


//Ejercicio Gerardo Duckwitz
let x = 10; //Variable de tipo primitiva
console.log(x.length);
console.log("Tipos primitivos");
//Objeto
let persona = {
  nombre: "Carlos",
  apellido: "Gil",
  email: "cgil@gmail.com",
  edad: 30,
  nombreCompleto: function () {
    return this.nombre + " " + this.apellido;
  },
};

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona);
console.log(persona.nombreCompleto());

let persona2 = new Object(); //Debe crear un nuevo objeto en memoria
persona2.nombre = "Juan";
persona2.direccion = "Salada 14";
persona2.telefono = "542618282821";
console.log(persona2.telefono);
console.log("Creamos un nuevo objeto");
console.log(persona["apellido"]); //Accedemos como si fuera un arreglo
console.log("Usamos el ciclo for in");
//for in

for (propiedad in persona) {
  console.log(propiedad);
  console.log(persona[propiedad]);
}
console.log("Cambiamos y corregimos el error");
persona.apellida = "Betancud"; //Cambiamos dinamicamente el valor de un objeto
delete persona.apellida; //Eliminamos el error
console.log(persona);
//Fin Gerardo Duckwitz

//Ejercicio Victoria Zaccaro
//Distinta formas de imprimir un objeto
//Numero 1: la mas sencilla forma de concatenar proiedades
console.log(persona.nombre + ", " + persona.apellido);

//Numero 2: A traves de un ciclo for in
for (nombrePropiedad in persona) {
  console.log(persona[nombrePropiedad]);
}
//Numero 3: La funcion Object.values()
let personaArray = Object.values(persona);
console.log(personaArray);

//Numero 4: Utilizaremos el metodo JSON.stringify()
let personaString = JSON.stringify(persona);
console.log(personaString);
//Fin Victoria Zaccaro


//EJERCICIOS MATÍAS VILLA


let persona = {
    nombre: 'Carlos',
    apellido: 'Gil',
    email: 'cgil@gmail.com',
    edad: 30,
    nombreCompleto: function(){ 
        return this.nombre + ' ' + this.apellido;
    }
        
    
}
console.log(persona.nombre)
console.log(persona.apellido)
console.log(persona.edad)
console.log(persona.email)
console.log(persona)
console.log(persona.nombreCompleto());


let persona2 = new Object();
persona2.nombre = 'Juan';
persona2.direccion ='Salada 14';
persona2.telefono='3546156135156'
console.log(persona2.telefono);
console.log(persona['apellido']);

//for in accedemos al objeto como si fuera un arreglo

for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
    
}

//FIN MATÍAS VILLA
//FIN EJERCICIO MATÍAS VILLA

// Ejercicio Jesús Mercado
// 1.3 - Otras Formas de Crear un Objeto:
let persona2 = new Object(); // Debe crear un nuevo objeto en memoria
persona2.nombre = 'Juan';
persona2.direccion = 'Salada 14';
persona2.telefono = '5492618282821';
console.log(persona2.telefono);
console.log('Creamos un Nuevo Objeto');
console.log(persona['apellido']); // Accedemos como si fuera un arreglo

// for in y accedemos a un objeto como si fuera un arreglo
for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}
// Fin Ejercicio Jesús Mercado
