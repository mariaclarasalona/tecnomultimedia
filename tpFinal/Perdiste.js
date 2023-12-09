/*TM1 2023
comision 3 prof. David Bedoian
TPFinal Etapa 1 
Maria Clara Saloña
85207/7
*/
class Perdiste{
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
    fill(255,0,0);
    text("PERDISTE!",0, 0);
    
    pop();
  }
}
