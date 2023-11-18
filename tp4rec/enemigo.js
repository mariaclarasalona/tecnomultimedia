/*TM1 2023
comision 3 prof. David Bedoian
TP4Rec Introducción a P5.js
Maria Clara Saloña
85207/7
enlace del video: https://youtu.be/0_XQMyDHY9Y
*/
function inicializarEnemigos() {
  for ( let i=0; i<cantEnemigos; i++ ) {
    //i -> 0 , 1 , 2 , 3
    r[i] = 40;
    x[i] = width+i*80;
    y[i] = random(200, 600);
    velX[i] = -4;
    velY[i] = random(-2,2);
    col[i] = color( random(100,255), random(0,125),random(255));
  }
}

function actualizarEnemigos() {
  moverEnemigos();
  dibujarEnemigos();
}

function moverEnemigos() {
  //cambia los valores de ubicacion:
  for ( let i=0; i<cantEnemigos; i++ ) {
    x[i]+=velX[i];
    

    if ( x[i] <= +r[i] ) {
      //lo pasamos a la derecha de la ventana:
      x[i] = width-r[i];
      y[i] = random (250, 550);
      
    }
  }
}

function dibujarEnemigos() {
  //dibujar los Enemigos:
  for ( let i=0; i<cantEnemigos; i++ ) {
    push();
    translate(x[i], y[i]);
    image( imagene , 0, 0, r[i]*2, r[i]*2 );
    pop();
  }
}

function evaluarColisiones(){
  for ( let i=0; i<cantEnemigos; i++ ) {
    //i -> 0 1 2 3 

    //calculamos la distancia
    if ( dist( xP,yP,x[i],y[i])<rP+r[i] ){
      //RESTAMOS UN vida:
      vidaP--;
      x[i] = width+random(100,200);
      y[i] = random(r[i],height*.5);
      
      //si ya no tiene vidas
      if ( vidaP <= 0 ){
        estado = 3;
      }
    }
  }
}
