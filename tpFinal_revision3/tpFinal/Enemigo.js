class Enemigo {

  constructor() {
    this.x = random( 50, width-50 );
    this.y = 80;
    this.tam = 60; //variable para colision
    this.vel = 1;
    
    this.dir = random( TWO_PI ); //variable direccion de movimiento
    this.despX = cos(this.dir)*this.vel;
    this.despY = sin(this.dir)*this.vel;
    
    this.img = loadImage("enemigo.png");
  }
  //metodos
  actualizar() {
    this.mover();
    this.dibujar();
    this.colision();
  }
  
  //declaracion de mover:
  mover(){

    this.x+=this.despX;
    this.y+=this.despY;
    
    if ( this.x+this.tam/2 > width || this.x-this.tam/2 < 0  ){
      this.despX = -this.despX;
      this.vel +2;
    }
    if ( this.y+this.tam/2 > height || this.y-this.tam/2 < 0 ){
      this.despY = -this.despY;
      this.vel +2;
    }
    //nueva direccion en colision
    this.dir = atan2(this.despY,this.despX);

  }
   dibujar(){
   push();
     translate(this.x,this.y);
     rotate(sin(frameCount*.1)*.2);
     fill(200,200,255);
     imageMode(CENTER);
     
     ///////// debug /////////
     rectMode(CENTER);
     rect(0,0,this.tam,this.tam);
     ///////// debug /////////
     
     image(this.img, 0, 0, this.tam, this.tam);
   pop();
    
  }
  
  colision( x_, y_, tam_ ) {
    if ( dist( this.x, this.y, x_, y_) < this.tam+tam_ ) {
      //hay colision:
      return true;
      
    } else {
      return false;
    }
  }
  
  reset(){
    this.x = random( 50, width-50 );
    this.y = 80;
    this.tam = 60;
    this.vel = 1;
    
    this.dir = random( TWO_PI );
    this.despX = cos(this.dir)*this.vel;
    this.despY = sin(this.dir)*this.vel;
  }
  

}
