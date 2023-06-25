//ejercicio Jose Remaggi
import java.sql.Connection
public class Conexion{
    public static Connection getConnection(){
        Connection conexion = null;
        //Variables para conectarnos a la base de datos
        var baseDeDatos = "estudiantes2022";
        var url = "jdbc:mysql://localhost:3306/"+baseDeDatos;
        var usuario = "root";
        var password = "admin";

        //cargamos la clase del driver mysql en la memoria
        class.forName("com.mysql.cj.jdbc.Driver");
        conexion = Driver.getConnection(url,usuario,password);
    }

}
//fin ejercicio Jose Remaggi
