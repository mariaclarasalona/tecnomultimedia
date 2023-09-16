function jugando(){
  background( 100, 100 );
  image( imagenBG , 400, 400, 800, 800); //fondo
  rect(0,0, map(millis()-timer,0,15000,width,0) ,15); //barrita timer

  // calculo los movimiento
  if ( keyIsPressed ) {  //esta variable tipo booleana devuelve tru cuando presiono el teclado
    if ( keyCode == UP_ARROW ) {
      y -= p;
    } else if ( keyCode == DOWN_ARROW ) {
      y += p;
    } else if ( keyCode == LEFT_ARROW ) {
      x -= p;
    } else if ( keyCode == RIGHT_ARROW ) {
      x += p;
    }
  }
  
  // calculo el espacio toroidal
  if( x <= 0 ){  //borde izquierdo
    x = width;
  }else if( x >= width ){  //borde derecho
     x = 0;
  }
  if( y <= 0 ){  //borde superior
    y = height;
  }else if( y >= height ){  //borde inferior
     y = 0;
  }
  
  // calculo de colisiones -----------------------------------------------------
  if( dist( x, y, xe, ye ) < 50 ){  // colision con enemigo
  
    fill( 100, 0, 0 );
    pantallaPerdiste();

    noLoop();  
  }else if( dist( x, y, xo, yo ) < 50 ){  //colision con objetivo
  
    fill( 100, 0, 0 );
    pantallaGanaste();

    noLoop();  
  }

  // dibujo a mi personaje
  image( imagenPJ , x, y, d, d);  
  // dibujo a mis enemigos
  

  

}
