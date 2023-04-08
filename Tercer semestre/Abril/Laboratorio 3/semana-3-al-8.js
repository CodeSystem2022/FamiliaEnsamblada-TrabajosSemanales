
//MATÍAS VILLA
//Diseñar un programa que muestre el producto de los 10 primeros números impares
let producto=1;
for(let contando=0;contando<=20; contando++){
   
    if(contando%2!=0){
        console.log(contando); //Muestra todos los impares
        producto *= contando
        console.log(producto)
    }
}
console.log("el producto de de los 10 primeros números impares es " + producto);
//FIN MATIAS VILLA