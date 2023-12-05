class Botones {
  
  constructor (){
    //this.x = 0;
    //this.y = 0;
    let x;
    let y;
    //this.ancho = 120;
    //this.alto = 80;
    let ancho;
    let alto;
    this.textos = [13];
    
      this.textos[0] = "Iniciar";
      this.textos[1] ="Continuar";
      this.textos[2] = "Ventana";
      this.textos[3] = "Puerta";
      this.textos[4] = "Puerta al exterior";
      this.textos[5] = "Habitación";
      this.textos[6] = "No te escondes";
      this.textos[7] = "Abajo de la cama";
      this.textos[8] = "No te vuelven a ver";
      this.textos[9] = "Mueres";
      this.textos[10] = "Vives escondido el resto de tu vida";
      this.textos[11] = "Volver a empezar";
      this.textos[12] = "Créditos";
    
  }
  dibujar (x, y, ancho, alto, textos){
    
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
    text(this.texto, x, y ); 
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
