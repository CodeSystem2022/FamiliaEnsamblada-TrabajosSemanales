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