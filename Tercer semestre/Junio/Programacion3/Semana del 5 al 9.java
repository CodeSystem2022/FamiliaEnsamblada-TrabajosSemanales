//Ejercicio Anabel Alesco
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
