int [] pnum = new int[15]; //16 numero de pantalla para cambio de estado



void dibujaPantalla( PImage fondo, String texto   ) {
  push();
  imageMode(CORNER);
  image(fondo, 0, 0, width, height);
  fill(0, 120);
  rectMode(CORNER);
  rect(0, height/3*2, width, height/3);
  fill(255);
  textSize(40);
  textLeading(40);
  textAlign(CENTER, CENTER);
  text( texto, 0, height/3*2, width, height/3);
  pop();
}
//funcion con ciclo for para dibujado de pantallas
