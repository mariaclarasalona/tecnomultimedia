

/*TM1 2023
comision 3 prof. David Bedoian
TP5 MiniJuego con POO orientado a la Aventura Gráfica
Maria Clara Saloña
85207/7
enlace del video: 
*/
class Enemigo {
  /*
propiedades
   x,y, tam, vel
   img
   
   */
   
    

  constructor() {
    this.x = random( r_enemigo, width-r_enemigo );
    this.y = -r_enemigo-random(50, 100);
    this.tam = 60;
    this.vel = .8;
    this.img = loadImage("2023_TM1_tp5_enemigo.png");
  }
  //metodos
  draw() {
    this.mover();
    this.dibujar();
  }
  
  //declaracion de mover:
  mover(){
    this.x+=this.vel;
    this.y+=this.vel;
  }
  dibujar(){
   push();
     translate(this.x,this.y);
     rotate(sin(frameCount*.1)*.2);
     fill(200,200,255);
     //rectMode(CENTER);
     //rect(0,0,this.tam,this.tam);
     imageMode(CENTER);
     image(this.img, 0, 0);
   pop();
    
  }
  
  getPosicionX(){  //retorna posicion x
   return this.x; 
  }
  getPosicionY(){ //retorna posicion y
   return this.y; 
  }
}
