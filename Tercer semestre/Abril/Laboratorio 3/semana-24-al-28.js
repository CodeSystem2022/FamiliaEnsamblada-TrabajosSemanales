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

