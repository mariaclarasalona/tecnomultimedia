

/*TM1 2023
comision 3 prof. David Bedoian
TP5 MiniJuego con POO orientado a la Aventura Gráfica
Maria Clara Saloña
85207/7
enlace del video: 
*/
class Enemigo {

  constructor() {
    this.x = random( 50, width-50 );
    this.y = 80;
    this.tam = 60;
    this.vel = 1;
    
    this.dir = random( TWO_PI ); //variable direccion de movimiento
    this.despX = cos(this.dir)*this.vel;
    this.despY = sin(this.dir)*this.vel;
    
    this.img = loadImage("2023_TM1_tp5_enemigo.png");
  }
  //metodos
  draw() {
    this.mover();
    this.dibujar();
  }
  
  //declaracion de mover:
  mover(){

    this.x+=this.despX;
    this.y+=this.despY;
    
    if ( this.x+this.tam/2 > width || this.x-this.tam/2 < 0  ){
      this.despX = -this.despX;
      this.vel ++;
    }
    if ( this.y+this.tam/2 > height || this.y-this.tam/2 < 0 ){
      this.despY = -this.despY;
      this.vel ++;
    }
    //nueva direccion en colision
    this.dir = atan2(this.despY,this.despX);
    print(this.vel);


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
