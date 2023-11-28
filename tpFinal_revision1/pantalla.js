class Pantalla{
  
  constructor(){
     
  }
  
  actualizar( fondo_ , texto_  )   { //boton_
  
    push();
     imageMode(CORNER);
    image(fondo_,0,0,width,height);
    
    //fondito oscuro debajo del texto:
    fill(50);
    rect(0,0,width,height*0.3);
    
    //textos
    fill(100);
    textSize(24);
    textAlign(CENTER,CENTER);
    text( texto_ , 0,0,width,height*0.3);
    
    pop();
    
  }
  
}
