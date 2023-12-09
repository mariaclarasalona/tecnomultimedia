/*TM1 2023
comision 3 prof. David Bedoian
TPFinal Etapa 1 
Maria Clara Saloña
85207/7
*/
class Ganaste{
  dibujar() {
    push();
    
    translate(width/2,height/2);
    
    rectMode(CENTER);
    textAlign(CENTER);
    textSize(20);
    fill(0,0,0,50);
    rect(0,0,400,300);
    fill(255);
    text("Click para continuar",0, 100);
    textSize(40);
    fill(0,255,0);
    rotate(sin(frameCount*.08)*.2);
    text("GANASTE!",0, 0);
    
    pop();
  }
}
