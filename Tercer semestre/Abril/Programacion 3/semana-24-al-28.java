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
