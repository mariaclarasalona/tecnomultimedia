class Gregor {
  constructor() {
    this.x = width/2;
    this.y = height*0.75;
    this.tam = 60; ///variable para colision
    this.vel = 0;
    this.img = loadImage("2023_TM1_tp5_gregor.png");
  }
  //metodos
  actualizar() {
    this.mover();
    this.dibujar();
  }

  //movimiento con flechas
  mover() {
    this.x+=this.vel;
    this.y+=this.vel;
    if (keyPressed){
        if ( keyCode == UP_ARROW ) {
        this.y --;
      }if ( keyCode == DOWN_ARROW ) {
        this.y ++;
      }if ( keyCode == LEFT_ARROW ) {
        this.x --;
      }if ( keyCode == RIGHT_ARROW ) {
        this.x ++;
      }
    }
  }
  dibujar() {
    push();
    translate(this.x, this.y);
    rotate(sin(frameCount*.08)*.2);
    imageMode(CENTER);
    
    ///////// debug /////////
     rectMode(CENTER);
     rect(0,0,this.tam,this.tam);
     ///////// debug /////////
     
    image(this.img, 0, 0, this.tam, this.tam);
    pop();
  }
  
  reset(){
    this.x = width/2;
    this.y = height*0.75;
    this.tam = 60;
    this.vel = 0;
  }


  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }
  getTam() {
    return this.tam;
  }
}
