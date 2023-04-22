//Ejercicios Gerardo Duckwitz
package test;

public class TestArgumentosVariables {

    public static void main(String[] args) {
        imprimirNumeros(3, 4, 5);
        imprimirNumeros(1, 2);
        variosParametros("Juan", "Perez", 7, 8, 9);
    }

    private static void variosParametros(String nombre, String apellido, int... numeros) {
        System.out.println("Nombre: " + nombre+ "Apellido: "+apellido);
       

        imprimirNumeros(numeros);
    }

    private static void imprimirNumeros(int... numeros) {
        for (int i = 0; i < numeros.length; i++) {
            System.out.println("Elementos: " + numeros[i]);

        }

    }
}

//Fin ejercicio Gerardo Duckwitz

//Ejercicios Victoria Zaccaro
package test;

import enumeraciones.Dias;

public class TestEnumeraciones {

    public static void main(String[] args) {
        System.out.println("Dia 1: " + Dias.LUNES);
        indicarDiaSemana(Dias.LUNES);
    }

    private static void indicarDiaSemana(Dias dias) {
        switch (dias) {
            case LUNES:
                System.out.println("Primer dia de la semana");
                break;
            case MARTES:
                System.out.println("Segundo dia de la semana");
                break;
            case MIERCOLES:
                System.out.println("Tercer dia de la semana");
                break;
            case JUEVES:
                System.out.println("Cuarto dia de la semana");
                break;
            case VIERNES:
                System.out.println("Quinto dia de la semana");
                break;
            case SABADO:
                System.out.println("Sexto dia de la semana");
                break;
            case DOMINGO:
                System.out.println("Septimo dia de la semana");
                break;
            default:
                System.out.println("Error");
                break;
        }

    }
}
//Fin ejercicios Victoria Zaccaro
//Ejercicios Jose Remaggi
package test;

public class TestArgumentosVariables {

    public static void main(String[] args) {
        imprimirNumeros(1, 2, 3);
        imprimirNumeros(4, 5);
        variosParametros("Jose", "Remaggi", 6, 7, 8);
    }

    private static void variosParametros(String nombre, String apellido, int... numeros) {
        System.out.println("Nombre: " + nombre+ "Apellido: "+apellido);
       

        imprimirNumeros(numeros);
    }

    private static void imprimirNumeros(int... numeros) {
        for (int i = 0; i < numeros.length; i++) {
            System.out.println("Elementos: " + numeros[i]);

        }

    }
}
// Fin Ejercicio Jose Remagi

//Ejercicio Anabel Alesci
package test;

import enumeraciones.Dias;

public class TestEnum {

    public static void main(String[] args) {
        System.out.println("Dia 1: " + Dias.LUNES);
        indicarDia(Dias.LUNES);
    }

    private static void indicarDia(Dias dias) {
        switch (dias) {
            case LUNES:
                System.out.println("Primer dia de la semana");
                break;
            case MARTES:
                System.out.println("Segundo dia de la semana");
                break;
            case MIERCOLES:
                System.out.println("Tercer dia de la semana");
                break;
            case JUEVES:
                System.out.println("Cuarto dia de la semana");
                break;
            case VIERNES:
                System.out.println("Quinto dia de la semana");
                break;
            case SABADO:
                System.out.println("Sexto dia de la semana");
                break;
            case DOMINGO:
                System.out.println("Septimo dia de la semana");
                break;
            default:
                System.out.println("Error");
                break;
        }

    }
}
//Fin Ejercicio Anabel Alesci

//MATÍAS VILLA


package test;

//import enumeraciones.Continentes;
import enumeraciones.Dias;


public class TestEnumeraciones {
    public static void main(String[] args) {
        System.out.println("Dia 1:"+Dias.LUNES); //por defauld cada enumeración es una cadena. se trata como una lista de valores
        IndicarDiaSemana(Dias.LUNES);
        //System.out.println("Contienentes No 4."+Continentes.AMERICA);
        //System.out.println("No. de paises en el 4to contienente:"+Continentes.AMERICA.getPaises());
        //System.out.println("No. de habitantes en el 4to contienente:"+Continentes.AMERICA.getHabitantes());
    }
    
    private static void IndicarDiaSemana(Dias dias){//otro metodo
            switch(dias){
                case LUNES:
                    System.out.println("Primer dia de la semana: ");
                    break;
                case MARTES:
                    System.out.println("Segundo Día de la semana");
                    break;
                case MIERCOLES:
                    System.out.println("Tercer día de la semana:");
                    break;
                case JUEVES:
                    System.out.println("Cuarto día de la semana");
                    break;
                case VIERNES:
                    System.out.println("Quinto día de la semana: ");
                    break;
                case SABADO:
                    System.out.println("Sexto día de la semana: ");
                    break;
                case DOMINGO:
                    System.out.println("Septimo día de la semana");
                    break;
                default:
                System.out.println("Error");
                break;
                        
                      
    
    }
}
    
}

//FIN MATÍAS VILLA
