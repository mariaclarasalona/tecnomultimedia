/*TM1 2023
comision 3 prof. David Bedoian
TPFinal Etapa 1 
Maria Clara Saloña
85207/7
*/
class Botones {
  
  constructor (){
    let x;
    let y;
    let ancho;
    let alto;
  }
  dibujar (x, y, ancho, alto, textos_){
    
    let fondo = color (200);
    let borde = color (100);
    let efectoHover = color (255,0,0);
    
    if(this.colision (x, y,ancho,alto)){
      fill(efectoHover);
    }else{
      fill(fondo);
    }
    
    push();
    stroke(borde);
    rectMode(CENTER);
    rect(x, y, ancho, alto);
    fill(0); 
    textAlign(CENTER, CENTER); 
    textSize(16); 
    text(textos_, x, y ); 
    pop();
    
  }
  
  colision (x_, y_,ancho_,alto_){
    if(mouseX>(x_-ancho_/2) && mouseX<(x_+ancho_/2) && mouseY>(y_-alto_/2) && mouseY<(y_+alto_/2)){
        console.log("colision");
        return true;
        
      } else {
        return false;
      }
  }
  
  
}
