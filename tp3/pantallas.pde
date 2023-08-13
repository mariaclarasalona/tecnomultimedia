/*TM1 2023
comision 3 prof. David Bedoian
RecuTP3 Aventura Grafica
Maria Clara Saloña
85207/7
enlace del video: https://youtu.be/IDlTaCh592M
*/


void dibujaPantalla( PImage fondo, String texto   ) {
  push();
  imageMode(CORNER);
  image(fondo, 0, 0, width, height);
  fill(0, 120);
  rectMode(CORNER);
  rect(0, height/3*2, width-2, height/3);
  fill(255);
  textSize(25);
  textLeading(40);
  textAlign(CENTER, CENTER);
  text( texto, 0, height/1.8, width, height/3);
  pop();
}
