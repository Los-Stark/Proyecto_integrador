package org.bedu.java.jse.sesion3.reto3;

import java.util.Scanner;

public class ColocarCombustible {
    //                  Propiedades:
    private boolean llenar;

    //                  Constructor:
    public ColocarCombustible(boolean fill) { llenar = fill; }

    //              Metodo Setter:
    public void setLlenar(boolean fill) { llenar = fill; }

    //              Metodo Getter:
    public boolean getLlenar() { return llenar; }

    //                  Metodo:
    public void iniciar() {
        for (int j = 0; j < 1; ) {
            int entrada;
            System.out.println("Presiona 1 para llenar el tanque");
            Scanner scanner = new Scanner(System.in);
            entrada = scanner.nextInt();

            switch (entrada) {
                case 1:
                    System.out.println("Ahora el tanque tiene gasolina");
                    j = 1;
                    break;

                default:
                    System.out.println("Por favor ingresa un valor valido\n");
                    break;
            }
        }
    }
}