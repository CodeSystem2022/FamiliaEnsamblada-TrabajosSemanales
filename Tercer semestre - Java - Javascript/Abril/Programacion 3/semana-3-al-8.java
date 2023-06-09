// Ejercicio Gerardo Duckwitz

Monitor monitorAcer = new Monitor("Acer", 24);
Teclado tecladoAcer = new Teclado("USB", "Acer");
Raton ratonAcer = new Raton("USB", "Acer");
Computadora computadoraAcer = new Computadora("Computadora Acer", monitorAcer, tecladoAcer, ratonAcer);

Monitor monitorAlienware = new Monitor("Alienware", 34);
Teclado tecladoAlienware = new Teclado("USB", "Alienware");
Raton ratonAlienware = new Raton("USB", "Alienware");
Computadora computadoraAlienware = new Computadora("Computadora Alienware", monitorAlienware, tecladoAlienware, ratonAlienware);

Monitor monitorLG = new Monitor("LG", 24);
Teclado tecladoRazer = new Teclado("USB", "Razer");
Raton ratonLogitech = new Raton("Bluetooth", "Logitech");
Computadora computadoraMix = new Computadora("Computadora mix", monitorLG, tecladoRazer, ratonLogitech);

orden1.agregarComputadora(computadoraAcer);
orden1.agregarComputadora(computadoraAlienware);
orden1.agregarComputadora(computadoraMix);

//Fin ejercicio Gerardo Duckwitz

//Yesica López

Monitor monitorLenovo = new Monitor("Lenovo", 23);
        Teclado tecladoLenovo = new Teclado("USB", "Lenovo");
        Raton ratonLenovo = new Raton("USB", "Lenovo");
        Computadora computadoraLenovo = new Computadora("Computadora Lenovo", monitorLenovo, tecladoLenovo, ratonLenovo);

        Monitor monitorDell = new Monitor("Dell", 27);
        Teclado tecladoDell = new Teclado("USB", "Dell");
        Raton ratonDell = new Raton("USB", "Dell");
        Computadora computadoraDell = new Computadora("Computadora Dell", monitorDell, tecladoDell, ratonDell);

        Monitor monitorApple = new Monitor("Apple", 24);
        Teclado tecladoApple = new Teclado("Bluetooth", "Apple");
        Raton ratonApple = new Raton("Bluetooth", "Apple");
        Computadora computadoraApple = new Computadora("Computadora Apple", monitorApple, tecladoApple, ratonApple);

//fin Yesica López

// Ejercicio Jose Remaggi

Monitor monitorA = new Monitor("A", 24);
Teclado tecladoA = new Teclado("USB", "A");
Raton ratonA = new Raton("USB", "A");
Computadora computadoraA = new Computadora("Computadora A", monitorA, tecladoA, ratonA);

Monitor monitorB = new Monitor("B", 24);
Teclado tecladoB = new Teclado("USB", "B");
Raton ratonB = new Raton("USB", "B");
Computadora computadoraB = new Computadora("Computadora B", monitorB, tecladoB, ratonB);

Monitor monitorC = new Monitor("C", 24);
Teclado tecladoC = new Teclado("USB", "C");
Raton ratonC = new Raton("USB", "C");
Computadora computadoraC = new Computadora("Computadora C", monitorC, tecladoC, ratonC);

orden1.agregarComputadora(computadoraA);
orden1.agregarComputadora(computadoraB);
orden1.agregarComputadora(computadoraC);

//Fin ejercicio Jose Remaggi

// Ejercicio Anabel Alesci

Monitor monitorMacbook = new Monitor("Apple", 13);
Teclado tecladoMacbook = new Teclado("USB-C", "Apple");
Raton ratonMacbook = new Raton("USB-C", "Apple");
Computadora computadoraMacbook = new Computadora("Computadora Apple", monitorMacbook, tecladoMacbook, ratonMacbook);

Monitor monitorDell = new Monitor("Dell", 14);
Teclado tecladoDell = new Teclado("USB", "Dell");
Raton ratonDell = new Raton("USB", "Dell");
Computadora computadoraDell = new Computadora("Computadora Dell", monitorDell, tecladoDell, ratonDell);

Monitor monitorAorus = new Monitor("Aorus", 15.6);
Teclado tecladoAorus = new Teclado("USB", "Aorus");
Raton ratonAorus = new Raton("Bluetooth", "Aorus");
Computadora computadoraAorus = new Computadora("Computadora Aorus", monitorAorus, tecladoAorus, ratonAorus);

orden1.agregarComputadora(computadoraApple);
orden1.agregarComputadora(computadoraDell);
orden1.agregarComputadora(computadoraAorus);

//Fin ejercicio Anabel Alesci

//Ejercicio Matías Villa

 //computadora1 Lenovo
 Monitor monitorLenovo = new Monitor ("Lenovo", 45);
 Teclado tecladoLenovo = new Teclado ("Lenovo","Mecanico");        
 Raton ratonLenovo = new Raton("Lenovo", "Bluetooth");        
 Computadora computadoraLenovo = new Computadora("Computadora Lenovo", monitorLenovo, tecladoLenovo, ratonLenovo);
        
  //computadora2 Acer
  Monitor monitorAcer = new Monitor("Acer", 42);
  Teclado tecladoAcer = new Teclado("Acer","Mecanico");
  Raton ratonAcer = new Raton("Acer","Bluetooth");
  Computadora computadoraAcer= new Computadora("Acer", monitorAcer, tecladoAcer, ratonAcer);
        
  //computadora3 Samsung
  Monitor monitorSamsung = new Monitor ("Samsung", 72);
  Teclado tecladoSamsung = new Teclado("Samsung", "Mecanico");
  Raton ratonSamsung = new Raton("Samsung","Inhalambrico");
  Computadora computadoraSamsung = new Computadora("Samsung", monitorSamsung, tecladoSamsung, ratonSamsung);

  //Orden
  orden1.agregarComputadora(computadoraLenovo);
  orden1.agregarComputadora(computadoraAcer);
  orden1.agregarComputadora(computadoraSamsung);
        
//FIN MATÍAS VILLA.

// Jesús Mercado
Monitor monitorAsus = new Monitor("Asus", 32);
        Teclado tecladoAsus = new Teclado("USB", "Asus");
        Raton ratonAsus = new Raton("USB", "Asus");
        Computadora computadoraAsus = new Computadora("Computadora Asus", monitorAsus, tecladoAsus, ratonAsus);

        Monitor monitorMSI = new Monitor("MSI", 27);
        Teclado tecladoMSI = new Teclado("USB", "MSI");
        Raton ratonMSI = new Raton("USB", "MSI");
        Computadora computadoraMSI = new Computadora("Computadora MSI", monitorMSI, tecladoMSI, ratonMSI);

        Monitor monitorMix = new Monitor("Acer", 27);

        Computadora computadoraMix = new Computadora("Computadora Mix", monitorMix, tecladoAsus, ratonMSI);

// Fin Jesús Mercado


//Victoria Zaccaro

          Monitor monitorSamsung = new Monitor("Samsung", 27);
    Teclado tecladoCorsair = new Teclado("USB", "Corsair");
    Raton ratonSteelSeries = new Raton("USB", "SteelSeries");
    Computadora computadoraSamsung = new Computadora("Computadora Samsung", monitorSamsung, tecladoCorsair, ratonSteelSeries);
        
        
   Monitor monitorAcer = new Monitor("Acer", 24);
Teclado tecladoLogitech = new Teclado("USB", "Logitech");
Raton ratonRazer = new Raton("USB", "Razer");
Computadora computadoraAcer = new Computadora("Computadora Acer ", monitorAcer, tecladoLogitech, ratonRazer);

Monitor monitorAsus = new Monitor("Asus", 32);
Raton ratonLogitech = new Raton("USB", "Logitech");
Computadora computadoraAsus = new Computadora("Computadora Asus ", monitorAsus, tecladoCorsair, ratonLogitech);


//Fin Victoria Zaccaro
