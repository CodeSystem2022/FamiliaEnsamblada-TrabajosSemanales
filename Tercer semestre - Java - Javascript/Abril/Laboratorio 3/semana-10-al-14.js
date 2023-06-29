//EJERCICIO ANABEL ALESCI
//Ejercicio 1: Leer 5 números, guardarlos en un arreglo y mostrarlos en el mismo orden introducidos
const numeros = [0, 1, 2, 3, 4];
console.log(numeros);

for(let i = 0; i < numeros.length; i++){
    console.log(numeros[i])
}
// FIN EJERCICIO ANABEL ALESCI

// EJERCICIO JOSE REMAGGI
//Ejercicio 2: Leer 5 numeros, gurdarlos en un arreglo y mostrarlos en el orden inverso al introducidos

const numeros2 = [0,1,2,3,4];
console.log(numeros2)

for(let j = (numeros2.length)-1; j >= 0; j--){
    console.log(numeros2[j])
}
//FIN EJERCICIO JOSE REMAGGI

//Ejercicio Yesica Lòpez

//Leer 5 números, guardarlos en un arreglo y mostrarlos en el orden inverso al introducido.

			let numeros=[20,5,15,12,27];
			console.log("Números introducidos: ");
			for(let i=0;i<numeros.length;i++){
				console.log("|"+i+"| -> "+numeros[i]);
			}
            
			console.log("Forma Inversa: ");
			for(i=numeros.length-1;i>=0;i--){
				console.log("|"+i+"| -> "+numeros[i]);
			}
//Fin Ejercicio Yesica Lòpez

/*
Ejercicio Jesús Mercado

Corresponde a: Programacion II - Java, 
Clase 11: Arreglos o Arrays - 11.7 Ejercicio con Arreglos 1

Enunciado: Leer 5 números, guardarlos en un arreglo y
mostrarlos en el mismo orden introducidos.
*/

const numeros = [12, 3, 45, 21, 34];
console.log(numeros);

for(let i = 0; i < numeros.length; i++) {
  console.log('El elemento ' + i + ' del arreglo es: ' + numeros[i]);
}

// Fin Ejercicio Jesús Mercado

//Ejercicios Gerardo Duckwitz

//Creacion de Array o arreglos
//let autos = new Array("BMW", "Volvo", "Ford", "Fiat", "Audi"); Esta es la sintaxis vieja
const autos = ["BMW", "Volvo", "Ford", "Fiat", "Audi"]; //Esta es la sintaxis nueva
console.log(autos);
//Recorremos los elementos del arreglo
console.log(autos[0]);
for (let i = 0; i < autos.length; i++) {
  console.log(i + " : " + autos[i]);
}
//Modificamos los elementos del arreglo
autos[1] = "Mercedes Benz";
console.log(autos[1]);
//Agregamos nuevos valores al arreglo
autos.push("Toyota");
console.log(autos);
//Otras formas de agregar elementos al arreglo
autos[autos.length] = "Porche";
console.log(autos);
//Tercera forma de agregar elementos teniendo CUIDADO
autos[6] = "Renault";
console.log(autos);
//Como preguntar si es un Array o Arreglo
console.log(Array.isArray(autos)); //Devuelve un booleano
console.log(autos instanceof Array); //Preguntamos is la variable es una instalacia de la clase Array
//Fin ejercicios Gerardo Duckwitz

//Ejercicio Matías Villa

//Leer 5 numeros, escribirlos en un arreglo y mostrarlos en el orden introducido

let miArray=[1,22,92,77,54]

for (let i=0; i<5; i++){
    miArray[i]}
    
console.log(miArray);

//FIN MATÍAS VILLA


//Ejercicio Victoria Zaccaro
//Ejercicio1: Leer 5 números, guardarlos en un arreglo y mostrarlos en el mismo orden introducidos.
            const numero=[5,11,19,2,44];
			console.log("Contenido del arreglo en el mismo orden introducidos: ");
			for(let i=0;i<numero.length;i++){
				console.log("posicion:"+i+": "+numero[i]);
			}

//Fin ejercicio Victoria Zaccaro
