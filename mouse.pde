/*TM1 2023
comision 3 prof. David Bedoian
Recu TP3 Aventura Grafica
Maria Clara Saloña
85207/7
enlace del video: https://youtu.be/IDlTaCh592M
*/
void mousePressed() {
  if ( estado == 0 ) {
    if ( colisionConBotonRectangular(width/4*3, height/1.1, 120, 80) ) {
      estado ++;
    }


    if ( colisionConBotonRectangular(width/4, height/1.1, 120, 80) ) {
      println("creditos");
      estado = 15;
    }
  }if ( estado == 1 || estado == 2 || estado == 4 || estado == 6 ) {
    if ( colisionConBotonRectangular( width/2, height/1.1, 120, 80) ){
      estado ++;

    }
  }if ( estado == 3 ) {
    if ( colisionConBotonRectangular(width/4*3, height/1.1, 120, 80) ) {
      estado ++;
    }
    if ( colisionConBotonRectangular(width/4, height/1.1, 120, 80) ) { //final 1
      estado = 9;
    }
  }if ( estado == 5 ) {
    if ( colisionConBotonRectangular(width/4*3, height/1.1, 120, 80) ) {
      estado ++;
    }
    if ( colisionConBotonRectangular(width/4, height/1.1, 120, 80) ) { //final 2
      estado = 10;
    }
  }if ( estado == 7 ) { //3botones
    if ( colisionConBotonRectangular(width/4*3, height/1.1, 120, 80) ) {//final 3
      estado = 11;
    }
    if ( colisionConBotonRectangular( width/4*2, height/2, 120, 80) ){
      estado =8;
    }
    
    if ( colisionConBotonRectangular(width/4, height/1.1, 120, 80) ) { //final 1 remix
      estado = 9;
    }
  }if ( estado == 8 ) {
    if ( colisionConBotonRectangular( width/2, height/1.1, 120, 80) ){
      estado = 12;

    }
  }if ( estado == 12 ) {
    if ( colisionConBotonRectangular( width/4*2, height/2, 120, 80) ){
      estado = 13;

    }
  }if ( estado == 9 || estado == 10 || estado == 11 || estado == 13) {
    if ( colisionConBotonRectangular( width/2, height/1.1, 120, 80) ){
      estado = 14;

    }
  }if ( estado == 14 ) {
    if ( colisionConBotonRectangular(width/4*3, height/1.1, 120, 80) ) {
      estado = 0;
    }
    if ( colisionConBotonRectangular(width/4, height/1.1, 120, 80) ) { 
      estado = 15;
    }
  }if ( estado == 15 ) {
    if ( colisionConBotonRectangular( width/2, height/1.1, 120, 80) ){
      estado = 0;

    }
  }
}
