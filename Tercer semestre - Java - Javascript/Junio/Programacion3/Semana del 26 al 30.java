//Ejercicio Gerardo Duckwitz
package UTN.dominio;

public class Estudiante {
    private int idEstudiante;
    private String nombre;
    private String apellido;
    private String telefono;
    private String email;

    public Estudiante(){

    }
    public Estudiante(int idEstudiante){
        this.idEstudiante = idEstudiante;
    }
    public Estudiante(String nombre, String apellido, String telefono, String email){
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.email = email;

    }
    public Estudiante ( int idEstudiante, String nombre, String apellido, String telefono, String email){
        this.idEstudiante = idEstudiante;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.email = email;

    }

    public int getIdEstudiante() {
        return idEstudiante;
    }

    public void setIdEstudiante(int idEstudiante) {
        this.idEstudiante = idEstudiante;
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

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "Estudiante{" +
                "idEstudiante=" + idEstudiante +
                ", nombre='" + nombre + '\'' +
                ", apellido='" + apellido + '\'' +
                ", telefono='" + telefono + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
//Fin ejercicio Gerardo Duckwitz


  //Inicio ejercicio Victoria Zaccaro
package UTN.dominio;
public class Estudiante {
    //atributos privados
    private int idEstudiante;
    private String nombre;
    private String apellido;
    private String telefono;
    private String email;
    
    //Sobrecarga de constructores
    
    //Constructor vacio
    public Estudiante(){}//Para generar objetos de tipo estudiante con atributos null
    
    //Constructor para la llave primaria
    public Estudiante(int idEstudiante){
        this.idEstudiante = idEstudiante; //nos va aa permitir eliminar
    }
    
    //Constructor para insertar un nuevo estudiante
    public Estudiante(String nombre, String apellido, String telefono, String email){
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.email = email;
    }
    
    //Constructor para modificar un elemento en la base de datos
    public Estudiante(int idEstudiante, String nombre, String apellido, String telefono, String email){
        this.idEstudiante = idEstudiante;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.email = email;
    }
    
    //Métodos Getters & Setters

    public int getIdEstudiante() {
        return idEstudiante;
    }

    public void setIdEstudiante(int idEstudiante) {
        this.idEstudiante = idEstudiante;
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

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    
    //Método toString
    @Override
    public String toString() {
        return "Estudiante{" + 
               "idEstudiante=" + idEstudiante +
               ", nombre=" + nombre +
               ", apellido=" + apellido +
               ", telefono=" + telefono +
               ", email=" + email +
               '}';
    }
    
}
//Fin ejercicio Victoria Zaccro.

//Ejercicio Matías Villa

package UTN.datos;

import UTN.dominio.Estudiante;

import static UTN.conexion.Conexion.getConnection;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;


public class EstudianteDAO {
    //Metodo Listar
    public List <Estudiante> listarEstudiantes(){
        List<Estudiante> estudiantes = new ArrayList<>();
        //Creamos algunos objetos que son necesarios para comunicarnos con la bd
        PreparedStatement ps; //Envia sentencia de la bd
        ResultSet rs;//Obtiene el resultado de la bd
        //Creamos un objeto de tipo conexión
        Connection con = getConnection();
        String sql = "SELECT * FROM estudiantes2 ORDER BY estudiantes2023";  //Establecemos la sentencia
        try{
            ps = con.prepareStatement(sql);
            rs = ps.executeQuery();
            while(rs.next()){
                var estudiante = new Estudiante();
                estudiante.setIdEstudiante(rs.getInt("idestudiantes2023"));
                estudiante.setNombre(rs.getString("nombre"));
                estudiante.setApellido(rs.getString("apellido"));
                estudiante.setTelefono(rs.getString("telefono"));
                estudiante.setEmail(rs.getString("email"));
                //Falta agregarlo a la lista
                estudiantes.add(estudiante); //recibe cada elemento de la base de datos
            }
        } catch(Exception e){
            System.out.println("Ocurrió un error al seleccionar datos"+e.getMessage());

        }
        finally {
            try{
                con.close();
            }catch (Exception e){
                System.out.println("Ocurrió un error al cerrar la conexión: "+e.getMessage());
            }
        }//Fin finally
        return estudiantes;

    }//Fin método listar

    //agregamos main para la ejecución
    public static void main(String[] args) {
        //Listar los estudiantes
        var estudianteDao = new EstudianteDAO();
        System.out.println("Listado de estudiantes: ");
        List <Estudiante> estudiantes = estudianteDao.listarEstudiantes();
        estudiantes.forEach(System.out::println);//Función lambda para imprimir

    }
}
//Fin ejercicio Matías Villa. 

//Inicio ejercicio Jose Remaggi

package UTN.dominio;
public class Estudiante {
    //atributos privados
    private int idEstudiante;
    private String nombre;
    private String apellido;
    private String telefono;
    private String email;
    
    //Sobrecarga de constructores
    
    //Constructor vacio
    public Estudiante(){}//Para generar objetos de tipo estudiante con atributos null
    
    //Constructor para la llave primaria
    public Estudiante(int idEstudiante){
        this.idEstudiante = idEstudiante; //nos va aa permitir eliminar
    }
    
    //Constructor para insertar un nuevo estudiante
    public Estudiante(String nombre, String apellido, String telefono, String email){
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.email = email;
    }
    
    //Constructor para modificar un elemento en la base de datos
    public Estudiante(int idEstudiante, String nombre, String apellido, String telefono, String email){
        this.idEstudiante = idEstudiante;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.email = email;
    }
    
    //Métodos Getters & Setters

    public int getIdEstudiante() {
        return idEstudiante;
    }

    public void setIdEstudiante(int idEstudiante) {
        this.idEstudiante = idEstudiante;
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

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    
    //Método toString
    @Override
    public String toString() {
        return "Estudiante{" + 
               "idEstudiante=" + idEstudiante +
               ", nombre=" + nombre +
               ", apellido=" + apellido +
               ", telefono=" + telefono +
               ", email=" + email +
               '}';
    }
    
}
//Fin ejercicio Jose Remaggi

