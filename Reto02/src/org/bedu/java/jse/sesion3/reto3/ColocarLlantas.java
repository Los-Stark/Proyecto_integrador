package org.bedu.java.jse.sesion3.reto3;

import java.util.Scanner;

public class ColocarLlantas {

    //                  Propiedades:
    private boolean colocar;

    //                  Constructor:
    public ColocarLlantas(boolean set){
        colocar = set;
    }

    //              Metodo Setter:
    public void setColocar(boolean set) { colocar = set; }

    //              Metodo Getter:
    public boolean getColocar() { return colocar; }

    //                  Metodo:
    public void inicio() {

        for (int j = 0; j < 1; ) {
            int entrada;
            System.out.println("Presiona 1 para colocar las llantas");
            Scanner scanner = new Scanner(System.in);
            entrada = scanner.nextInt();

            switch (entrada){
                case 1:
                    System.out.println("Las llantas se colocaron exitosamente");
                    j = 1;
                    break;

                default:
                    System.out.println("Por favor ingresa un valor valido\n");
                    break;
            }
        }
    }
}
