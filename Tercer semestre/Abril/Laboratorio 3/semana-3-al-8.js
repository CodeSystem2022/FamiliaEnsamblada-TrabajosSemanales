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
