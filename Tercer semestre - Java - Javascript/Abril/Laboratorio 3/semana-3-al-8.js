//MATÍAS VILLA
//Diseñar un programa que muestre el producto de los 10 primeros números impares
let producto = 1;
for (let contando = 0; contando <= 20; contando++) {
  if (contando % 2 != 0) {
    console.log(contando); //Muestra todos los impares
    producto *= contando;
    console.log(producto);
  }
}
console.log("el producto de de los 10 primeros números impares es " + producto);
//FIN MATIAS VILLA

//Gerardo Duckwitz
let numero,
  aleatorio,
  contador = 0,
  limiteIntentos = 10;

aleatorio = Math.floor(Math.random() * 100);

do {
  numero = parseInt(prompt("Digite un número: "));
  if (numero < aleatorio) {
    console.log("Ingrese un número mayor");
  } else if (numero > aleatorio) {
    console.log("Ingrese un número menor");
  }
  contador++;
} while (numero !== aleatorio && contador < limiteIntentos);

if (numero === aleatorio) {
  console.log(
    `¡Correcto! El número era ${aleatorio}, hiciste ${contador} intentos.`
  );
} else {
  console.log(
    `Agotaste tus ${limiteIntentos} intentos. El número era ${aleatorio}.`
  );
}
//Fin ejercicio Gerardo Duckwitz

//Yesica López
//Pedir un número N, y mostrar todos los números
//del 1 al N.
console.log("Digite un número: ");
let numero = parseInt(prompt());

let i = 1;
while (i <= numero) {
  console.log(i);
  i++;
}

// fin Yesica López

//Jose Remaggi
//Pedir un número N, y mostrar todos los números
//del 1 al N.
console.log("Digite un número: ");
let n = parseInt(prompt());

let i = 1;
while (i <= n) {
  console.log(i);
  i++;
}

// fin Jose Remaggi

//Anabel ALESCI
//Diseñar un programa que muestre el producto de los 10 primeros números impares
let p = 1;
for (let i = 0; i <= 20; i++) {
  if (i % 2 != 0) { //Verifico si el numero es impar
    console.log(i); //Muestra todos los impares
    p *= i;
    console.log(p);
  }
}
console.log("el producto de los 10 primeros números impares es " + p);

//Fin Anabel Alesci

// Jesús Mercado

// 1° Ejercicio Ciclo While - Laboratorio I - Python:
// Corresponde a la Clase 8 - Ciclo While y For
// Imprimir números del 0 al 5 con el ciclo while
let contador = 0;
let maximo = 5;
while(contador <= maximo) {
    console.log(contador);
    contador++;
}
console.log('Fin del ciclo while');

// Fin Jesús Mercado


//Ejercicio Victoria Zaccaro
//Pedir el día, mes y año de una fecha e
//indicar si la fecha es correcta. Suponiendo que
//todos los meses son de 30 días.
console.log("Digite el día: ");
let dia = parseInt(prompt());

console.log("Digite el mes: ");
let mes = parseInt(prompt());

console.log("Digite el año: ");
let anio = parseInt(prompt());

if (dia != 0 && dia <= 30) {
  if (mes != 0 && mes <= 12) {
    if (anio != 0 && anio <= 2022) {
      console.log("La fecha ingresada es: " + dia + "/" + mes + "/" + anio);
    } else {
      console.log("Fecha incorrecta, año incorrecto");
    }
  } else {
    console.log("Fecha incorrecta, mes incorrecto");
  }
} else {
  console.log("Fecha incorrecta, día incorrecto");
}

//Fin ejercicio Victoria Zaccaro
