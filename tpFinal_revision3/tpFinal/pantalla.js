class Pantalla{
  
  constructor(){
     
  }
  
  actualizar( fondo_ , texto_  )   { //boton_
  
    push();
    imageMode(CORNER);
    image(fondo_,0,0,width,height);
    
    //fondito oscuro debajo del texto:
    fill(0, 120);
    rectMode(CORNER);
    rect(0, height/3*2, width-2, height/3);
    //textos
    fill(255);
    textSize(25);
    textLeading(40);
    textAlign(CENTER,CENTER);
    text( texto_ , 0, height/1.8, width, height/3);
    
    pop();
    
  }
  
}
