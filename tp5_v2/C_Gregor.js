/*TM1 2023
comision 3 prof. David Bedoian
TP5 MiniJuego con POO orientado a la Aventura Gráfica
Maria Clara Saloña
85207/7
enlace del video: 
*/
class Gregor {
  /*
propiedades
   x,y, tam, vel
   img
   ultimaTeclaPresionada
   */

  constructor() {
    this.x = width/2;
    this.y = height*0.75;
    this.tam = 60;
    this.vel = 0;
    this.img = loadImage("2023_TM1_tp5_gregor.png");
    this.ultimaTeclaPresionada = null;
  }
  //metodos
  draw() {
    this.mover();
    this.dibujar();
    this.desacelera();
  }

  //declaracion de mover:
  mover() {
    this.x+=this.vel;
  }
  dibujar() {
    push();
    translate(this.x, this.y);
    rotate(sin(frameCount*.08)*.2);

    fill(200, 200, 255);
    //rectMode(CENTER);
    //rect(0, 0, this.tam, this.tam);
    imageMode(CENTER);
    image(this.img, 0, 0);
    pop();
  }

  desacelera() {
    this.vel-=.001;
    if ( this.vel<0) {
      this.vel = 0;
    }
  }

  keyPressed() {
    //pendiente: acelerar
    if ( key != this.ultimaTeclaPresionada) {
      this.ultimaTeclaPresionada = key;
      this.vel+=.01;
      if ( this.vel>4 ) {
        this.vel = 4;
      }
    }
  }
}
