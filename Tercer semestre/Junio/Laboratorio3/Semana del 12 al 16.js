//Ejercicio Yesica López
class Producto{
    static contadorProductos = 0;
    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }
    get idProducto(){
      return this._idProducto;
    }
    get nombre(){
      return this._nombre;
    }
    set nombre(nombre){
      this._nombre = nombre;
    }
    get precio(){
      return this._precio;
    }
    toString(){//Template Literals: Nos permite insertar código dinamicamente.
      return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: $${this._precio}`;
    }
} //Fin de la Clase Producto.

let producto1 = new Producto('Pantalón', 200);
let producto2 = new Producto('Camisa', 150);
console.log(producto1.toString());
console.log(producto2.toString());

//Fin Ejercicio Yesica López

//Ejercicio Jose Remaggi
class Producto{
  static contadorProductos = 0;
  constructor(nombre, precio){
      this._idProducto = ++Producto.contadorProductos;
      this._nombre = nombre;
      this._precio = precio;
  }
  get idProducto(){
    return this._idProducto;
  }
  get nombre(){
    return this._nombre;
  }
  set nombre(nombre){
    this._nombre = nombre;
  }
  get precio(){
    return this._precio;
  }
  toString(){//Template Literals: Nos permite insertar código dinamicamente.
    return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: $${this._precio}`;
  }
} //Fin de la Clase Producto.

let prod1 = new Producto('Camiseta', 20000);
let prod2 = new Producto('Botines', 30000);
console.log(producto1.toString());
console.log(producto2.toString());

//Fin Ejercicio  Jose Remaggi

//Ejercicio Anabel Alesci
class Producto{
  static contadorProductos = 0;
  constructor(nombre, precio){
      this._idProducto = ++Producto.contadorProductos;
      this._nombre = nombre;
      this._precio = precio;
  }
  get idProducto(){
    return this._idProducto;
  }
  get nombre(){
    return this._nombre;
  }
  set nombre(nombre){
    this._nombre = nombre;
  }
  get precio(){
    return this._precio;
  }
  toString(){//Template Literals: Nos permite insertar código dinamicamente.
    return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: $${this._precio}`;
  }
} //Fin de la Clase Producto.

let product1 = new Producto('zapatillas', 35000);
let product2 = new Producto('medias', 2000);
console.log(producto1.toString());
console.log(producto2.toString());

//Fin Ejercicio  Anabel Alesci
