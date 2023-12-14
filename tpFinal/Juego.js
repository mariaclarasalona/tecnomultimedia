/*TM1 2023
comision 3 prof. David Bedoian
TPFinal Etapa 1 
Maria Clara Saloña
85207/7
*/
class Juego {

  constructor() {
    this.enemigo =  new Enemigo();
    this.gregor =  new Gregor();
    this.perdiste =  new Perdiste();
    this.ganaste =  new Ganaste();
    this.inicio =  new Inicio();
    this.estado = 0;
    
    this.timer = 30;
  }
  timerReset(){
    this.timer = 30;
  }

  draw() {

    if ( this.estado == 0) { //inicio resetea valores

        this.gregor.reset();
        this.enemigo.reset();
        this.timerReset();
        this.inicio.dibujar();
        
    } else if ( this.estado == 1 ) { // juego
      
      this.enemigo.actualizar();
      this.gregor.actualizar();
      this.evaluarColision();
      fill(0);
      textSize(40);
      textAlign(CENTER);
      text(this.timer, width/2, height/2);
      if (frameCount % 60 == 0 && this.timer > 0) { 
        this.timer --;
      }if (this.timer == 0) { //gana si se acaba el tiempo
        this.estado =+2;
      }
      
      //evaluar si gana o pierde
    } else if ( this.estado == 2 ) {
      //gane...
      this.ganaste.dibujar();
      console.log("ganaste");
    } else if ( this.estado == 3 ) {
      //perdi...
      
      this.perdiste.dibujar();
      console.log("perdiste");
    }
  }
evaluarColision(){
    if ( this.enemigo.colision( this.gregor.getX() , this.gregor.getY() , this.gregor.getTam())){
     this.estado =+3;
     console.log("colision");
    }
  }
  mousePressed() {
    if ( this.estado == 3 ) { //vuelve al inicio
      this.estado =+ 0;

      }else if (this.estado == 0){
        this.estado =+ 1;
      }
  }

}
