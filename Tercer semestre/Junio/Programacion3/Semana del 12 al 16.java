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
