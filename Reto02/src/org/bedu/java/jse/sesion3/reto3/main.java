package org.bedu.java.jse.sesion3.reto3;

import java.util.Scanner;

public class main {
    public static void main(String[] args) {

        //                  Objetos

        Llantas Llanta1 = new Llantas(
                "Piloto",
                0,
                "Buen Estado",
                145,
                16);

        Llantas Llanta2 = new Llantas(
                "Copiloto",
                0,
                "Buen Estado",
                145,
                16);

        Llantas Llanta3 = new Llantas(
                "Pasagero Izq",
                0,
                "Poco Desgastada",
                145,
                16);

        Llantas Llanta4 = new Llantas(
                "Pasajero Der",
                0,
                "Poco Desgastada",
                145,
                16);
        Combustible tCombustible = new Combustible("Vacio",
                21,
                1,
                0);
        Vehiculo Tacoma = new Vehiculo("Gris",
                "Toyota Tacoma",
                4,
                0);
        ColocarLlantas cl = new ColocarLlantas(false);
        ColocarCombustible cc = new ColocarCombustible(false);
        InflarLLantas in = new InflarLLantas(false);
        boolean s = false;
        int w = 0;
        int e = 0;

        short menuI;
        String menu[] = {"1. Colocar llantas" + "\n2. Inflar llantas" + "\n3. Llenar gasolina" + "\n4. Subirse" + "\n5. Arrancar y conducir"};

        for (w = 0; w < 1; ){
            if (e <1){
                System.out.println("Encontraste una camioneta abandonada en una bodega que compraste \n Esta se encuentra sin llantas y sin gasolina, selecciona que vas a hacer: ");

            for (int i= 0; i<menu.length; i++){
                System.out.println(menu[i]);
                e = 1;}
            }
            else {System.out.println("Ahora que harás?\n");
            for (int i= 0; i<menu.length; i++){
                System.out.println(menu[i]);}
            }
        Scanner entmnu = new Scanner(System.in);
        menuI = entmnu.nextShort();

        switch (menuI) {
            case 1:
                if (cl.getColocar() == false && in.getInflar() == true) {
                    cl.inicio();
                    cl.setColocar(true);
                    System.out.println("Las llantas fueron colocadas en el Vehiculo");
                } else if (cl.getColocar() == false && in.getInflar() == false) {
                    System.out.println("Antes de colocar las llantas debes inflarlas");
                } else System.out.println("Las llantas ya estan colocadas");
                break;

            case 2:
                if (in.getInflar() == false) {
                    in.comienza();
                    in.setInflar(true);
                    Llanta1.setPsi(32);
                    Llanta2.setPsi(32);
                    Llanta3.setPsi(35);
                    Llanta4.setPsi(35);
                } else System.out.println("Las llantas ya se encuentran infladas");
                break;

            case 3:
                if (cc.getLlenar() == false) {
                    cc.iniciar();
                    cc.setLlenar(true);
                    tCombustible.setNivelActual("Completo");
                    tCombustible.setRestante(20);
                } else System.out.println("El combustible ya esta lleno");
                break;

            case 4:

                if (cc.getLlenar() == true && cl.getColocar() == true && in.getInflar() == true && s == false) {
                    System.out.println("Subiendo al vehiculo");
                    s = true;
                } else if (cc.getLlenar() == true && cl.getColocar() == true && in.getInflar() == true && s == true) {
                    System.out.println("Ya estas arriba del vehiculo");
                } else System.out.println("Falta algo por hacer");
                break;

            case 5:
                if (cc.getLlenar() == true && cl.getColocar() == true && in.getInflar() == true && s == true) {
                    System.out.println("Presion de llantas delanteras: " + Llanta1.getPsi() +
                            "\nNivel de Gasolina: " + tCombustible.getNivelActual());
                    Tacoma.arrancar();
                    Tacoma.acelerar();
                    Tacoma.conducir();
                    Tacoma.frenar();
                    w = 1;
                } else System.out.println("Falta algo por hacer");
                break;

            default:
                System.out.println("Entrada No Valida");
            }
        }

    }
}
