/*TM1 2023
comision 3 prof. David Bedoian
TP3 Aventura Grafica
Maria Clara Saloña
85207/7
*/

PImage [] fondos;


float estado; //valor quie habilita el cambio y dbujado de pantalla

void setup (){
  size(600,600);
  
  fondos = new PImage[15];
  
  for ( int i=0; i<cantImagenes; i++ ) {
    fondos[i] = loadImage("fondos/fondo_"+nf(i, 2)+".png");

  
  estado = 0;

}

void draw (){
}
