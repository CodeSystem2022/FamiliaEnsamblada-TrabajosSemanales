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