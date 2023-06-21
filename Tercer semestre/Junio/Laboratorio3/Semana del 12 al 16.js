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


//Ejercicio Gerardo Duckwitz
export default class Orden {
  static idOrden = 0;
  static get MAX_PRODUCTOS() {
    return 5;
  }
  constructor() {
    this._idOrden = ++Orden.idOrden;
    this._productos = [];
  }
  agregarProducto(producto) {
    if (this._productos.length < Orden.MAX_PRODUCTOS) {
      this._productos.push(producto);
    } else {
      console.log("No se pueden agregar más productos");
    }
  }
  calcularTotal() {
    let totalVenta = 0;
    for (let producto of this._productos) {
      totalVenta += producto.precio;
    }
    return totalVenta;
  }
  mostrarOrden() {
    let productosOrden = "";
    for (let producto of this._productos) {
      productosOrden += "\n{" + producto.toString() + "}";
    }
    console.log(`
            Orden: ${this._idOrden}
            Total: $${this.calcularTotal()}
            Productos: ${productosOrden}
        `);
  }
}

//Fin ejercicio Gerardo Duckwitz

//**Ejercicio victoria zaccaro**
class Producto {
    constructor(nombre, precio) {
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }
    get idProducto() {
        return this._idProducto;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get precio() {
        return this._precio;
    }
    set precio(precio) {
        this._precio = precio;
    }
    toString() {
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: ${this._precio}`;
    }
}//Fin de la clase Producto

class Orden {
    static contadorOrdenes = 0;
    static get_MAX_PRODUCTOS() {
        return 5;
    }

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }
    get idOrden() {
        return this._idOrden;
    }
    agregarProducto(producto) {
        if (this._productos.length < Orden.get_MAX_PRODUCTOS) {
            this._productos.push(producto);
        } else {
            console.log('No se permite agregar más productos');
        }
    }
    calcularTotal() {
        let totalVenta = 0;
        for (let producto of this._productos) {
            totalVenta += producto.precio;
        }
        return totalVenta;
    }
    mostrarOrden() {
        let productosOrden = '';
        for (let producto of this._productos) {
            productosOrden += '\n{' + producto.toString() + '}';
        }
        console.log(`Orden: ${this._idOrden} Total: $${this.calcularTotal()}, Productos: ${productosOrden}`);
    }
} //Fin de la clase Orden

let producto1 = new Producto('pantalon', 20000);
let producto2 = new Producto('chomba', 12000);
let producto3 = new Producto('blazer', 25000);
let orden1 = new Orden();
let orden2 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);
orden1.mostrarOrden();
//Fin ejercicio victoria zaccaro
