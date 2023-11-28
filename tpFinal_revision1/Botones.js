class Botones {
  
  constructor (){
    this.x = 0;
    this.y = 0;
    this.ancho = 120;
    this.alto = 80;
    this.textos = [];
    
    this.textos = [
      "Iniciar",
      "Continuar",
      "Ventana",
      "Puerta",
      "Puerta al exterior",
      "Habitación",
      "No te escondes",
      "Abajo de la cama",
      "No te vuelven a ver",
      "Mueres",
      "Vives escondido el resto de tu vida",
      "Volver a empezar",
      "Créditos",
    ];
    
  }
  colision (x_, y_,ancho_,alto_){
    if(mouseX>(x_-ancho_/2) && mouseX<(x_+ancho_/2) && mouseY>(y_-alto_/2) && mouseY<(y_+alto_/2)){
        return true;
      } else {
        return false;
      }
  }
  
  
}
