/*TM1 2023
comision 3 prof. David Bedoian
TP4Rec Introducción a P5.js
Maria Clara Saloña
85207/7
enlace del video: https://youtu.be/0_XQMyDHY9Y
*/
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
