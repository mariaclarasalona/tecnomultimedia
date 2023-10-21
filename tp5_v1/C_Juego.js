/*TM1 2023
comision 3 prof. David Bedoian
TP5 MiniJuego con POO orientado a la Aventura Gráfica
Maria Clara Saloña
85207/7
enlace del video: 
*/
class Juego {

  constructor() {
    this.enemigo =  new Enemigo();
    this.gregor =  new Gregor();
    this.estado = 1;
    this.espera = millis()+5*1000;
    this.img = loadImage("2023_TM1_tp5_fondo.png");
  }

  draw() {

    if ( this.estado == 0) {
    } else if ( this.estado == 1 ) {
      
      background(255);
      image(this.img, 0, 0);
      if ( millis() > this.espera ) {
        this.enemigo.draw();
        this.gregor.draw();
      } else {
        push();
        fill(0);
        textAlign(CENTER, CENTER);
        text("preparados!", width/2, height/2);
        let falta = this.espera-millis();
        text(round(falta/1000), width/2, height/2+100);
        pop();
      }
      //evaluar si gana o pierde
    } else if ( this.estado == 2 ) {
      //gane...
    } else if ( this.estado == 3 ) {
      //perdi...
    }
  }

  keyPressed() {
    this.gregor.keyPressed();
  }
  mousePressed() {
    //definir que hace el mousePressed dentro del juego...
  }
}
