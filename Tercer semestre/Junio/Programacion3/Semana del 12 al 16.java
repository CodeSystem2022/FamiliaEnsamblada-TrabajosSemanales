//Ejercicio Yesica López
public class Persona {
   private int id;
   private String nombre;
   private String tel;
   private String email;
   private static int numeroPersonas = 0;
   
   //Constructor vacio
   public Persona(){
       this.id = ++Persona.numeroPersonas;
   }
   
   //Constructor con parámetros (sobrecarga de constructores)
   public Persona(String nombre, String tel, String email){
       this();
       this.nombre = nombre;
       this.tel = tel;
       this.email = email;
   }
   
   @Override
   public String toString(){
       return "Persona{" +
               "id=" + id +
               ", nombre='" + nombre + '\'' +
               ", tel='" + tel + '\'' +
               ", email='" + email + '\'' +
               '}';
   }
   
   public static void main(String[] args) {
       Persona persona1 = new Persona("Yesica López", "2611891241", "ylopez@mail.com");
       System.out.println(persona1);
   }
}
//Fin Ejercicio Yesica López

//Ejercicio Jose Remaggi
public class Persona {
   private int id;
   private String nombre;
   private String tel;
   private String email;
   private static int numeroPersonas = 0;
   
   //Constructor vacio
   public Persona(){
       this.id = ++Persona.numeroPersonas;
   }
   
   //Constructor con parámetros (sobrecarga de constructores)
   public Persona(String nombre, String tel, String email){
       this();
       this.nombre = nombre;
       this.tel = tel;
       this.email = email;
   }
   
   @Override
   public String toString(){
       return "Persona{" +
               "id=" + id +
               ", nombre='" + nombre + '\'' +
               ", tel='" + tel + '\'' +
               ", email='" + email + '\'' +
               '}';
   }
   
   public static void main(String[] args) {
       Persona persona1 = new Persona("Jose Remaggi", "2616846097", "jremaggi@yopmail.com");
       System.out.println(persona1);
   }
}
//Fin Ejercicio Jose Remaggi

//Ejercicio Anabel Alesci
public class Persona {
   private int id;
   private String nombre;
   private String tel;
   private String email;
   private static int numeroPersonas = 0;
   
   //Constructor vacio
   public Persona(){
       this.id = ++Persona.numeroPersonas;
   }
   
   //Constructor con parámetros (sobrecarga de constructores)
   public Persona(String nombre, String tel, String email){
       this();
       this.nombre = nombre;
       this.tel = tel;
       this.email = email;
   }
   
   @Override
   public String toString(){
       return "Persona{" +
               "id=" + id +
               ", nombre='" + nombre + '\'' +
               ", tel='" + tel + '\'' +
               ", email='" + email + '\'' +
               '}';
   }
   
   public static void main(String[] args) {
       Persona persona1 = new Persona("Anabel Alesci", "2616153388", "jremaggi@yopmail.com");
       System.out.println(persona1);
   }
}
//Fin Ejercicio Anabel Alesci

//Ejercicio Gerardo Duckwitz
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class ListadoPersonasApp {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        //Definimos la lista fuera del ciclo while
        List<Persona> personas = new ArrayList<>();
        //Empezamos con el menu
        var salir = false;
        while (!salir){
            mostrarMenu();
            try{
                salir = ejecutarOperacion(entrada, personas);
            }catch (Exception e ){
                System.out.println("Ocurrio un error: "+e.getMessage());
            }
            System.out.println();
        }//Fin ciclo while

    } //Fin metodo Main

    private static void mostrarMenu(){
        //Mostramos las opciones
        System.out.print("""
                ****** Listado de personas ********
                1. Agregar
                2. Listar
                3. Salir
                """);
        System.out.print("Digite una de las opciones");

    }//Fin del mostrar menu

    private static  boolean ejecutarOperacion(Scanner entrada, List<Persona> personas){
    var opcion = Integer.parseInt((entrada.nextLine()));
    var salir = false;
    switch (opcion){
        case 1 -> { //Agregar una persona a la lista
            System.out.print("Digite el nombre: ");
            var nombre = entrada.nextLine();
            System.out.print("Digite el telefono:");
            var tel = entrada.nextLine();
            System.out.print("Digite el correo: ");
            var email = entrada.nextLine();
            //Creamos el objeto persona
            var persona = new Persona(nombre, tel, email);
            personas.add(persona);
            System.out.println("La lista tiene "+personas.size()+ " elementos");
        }
        case 2 -> { //Listar a las personas
            System.out.println("Listado de personas: ");
            //Mejoras con lambda y el metodo de referencia
            //personas.forEach((persona) -> System.out.println(persona));
            personas.forEach(System.out::println);

        }
        case 3 -> {//Salir del ciclo
            System.out.println("Hasta pronto...");
            salir = true;

        }//Fin caso 3
        default -> System.out.println("Opcion incorrecta"+opcion);
         }
         return salir;
    }//Fin del metodo ejecutaroperacion
}
//Fin ejercicio Gerardo Duckwitz
