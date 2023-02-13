package org.bedu.java.jse.sesion3.reto3;

import java.util.Scanner;

public class Vehiculo {
    //                  Objetos:
    Combustible gasolina = new Combustible(
            "Completo",
            21,
            1,
            21);
    Llantas llanta = new Llantas(
            "Colocada",
            32,
            "Buen estado",
            145,
            16);

    //                  Propiedades:
    private String color;
    private String modelo;
    private int puertas;
    private int kmr;
    private int k;

    //                  Constructor:
    public Vehiculo(String col, String mod, int puer, int kmrr){
        color = col;
        modelo = mod;
        puertas = puer;
        kmr = kmrr;
    }

    //              Metodos Setters:
    public void setColor(String col) { color = col; }
    public void setModelo(String mod) { modelo = mod; }
    public void setPuertas(int puer) { puertas = puer; }

    //              Metodos Getter:
    public String getColor(){ return color; }
    public String getModelo(){ return modelo; }
    public int getPuertas(){ return puertas; }

    //                  Metodos:
    void arrancar(){
        System.out.println("Arrancando..."+ "\nEl Vehiculo esta encendido");
    }

    void acelerar(){
        System.out.println("Brrrrrrrr");
    }

    public void frenar(){
        System.out.println("El auto frenó y se detuvo");
    }

    public void conducir() {
        System.out.println("Cuantos kilometros quieres recorrer?");
        Scanner scanner = new Scanner(System.in);
                k = scanner.nextInt();
        for (int u = 0; u<=k; u++){
        if (gasolina.getRestante() > 0) {
            System.out.println(kmr + " Km recorridos");
            for (int i=0; i<1; i++){
                llanta.Rodar();
                gasolina.gasto();
                kmr++;}
            } else System.out.println("No hay combustible");}
        }
    }

