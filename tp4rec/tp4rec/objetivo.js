//// objetivo mosquitas
function inicializarObjetivo (){
  xO = width/2;
  yO = 60;
  rO = 40;
   
}

function dibujarObjetivo() {
  //
  push();
  translate(xO, yO);
  image( imagenO , 0, 0, rO*2, rO*2); 
  pop();
}


function colisionObjetivo(){
  if ( dist( xP,yP,xO,yO)<rP+rO ){

      estado = 2;
    }
}
