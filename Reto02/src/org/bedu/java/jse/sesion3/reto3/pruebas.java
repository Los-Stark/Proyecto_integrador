package org.bedu.java.jse.sesion3.reto3;

import java.util.Scanner;

public class pruebas {
    public static void main(String[] args) {
        Combustible tCombustible = new Combustible("Vacio",
                21,
                1,
                0);
        /*
        short valor = 2;
        short[] valoresn = {5,4,3,2,1};
        String[] valores = {"alpha","Beta","Gama"};
            for (int i= 0; i < valores.length; i++){
            System.out.println("Valor: "+ valores[i]);
        }
        short[] numeros = {1,2,3,4,5};
            for (int j=0; j< numeros.length; j++){
            System.out.println("n" + numeros[j]);
        }
        for (short cortos : numeros){
            System.out.println(cortos);
        }
        short x = 1;
        do {
            System.out.println(x);
        } while (x++ < 10);*/
        /*
        Scanner entmnu = new Scanner(System.in);
        System.out.println("Escribe un numero: ");
        int numero;
        numero = entmnu.nextInt();
        System.out.println("Escriba otro numero");
        int numero2;
        numero2 = entmnu.nextInt();
        System.out.println("La suma de los dos numeros es. " + (numero + numero2));*/

        //public class LlantaPiloto {}

        ///////////////////////////////////////
        //public class Llantas
        //  public static void main (String[] args){

        //Llantas llantap = new Llantas ("piloto", "30 psi", "Buen Estado", "30'", "135 mm")

        /*for (int j = 0; j < 1; ) {
            int entrada;
            System.out.println( "Antes de poner las llantas debes de Inflarlas" +
                                "\nPresiona 1 para inflar las llantas");
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
            }*/
        short kmpr;
        int kmrr = 0;
        tCombustible.setRestante(20);
        System.out.println("Cuantos km quieres recorrer?");
        Scanner km = new Scanner(System.in);
        kmpr = km.nextShort();

        do {
            System.out.println(kmrr + "km recorridos");
            kmrr++;
            tCombustible.gasto();
            if (tCombustible.getRestante() == 0){break;}
            }
        while (kmpr >= kmrr );


        }
           // else System.out.println("Se termino el combustible" + kmr + " recorridos");
}



