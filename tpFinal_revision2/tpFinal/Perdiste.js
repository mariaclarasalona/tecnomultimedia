class Perdiste{
  constructor(){
  }
  dibujar() {
    push();
    
    translate(width/2,height/2);
    
    rectMode(CENTER);
    textAlign(CENTER);
    textSize(20);
    fill(0,0,0,50);
    rect(0,0,400,300);
    fill(255);
    text("Click para reintentarlo",0, 100);
    textSize(40);
    rotate(sin(frameCount*.08)*.2);
    text("PERDISTE!",0, 0);
    
    pop();
  }
}
