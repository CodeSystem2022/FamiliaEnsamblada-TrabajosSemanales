//Ejercicio Yesica López

package domain;
public class Persona {
    private String nombre;

    public Persona(String nombre) {
        this.nombre = nombre;
    }
    
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public String toString() {
        return "Persona{" + "nombre=" + nombre + '}';
    }     
}

package test;

import domain.Persona;

public class TestForEach {
    public static void main(String[] args){
        int edades[]={5,6,10,11}; 
        for(int edad: edades){ 
           System.out.println("edad= "+edad);
        }
        Persona personas[]={new Persona("Ethan"), new Persona("Yesica"),new Persona("Beatriz")};
                
        //ForEach
        for(Persona persona : personas){
            System.out.println("Persona= "+persona);
        }
          
    }
}
//Fin Ejercicio Yesica López

//Ejercicio Anabel Alesci

package test;


public class TestAutoboxingUnboxing {
    public static void main(String[] args) {
      //Clases envolventes o Wrapper
      /*
      Clases envolventes de tipos primitivos
      int = la clasew envolvente es Integer
      long =  la clase envolvente es Float
      double = la clase envolvente es Double
      boolean = la clase envolvente es Boolean
      byte = la clase envolvente es Byte
      char = la clase envolvente es Character
      short = la clase envolvente es Short
      */
      int enteroPrim = 10;//Tipo primitivo
      Integer entero = 10;//Tipo object con la clase Integer
        System.out.println("entero = " + entero.doubleValue());//Autoboxing
        
        
        int entero2 = entero;//Unboxing: se toma objeto y se pasa a tipo primitivo
        System.out.println("entero2 = " + entero2);
        
    }
 
}

//Fin Ejercicio Anabel Alesci