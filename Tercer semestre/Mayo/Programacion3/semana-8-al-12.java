// Ejercicio Jose Remaggi
import domain.*
public class TestClaseObject{
    public static void main(String[] args){
        Empleado empleado1 = new Empleado("Juan",5000);
        Empleado empleado2 = new Empleado("Juan",5000);
        if(empleado1 == empleado2){
            System.out.println("Tienen la misma referencia en memoria");
        }
        else {
           System.out.println("Tienen distinta referencia en memoria");
 
        }
         if(empleado1.equals(empleado2)){
            System.out.println("Los objetos son iguales en contenido");
        }
        else {
           System.out.println("Los objetos son distintos en contenido");
 
        }
    }
}
//Fin Ejercicio Jose Remaggi
//Ejercicio Anabel Alesci
package domain;


public class Escritor extends Empleado{
    final TipoEscritura tipoEscritura;
    
    public Escritor(String nombre, double sueldo, TipoEscritura tipoEscritura){
        super(nombre, sueldo);
        this.tipoEscritura = tipoEscritura;
    }
    //Método para sobreescribir
    @Override
    public String obtenerDetalles(){
        return super.obtenerDetalles()+", Tipo Escritura: " + tipoEscritura.getDescription();
    }
    
    @Override
    public String toString(){
        return "Escritor{" + "tipoEscritura=" + tipoEscritura + '}'+ "" + super.toString();
    }
    
    public TipoEscritura getTipoEscritura(){
        return this.tipoEscritura;
    }
    
}
public class Empleado {
    protected String nombre;
    protected double sueldo;
    public Empleado(String nombre, double sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }
    //Metodo para la sobreescritura
    public String obtenerDetalles(){
        return "Nombre: "+ this.nombre+" , Sueldo: "+ this.sueldo;
        
    }
}
public enum TipoEscritura {
    CLASICO ("Escritura a mano"),
    MODERNO ("Escritura digital");
    
    private final String descripcion;
    private TipoEscritura(String descripcion){//constructor
       this.descripcion = descripcion; 
    }
    //Metodo get
    public String getDescription(){
        return this.descripcion;
    }
}
//Fin Ejercicio Anabel Alesci

//Victoria Zaccaro

package domain;

public enum TipoEscritura {
    CLASICO ("Escritura a mano"),
    MODERNO ("Escritura digital");
    
    private final String descripcion;
    
    private TipoEscritura(String descripcion){ //Constructor
        this.descripcion = descripcion;
    }

    public String getDescripcion() {
        return descripcion;
    }
    
    
}

//Fin Victoria Zaccaro
