package org.bedu.java.jse.sesion3.reto3;

import java.util.Scanner;

public class InflarLLantas {
    //                  Propiedades:
    private boolean inflar;

    //                  Constructor:
    public InflarLLantas(boolean inf) {inflar = inf;}

    //              Metodo Setter:
    public void setInflar(boolean inf) {inflar = inf;}

    //              Metodo Getter:
    public boolean getInflar() {return inflar;}

    //                  Metodo:

    public void comienza(){

        for (int j = 0; j < 1; ) {
            int entrada;
            System.out.println("Presiona 1 para inflar las llantas");
            Scanner scanner = new Scanner(System.in);
            entrada = scanner.nextInt();

            switch (entrada){
                case 1:
                    System.out.println("Las llantas se inflaron exitosamente");
                    j = 1;
                    break;

                default:
                    System.out.println("Por favor ingresa un valor valido\n");
                    break;
            }
        }
    }
}
