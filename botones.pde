/*TM1 2023
comision 3 prof. David Bedoian
Recu TP3 Aventura Grafica
Maria Clara Saloña
85207/7
enlace del video: https://youtu.be/IDlTaCh592M
*/

void dibujaBotonRectangular(float x, float y, float ancho, float alto, String texto) { //funcion de botones
  color fondo = color(200);
  color borde = color(100);
  color efectoOver = color(255, 0, 0);


  if ( colisionConBotonRectangular(x, y, ancho, alto) ) {
    fill(efectoOver);
  } else {
    fill(fondo);
  }
  stroke(borde);
  rectMode(CENTER);
  rect(x, y, ancho, alto);
  fill(0); 
  textAlign(CENTER, CENTER); 
  textSize(16); 
  text(texto, x, y ); 
}


boolean colisionConBotonRectangular(float x, float y, float ancho, float alto ) {
  //booleano de colision con boton
  boolean colisiona;
  if ( mouseX>x-ancho/2 && mouseX<x+ancho/2 &&
    mouseY>y-alto/2 && mouseY<y+alto/2 ) {
    colisiona = true;
  } else {
    colisiona = false;
  }
  return colisiona;
}
