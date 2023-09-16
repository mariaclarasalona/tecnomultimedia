/*TM1 2023
comision 3 prof. David Bedoian
TP4 Introducción a P5.js
Maria Clara Saloña
85207/7
enlace del video: 
*/
// variables para mover personaje
let x, y, p, d;

// variables para enemigos
let xe=[], ye=[], velXe=[], velYe=[], re=[];

let cantEnemigos = 5; //variable array

// variables para objetivo
let xo, yo, to;

let imagenBG; // fondo
let imagene;  // enemigos
let imagenPj; // personaje

let timer; //tiempo en milisegundos de juego

let estado;

function setup() {
  createCanvas( 800, 800 );
  rectMode( CENTER );
  imageMode( CENTER );
  frameRate( 30 );
  
  // seteos generales para los textos
  textAlign( CENTER, CENTER );
  textSize( 50 );

  // inicializo mis variables de personaje
  estado = 0;
  x = width / 2;
  y = height / 1.1;
  p = 50;  // "paso"
  d = 50;  // "diametro"
  
  
  inicializarEnemigos();
}


function draw() { ///dibujado de estados
   if ( estado==0 ) {
    pantallaInicio();
  } else if ( estado == 1 ) {
    jugando();
    actualizarEnemigos();
  } else if ( estado == 2 ) {
    pantallaGanaste();
  } else if ( estado == 3 ) {
    pantallaPerdiste();
  }
  
}
/////////////////////ENEMIGOS QUE NO QUIEREN ACTUALIZARSE/////////////////////////////////////////
function inicializarEnemigos() {
  for ( let i=0; i<cantEnemigos ; i++ ) {
    re[i] = 20;
    xe[i] = width+i*80;
    ye[i] = random(20, 600);
    velXe[i] = -2;
    velYe[i] = random(-2,2);
  }
}
function actualizarEnemigos() {
  moverEnemigos();
  dibujarEnemigos();
}

function moverEnemigos() {
  //cambia los valores de ubicacion:
  for ( let i=0; i<cantEnemigos; i++ ) {
    xe[i]+=velXe[i];
    

    if ( xe[i] <= +re[i] ) {
      //lo pasamos a la derecha de la ventana:
      xe[i] = width-re[i];
      ye[i] = random (150, 550);
      
    }
  }
}
function dibujarEnemigos() {
  //dibujar los obstaculos:
  for ( let i=0; i<cantEnemigos; i++ ) {
    push();
    
    translate(xe[i], ye[i]);
    image( imagene , xe, ye, re[i]*2, re[i]*2 );

    pop();
  }
 }

//////////////////////////////////////////////////////////

function mousePressed() { /// cambios de estado
  if ( estado==0 ) {
    //flujo de estado 0->1
    estado=1;
    timer = millis();
    
  } else if ( estado == 1 ) {
      estado=2;
  } else if ( estado == 2 ) {
    //flujo de estado 2->0
    estado =0;
  } else if ( estado == 3 ) {
    //flujo de estado 3->0
    estado =0;
  }
}

// -------------------------------------------------------------------------------------
// carga imagenes
function preload() {
  imagenBG = loadImage( "2023_TM1_tp4_bg.png" );
  imagene = loadImage( "2023_TM1_tp4_auto.png" );
  imagenPJ = loadImage( "2023_TM1_tp4_ranita.png" );
}
