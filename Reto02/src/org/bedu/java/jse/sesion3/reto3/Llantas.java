package org.bedu.java.jse.sesion3.reto3;

public class Llantas {

    //                  Propiedades:
    private String posicion;
    private int psi;
    private String status;
    private int x;
    private int y;

    //                  Constructor:
    public Llantas(String pos, int pres, String est, int tamx, int tamy){
        posicion = pos;
        psi = pres;
        status = est;
        x = tamx;
        y = tamy;
    }

    //                  Metodos setters:
    public void setPosicion(String pos){
        posicion = pos;
    }
    public void setPsi(int pres){
        psi = pres;
    }
    public void setStatus(String est){
        status = est;
    }
    public void setX(int tamx){
        x = tamx;
    }
    public void setY(int tamy){
        y = tamy;
    }

    //                     Metodos getter:
    public String getPosicion(){
        return posicion;
    }
    public int getPsi(){
        return psi;
    }
    public String getStatus(){
        return status;
    }
    public int getX(){
        return x;
    }
    public int getY() { return y; }

    //                  Metodo:
    public void Rodar (){
        System.out.println("Las llantas giran");}
}
