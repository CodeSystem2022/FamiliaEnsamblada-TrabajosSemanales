//Ejercicio Yesica López
package accesodatos;
public interface IAccesoDatos {
    int MAX_REGISTRO = 10;
    
    //Método insertar es abstracto y sin cuerpo
    void insertar();
    
    void listar();
    
    void actualizar();
    
    void eliminar();
}

package accesodatos;
public class ImplementacionMySql implements IAccesoDatos{

    @Override
    public void insertar() {
        System.out.println("Insertar desde MySql");
    }

    @Override
    public void listar() {
        System.out.println("Listar desde MySql");
    }

    @Override
    public void actualizar() {
        System.out.println("Actualizar desde MySql");
    }

    @Override
    public void eliminar() {
        System.out.println("Eliminar desde MySql");
    }
}
//Fin Ejercicio Yesica López

//Ejercicio Anabel Alesci
package accesodatos;


public interface IAccesoDatos {
    int MAX_REGISTRO = 10;
    
    //Metodo insertar es abstracto y sin cuerpo
    void insertar();
    
    void listar();
    
    void actualizar();
    
    void eliminar();
    
}

package accesodatos;


public class ImplementacionMySql implements IAccesoDatos{

    @Override
    public void insertar() {
        System.out.println("Insertar desde MySql");
    }

    @Override
    public void listar() {
        System.out.println("Listar desde MySql"); 
    }

    @Override
    public void actualizar() {
        System.out.println("Actualizar desde MySql");
    }

    @Override
    public void eliminar() {
        System.out.println("Eliminar desde MySql");
    }
    
package accesodatos;


public class ImplementacionOracle implements IAccesoDatos{

    @Override
    public void insertar() {
        System.out.println("Insertar desde Oracle");
    }

    @Override
    public void listar() {
        System.out.println("Listar desde Oracle");
    }

    @Override
    public void actualizar() {
        System.out.println("Actualizar desde Oracle");
    }

    @Override
    public void eliminar() {
        System.out.println("Eliminar desde Oracle");
    }
    
}
//Fin Ejercicio Anabel Alesci
//Ejercicio Jose Remaggi
import accesodatos.*;
public class TestInterface{
    public static void main(String[] args){
        IAccesoDatos datos = new ImplementacionMySql();
        //datos.listar();
        imprimir(datos);
        datos = new ImplementacionOracle();
        //datos.listar();
        imprimir(datos);
    }

    public static void imprimir(IAccesoDatos datos){
        datos.listar();
    }
}
//Fin Ejercicio Jose Remaggi