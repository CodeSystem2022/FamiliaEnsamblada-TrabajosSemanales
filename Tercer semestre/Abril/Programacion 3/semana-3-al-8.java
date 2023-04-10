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
