//Ejercicio Yesica López
package domain;
public class Empleado {
    protected String nombre;
    protected double sueldo;
    
    public Empleado(String nombre, double sueldo){
        this.nombre=nombre;
        this.sueldo=sueldo;
    }
    //Método para la sobreescritura
    public String obtenerDetalles(){
        return "Nombre: "+this.nombre+", Sueldo: "+this.sueldo;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public double getSueldo() {
        return sueldo;
    }
    public void setSueldo(double sueldo) {
        this.sueldo = sueldo;
    }
}

package domain;
public class Gerente extends Empleado{
    private String departamento;
    
    public Gerente(String nombre, double sueldo, String departamento){
        super(nombre, sueldo);
        this.departamento=departamento;
    }
}

package test;
import domain.Gerente;
public class TestSobreescritura {
    public static void main(String[] args) {
        Gerente gerente1=new Gerente("Yesica",5000,"Sistemas");
        System.out.println("gerente1= "+gerente1.obtenerDetalles());
    }
}
//Fin Ejercicio Yesica López

//ejercicios Matías Villa

package domain;

public class Gerente extends Empleado{
    //atributos
    private String departamento;
    
    //constructor
    public Gerente(String nombre,double sueldo,String departamento){
    //acceder a los atributos de la clase padre
    //se llama por medio de super
    super(nombre,sueldo);
    //inicializar atributo
    this.departamento=departamento;
    
    }
    //Sobreescribir metodo
    @Override 
    public String obtenerDetalles(){
      return super.obtenerDetalles()+", Departamento: "+this.departamento; //llamamos al metodo de la clase padre con super
              
    }

    public String getDepartamento() {
        return departamento;
    }

    public void setDepartamento(String departamento) {
        this.departamento = departamento;
    }
    
    
    
}


//FIN EJERCICIOS MATÍAS

// Ejercicio Jesús Mercado:
// Corresponde al Ejercicio con instanceof

package test;

import domain.*;

public class TestInstanceOf {
    public static void main(String[] args) {
        Empleado empleado1 = new Empleado("Juan", 10000);
        determinarTipo(empleado1);
        
        empleado1 = new Gerente("José", 5000, "Sistemas");
        //determinarTipo(empleado1);
    }
    
    public static void determinarTipo(Empleado empleado){
        if(empleado instanceof Gerente){
            System.out.println("Es de tipo Gerente");
            Gerente gerente = (Gerente)empleado;
            //((Gerente) empleado).getDepartamento();
            System.out.println("gerente = " + gerente.getDepartamento());
        }
        else if(empleado instanceof Empleado){
            System.out.println("Es de tipo Empleado");
            //Gerente gerente = (Gerente)empleado;
            //System.out.println("gerente = " + gerente.getDepartamento());
        }
        else if(empleado instanceof Object){
            System.out.println("Es de tipo Object");
        }
    }
}

// Fin ejercicio Jesús Mercado
