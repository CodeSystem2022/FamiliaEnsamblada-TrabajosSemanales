//ejercicio Jose Remaggi
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
public class Conexion{
    public static Connection getConnection(){
        Connection conexion = null;
        //Variables para conectarnos a la base de datos
        var baseDeDatos = "estudiantes2022";
        var url = "jdbc:mysql://localhost:3306/"+baseDeDatos;
        var usuario = "root";
        var password = "admin";

        try {
            //cargamos la clase del driver mysql en la memoria
            Class.forName("com.mysql.cj.jdbc.Driver");
         
        conexion = DriverManager.getConnection(url,usuario,password);
        }catch (ClassNotFoundException | SQLException e) {
            Logger.getLogger(Conexion.class.getName()).log(Level.SEVERE, null, e);
    }
        return conexion;

}
}
//fin ejercicio Jose Remaggi
    
//ejercicio Anabel Alesci

public class Conexion{
    public static Connection getConnection(){
        Connection conexion = null;
        //Variables para conectarnos a la base de datos
        var baseDeDatos = "estudiantes2022";
        var url = "jdbc:mysql://localhost:3306/"+baseDeDatos;
        var usuario = "root";
        var password = "admin";

        try {
            //cargamos la clase del driver mysql en la memoria
            Class.forName("com.mysql.cj.jdbc.Driver");
         
        conexion = DriverManager.getConnection(url,usuario,password);
        }catch (ClassNotFoundException | SQLException e) {
            Logger.getLogger(Conexion.class.getName()).log(Level.SEVERE, null, e);
    }//fin try catch
        return conexion;
    }// fin getConnection
}//fin clase Conexion

public class main{
public static void main(String[]args){
    var conexion = Conexion.getConnection();
    if (conexion != null){
        System.out.println("Conexion exitosa"+ conexion);
    }else
        System.out.println("Error al conectarse");
}//Fin main
}//Fin de clase
//Fin ejercicio Anabel Alesci


//Ejercicio Yesica López
package UTN.conexion;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion{
    public static Connection getConnection(){
        Connection conexion = null;
        //Variables para conectarnos a la base de datos
        var baseDatos = "estudiantes2022";
        var url = "jdbc:mysql://localhost:3306/"+baseDatos;
        var usuario = "root";
        var password = "admin";
        
        //cargamos la clase del driver mysql en memoria
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            conexion = DriverManager.getConnection(url,usuario,password);
        }catch (ClassNotFoundException | SQLException e) {
            System.out.println("Ocurrió un error en la conexión: "e.getMessage());
        }//fin try catch
        return conexion;
    }//fin método Connection
}

package UTN;
import UTN.conexion.Conexion;
public class Main{
    public static void main(String[] args){
        var conexion = Conexion.getConnection();
        if (conexion != null)
           System.out.println("Conexión exitosa: "+conexion);
        else
           System.out.println("Error al conectarse!");
    }//Fin main
}//Fin de clase

//Fin Ejercicio Yesica López

//ejercicio Victoria Zaccaro

package UTN.conexion;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {
    public static Connection getConnection(){
        Connection conexion= null;
        //variables para conectarnos a la base de datos
        var baseDatos="estudiantes2023";
        var url = "jdbc:mysql://localhost:3306/" + baseDatos;
        var usuario = "root";
        var password = "admin";

        //cargamos la clase del driver de mysql en memoria
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            conexion = DriverManager.getConnection(url, usuario, password);
        } catch (ClassNotFoundException | SQLException e){
            System.out.println("Ocurrió un error en la conexión: "+e.getMessage());
        }//fin catch
        return conexion;
    }//Fin método getConnection
}
package UTN;
import UTN.conexion.Conexion;
public class main {
    public static void main(String []args) {
        var conexion = Conexion.getConnection();
        if(conexion != null)
            System.out.println("Conexion exitosa "+conexion);
        else
            System.out.println("error al conectarse");

        }//fin main
}//fin clase
// Fin Ejercicio Victoria Zaccaro


//Ejercicio Gerardo Duckwitz
package UTN.conexion;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {
    public static Connection getConnection(){
        Connection conexion =  null;
        //Variables para conectarnos a la base de datos
        var baseDatos = "estudiantes2022";
        var url = "jdbc:mysql://localhost:3306/"+baseDatos;
        var usuario = "root";
        var password = "";

        //cargamos la clase del driver de mysql en memoria
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            conexion = DriverManager.getConnection(url, usuario, password);

        }catch (ClassNotFoundException | SQLException e){
            System.out.println("Ocurrio un error en la conexion");
        }
        return conexion;
        }//Fin metiodo Coneection
}

//Fin Gerardo Duckwitz
