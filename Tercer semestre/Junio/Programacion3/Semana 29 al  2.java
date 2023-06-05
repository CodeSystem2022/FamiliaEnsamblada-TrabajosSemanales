//Ejercicio Yesica López
package domain;
import java.io.Serializable;
public class Persona implements Serializable{
    private String nombre;
    private String apellido;

    //Constructor vacio: esto es obligatorio
    public Persona(){    
    }

    public Persona(String nombre, String apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }
  
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    @Override
    public String toString() {
        return "Persona{" + "nombre=" + nombre + ", apellido=" + apellido + '}';
    }
}
//Fin Ejercicio Yesica López

//Ejercicio Gerardo Duckwitz
package test;

import domain.Persona;


public class TestJavaBeans {
    public static void main(String[] args) {
        Persona persona = new Persona();
        persona.setNombre("Juan");
        persona.setApellido("Perez");
        System.out.println("persona = " + persona);
        
        System.out.println("Persona nombre: "+persona.getNombre());
        System.out.println("Persona apellido: "+persona.getApellido());
    }
}
//Fin ejercicio Gerardo Duckwitz

//Ejercicio Jose Remaggi
package domain;
import java.io.Serializable;
public class Persona implements Serializable{
    private String nombre;
    private String apellido;

    //Constructor vacio: esto es obligatorio
    public Persona(){    
    }

    public Persona(String nombre, String apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }
  
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    @Override
    public String toString() {
        return "Persona{" + "nombre=" + nombre + ", apellido=" + apellido + '}';
    }
}
//Fin Ejericicio Jose Remaggi

//Ejercicio Anabel Alesci
package test;

import domain.Persona;


public class TestJavaBeans {
    public static void main(String[] args) {
        Persona persona = new Persona();
        persona.setNombre("Jose");
        persona.setApellido("Remaggi");
        System.out.println("persona = " + persona);
        
        System.out.println("Persona nombre: "+persona.getNombre());
        System.out.println("Persona apellido: "+persona.getApellido());
    }
}
//Fin Ejercicio Anabel Alesci

//Ejercicio Victoria Zccaro
// Clase que se considera un Java Bean
package domain;
import java.io.Serializable;

public class Persona implements Serializable {
    private String nombre;
    private String apellido;
    
   //Constructor vacio esto es obligatorio para que sea un JavaBeans
    public Persona(){
        
    }
    
    //No es requerido otro constructor pero agrego otro constructor con parametro
    public Persona(String nombre, String apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    @Override
    public String toString() {
        return "Persona{" + "nombre=" + nombre + ", apellido=" + apellido + '}';
    }   
}
//testJavaBeans 
package test;
import domain.Persona;
public class testJavaBean {
    public static void main(String[]args){
        Persona persona = new Persona();//creo el objeto persona /constructor vacio
        //ahora para asignar valores vamos a utilizar el set de cada atributo
        persona.setNombre("juan");
        persona.setApellido("Perez");
        System.out.println("persona = "+ persona);
        //Podemos imprimir asi de forma individual
        System.out.println("Persona nombre: "+ persona.getNombre());
        System.out.println("Persona apellido = "+ persona.getApellido());            
    }
}
//fin ejercicio victoria zaccaro
