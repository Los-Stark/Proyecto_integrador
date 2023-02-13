package org.bedu.java.jse.sesion3.reto3;

public class Combustible {

    //                  Propiedades:
    private String nivelActual;
    private int litrosMaximos;
    private int litrosMinimos;
    private int restante;

    //                  Constructor:
    public Combustible(String NDL, int LMx, int LMn, int res){
        nivelActual = NDL;
        litrosMaximos = LMx;
        litrosMinimos = LMn;
        restante = res;
    }

    //              Metodos setters:
    public void setNivelActual(String NDL) { nivelActual = NDL; }
    public void setLitrosMaximos(int LMx) { litrosMaximos = LMx; }
    public void setLitrosMinimos(int LMn) { litrosMinimos = LMn; }
    public void setRestante(int res) { restante = res; }

    //              Metodos getter:
    public String getNivelActual() { return nivelActual; }
    public int getLitrosMaximos() { return litrosMaximos; }
    public int getLitrosMinimos() { return litrosMinimos; }
    public int getRestante() { return restante; }

    //                  Metodo:
    public void gasto(){
        restante--;
        System.out.println("\nQuedan "+ restante + " Litros de gasolina");
    }
}


