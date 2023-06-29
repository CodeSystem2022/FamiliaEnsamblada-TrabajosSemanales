//Ejercicio Anabel Alesci
import java.util.Scanner;

public class CalculadoraUTN {
    public static void main(String[] args){
        Scanner entrada = new Scanner(System.in);
        while(true){
            System.out.println("*****Aplicacion Calculadora*******");
            //Mostramos el menu
            mostrarMenu();
            try {
                var operacion = Integer.parseInt(entrada.nextLine());
                if (operacion >= 1 && operacion <= 4) {
                    ejecutarOperacion(operacion,entrada);
                }//Fin de if
                else if (operacion == 5) {
                    System.out.printf("Hasta pronto....");
                    break;//Rompe el ciclo y sale
                } else {
                    System.out.printf("Opcion erronea " + operacion);
                }
                //Imprimimos un salto de linea antes de volver a mostrar el meni
                System.out.println("");
            }catch(Exception e){ //Fin del try, comienzo del catch
                System.out.println("Ocurrio un error " + e.getMessage());
            }
        }//Fin while


    }//Fin main
    private static void mostrarMenu(){
        System.out.println("""
                1.Suma
                2.Resta
                3.Multiplicacion
                4.Division
                5.Salir
                """);
        System.out.println("Operacion a realizar");
    } // Fin metodo mostrarMenu
    private static void ejecutarOperacion(int operacion, Scanner entrada){

        System.out.print("Ingrese el valor del primer operando");
        var operando1 = Double.parseDouble(entrada.nextLine());
        System.out.print("Ingrese el valor delsegundo operando");
        var operando2 = Double.parseDouble(entrada.nextLine());
        double resultado;
        switch (operacion) {
            case 1 -> {
                resultado = operando1 + operando2;
                System.out.println("Resultado de la suma = " + resultado);
            }
            case 2 -> {
                resultado = operando1 - operando2;
                System.out.println("Resultado de la resta= " + resultado);
            }
            case 3 -> {
                resultado = operando1 * operando2;
                System.out.println("Resultado de la mulitplicacion = " + resultado);
            }
            case 4 -> {
                resultado = operando1 / operando2;
                System.out.println("Resultado de la division = " + resultado);
            }
            default -> System.out.printf("opcion erronea " + operacion);
        } //Fin del switch
    }//Fin metodo ejecutarOperacion
}//Fin clase

//Fin Ejercicio Anabel Alesci

//Ejercicio Jose Remaggi
import java.util.Scanner;

public class CalculadoraUTN {
    public static void main(String[] args){
        Scanner entrada = new Scanner(System.in);
        while(true){
            System.out.println("*****Aplicacion Calculadora*******");
            //Mostramos el menu
            mostrarMenu();
            try {
                var operacion = Integer.parseInt(entrada.nextLine());
                if (operacion >= 1 && operacion <= 4) {
                    ejecutarOperacion(operacion,entrada);
                }//Fin de if
                else if (operacion == 5) {
                    System.out.printf("Hasta pronto....");
                    break;//Rompe el ciclo y sale
                } else {
                    System.out.printf("Opcion erronea " + operacion);
                }
                //Imprimimos un salto de linea antes de volver a mostrar el meni
                System.out.println("");
            }catch(Exception e){ //Fin del try, comienzo del catch
                System.out.println("Ocurrio un error " + e.getMessage());
            }
        }//Fin while


    }//Fin main
    private static void mostrarMenu(){
        System.out.println("""
                1.Suma
                2.Resta
                3.Multiplicacion
                4.Division
                5.Salir
                """);
        System.out.println("Operacion a realizar");
    } // Fin metodo mostrarMenu
    private static void ejecutarOperacion(int operacion, Scanner entrada){

        System.out.print("Ingrese el valor del primer operando");
        var operando1 = Double.parseDouble(entrada.nextLine());
        System.out.print("Ingrese el valor delsegundo operando");
        var operando2 = Double.parseDouble(entrada.nextLine());
        double resultado;
        switch (operacion) {
            case 1 -> {
                resultado = operando1 + operando2;
                System.out.println("Resultado de la suma = " + resultado);
            }
            case 2 -> {
                resultado = operando1 - operando2;
                System.out.println("Resultado de la resta= " + resultado);
            }
            case 3 -> {
                resultado = operando1 * operando2;
                System.out.println("Resultado de la mulitplicacion = " + resultado);
            }
            case 4 -> {
                resultado = operando1 / operando2;
                System.out.println("Resultado de la division = " + resultado);
            }
            default -> System.out.printf("opcion erronea " + operacion);
        } //Fin del switch
    }//Fin metodo ejecutarOperacion
}//Fin clase

//Fin Ejercicio Jose Remaggi
 
//Ejercicio Yesica López
import java.util.Scanner;

public class CalculadoraUTN {
    public static void main(String[] args){
        Scanner entrada = new Scanner(System.in);
        while(true){ //Ciclo infinito
            System.out.println("********Aplicación Calculadora********");
         
            mostrarMenu();
            
            try {
                var operacion = Integer.parseInt(entrada.nextLine());
                if (operacion >= 1 && operacion <= 4) {
                    ejecutarOperacion(operacion, entrada);
                }//Fin del if
                else if (operacion == 5) {
                    System.out.printf("Hasta pronto...");
                    break;//Rompe el ciclo y sale
                } else {
                    System.out.printf("Opción erronea " + operacion);
                }
                //Imprimimos un salto de linea antes de repetir el menu
                System.out.println();
            }catch(Exception e){ //Fin del try, comienzo del catch
                System.out.println("Ocurrió un error " + e.getMessage());
            }//Fin catch
        }//Fin while
    }//Fin main

    private static void mostrarMenu(){
        System.out.println("""
                1.Suma
                2.Resta
                3.Multiplicacion
                4.Division
                5.Salir
                """);
        System.out.println("Operación a realizar? ");
    } // Fin método mostrarMenu

    private static void ejecutarOperacion(int operacion, Scanner entrada){
        System.out.print("Digite el valor para el operador1: ");
        var operando1 = Double.parseDouble(entrada.nextLine());
        System.out.print("Digite el valor para el operando2: ");
        var operando2 = Double.parseDouble(entrada.nextLine());
        double resultado;
        switch (operacion){
            case 1 -> { //Suma
                resultado = operando1 + operando2;
                System.out.println("Resultado de la suma : " + resultado);
            }
            case 2 -> { //Resta
                resultado = operando1 - operando2;
                System.out.println("Resultado de la resta: " + resultado);
            }
            case 3 -> { //Multiplicación
                resultado = operando1 * operando2;
                System.out.println("Resultado de la multiplicación: " + resultado);
            }
            case 4 -> { //División
                resultado = operando1 / operando2;
                System.out.println("Resultado de la división: " + resultado);
            }
            default -> System.out.printf("Opcion erronea " + operacion);
        } //Fin del switch
    }//Fin metodo ejecutarOperacion
}//Fin clase

 //Fin Ejercicio Yesica López
                           
//Ejercicio Gerardo Duckwitz
import java.util.Scanner;

public class CalculadoraUTN {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        while (true) {


            System.out.println("********* Aplicacion Calculadora **********");
            mostrarMenu();
            try {
                var operacion = Integer.parseInt((entrada.nextLine()));

                if (operacion >= 1 && operacion <= 4) {

                    ejecutarOperacion(operacion, entrada);

                }//Fin del if
                else if (operacion == 5) {
                    System.out.println("Hasta pronto...");
                    break;
                } else {
                    System.out.println("Opcion erronea: " + operacion);
                }
                //Imprimimos un salto de linea antes de repetir el menu
                System.out.println();
            } catch (Exception e) { //Fin del try, comienzo del catch
                System.out.println("Ocurrio un error: " + e.getMessage());
                System.out.println();
            }

        }//Fin while
    }//Fin del main


    private static void mostrarMenu() {
        System.out.println("""
                1. Suma
                2. Resta
                3. Multiplicación
                4. Division
                5. Salir
                """);
        System.out.print("¿Operacion a realizar?");
    }

    private static void ejecutarOperacion(int operacion, Scanner entrada) {
        System.out.print("Digite el valor para el operando1: ");
        var operando1 = Double.parseDouble(entrada.nextLine());
        System.out.print("Digite el valor para el operando2: ");
        var operando2 = Double.parseDouble(entrada.nextLine());

        Double resultado;
        switch (operacion) {
            case 1 -> {
                resultado = operando1 + operando2;
                System.out.println("Resultado de la suma " + resultado);
            }
            case 2 -> {
                resultado = operando1 - operando2;
                System.out.println("Resultado de la resta " + resultado);
            }
            case 3 -> {
                resultado = operando1 * operando2;
                System.out.println("Resultado de la multiplicacion " + resultado);

            }
            case 4 -> {
                resultado = operando1 / operando2;
                System.out.println("Resultado de la division " + resultado);

            }
            default -> System.out.println("Opcion erronea: " + operacion);
        }//Fin del switch
    }
}//Fin de la clase
//Fin ejercicio Gerardo Duckwitz
                           
 //Ejercicio victoria zaccaro
                           
   import java.util.Scanner;

public class CalculadoraUTN{

    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        System.out.println("**Aplicacion Calculadora**");
        while (true) {// Ciclo infinito
            System.out.println("**Aplicacion Calculadora**");
            // Mostramos el menu
            System.out.println("""
                    1.Suma
                    2.Resta
                    3.Multiplicacion
                    4.Division
                    5.Salir
                    """);
            System.out.println("Operacion a realizar?");
            try {
                var operacion = Integer.parseInt(entrada.nextLine());
                if (operacion >= 1 && operacion <= 4) {
                    System.out.print("Ingrese el valor del primer operando");
                    var operando1 = Integer.parseInt(entrada.nextLine());
                    System.out.print("Ingrese el valor delsegundo operando");
                    var operando2 = Integer.parseInt(entrada.nextLine());
                int  resultado;
                    switch (operacion) {
                        case 1 -> {
                            resultado = operando1 + operando2;
                            System.out.println("Resultado de la suma : " + resultado);
                        }
                        case 2 -> {
                            resultado = operando1 - operando2;
                            System.out.println("Resultado de la resta: " + resultado);
                        }
                        case 3 -> {
                            resultado = operando1 * operando2;
                            System.out.println("Resultado de la mulitplicacion:" + resultado);
                        }
                        case 4 -> {
                            resultado = operando1 / operando2;
                            System.out.println("Resultado de la division = " + resultado);
                        }
                        default -> System.out.printf("opcion erronea " + operacion);
                    }// Fin de switch
                } // Fin del if
                else if (operacion == 5) {
                    System.out.println("Hasta pronto..");
                    break;// Rompe el ciclo y sale
                } else {
                    System.out.printf("Opcion erronea " + operacion);
                }
                // Imprimimos un salto de linea antes de volver a mostrar el menu
                System.out.println("");
            } // Fin del try, comienzo del catch

            catch (Exception e) {
                System.out.println("Ocurrio un error " + e.getMessage());
                System.out.println();
            }
        } // Fin while
    }// Fin main
}// Fin clase
//Fin ejercicio victoria zaccaro
                               
//Ejercicio Matías Villa
 import java.util.Scanner;

public class CalculadoraUTN {
        public static void main(String[] args) {
            //Incorporamos Scanner para que el usuario ingrese valores
            Scanner entrada = new Scanner(System.in);
            System.out.println("***** Aplicación Calculadora *****");
            mostrarMenu();
            while(true) {

                System.out.print("Operación a realizar?");

                try {
                    var operacion = Integer.parseInt(entrada.nextLine());
                if (operacion >= 1 && operacion <= 4) {
                    ejecutarOperacion(operacion, entrada);
                    //Fin switch
                } //Fin del if


                else if (operacion == 5) {
                    System.out.println("Hasta pronto...");
                    break;
                } else {
                    System.out.println("Opción Erronea: " + operacion);
                }

                //Imprimimos un salto de linea
                System.out.println();

            }//Fin try
                catch (Exception e){
                    System.out.println("ocurrio un error:= " + e.getMessage());
                }
        }//Fin While
    }//Fin del main

    private static void mostrarMenu(){

        //Mostramos el menú
        System.out.println("""
                    1.Sumar
                    2.Resta
                    3.Multiplicación
                    4.División
                    5.Salir
                    """);


    }

    private static void ejecutarOperacion(int operacion,Scanner entrada){

        System.out.print("Digite el valor para operando1: ");
        var operando1 = Double.parseDouble(entrada.nextLine());
        System.out.print("Digite el valor para operando2: ");  //Quitamos el ln para que se imprima en la misma linea
        var operando2 = Double.parseDouble(entrada.nextLine());


        //creamos swicht para realizar las operaciones
        Double resultado;
        switch (operacion) {
            case 1 -> { //suma
                resultado = operando1 + operando2;
                System.out.println("resultado de la suma = " + resultado);
            }
            case 2 -> { //resta
                resultado = operando1 - operando2;
                System.out.println("resultado de la resta= " + resultado);
            }
            case 3 -> { //multiplicación
                resultado = operando1 * operando2;
                System.out.println("resultado de la multiplicación = " + resultado);

            }
            case 4 -> { //división
                resultado = operando1 / operando2;
                System.out.println("resultado de la división = " + resultado);
            }

            default -> System.out.println("Opción erronea" + operacion);

        }

    }

}//Fin clase
//$$$$$$$ FIN EJERCIO MATÍAS $$$$$$$$
