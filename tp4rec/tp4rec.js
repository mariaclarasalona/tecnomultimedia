/*TM1 2023
comision 3 prof. David Bedoian
TP4Rec Introducción a P5.js
Maria Clara Saloña
85207/7
enlace del video: https://youtu.be/0_XQMyDHY9Y
*/
//declaramos los arreglos:
let cantEnemigos = 5;

let col=[];

let x=[], y=[], velX=[], velY=[], r=[]; //variables enemigo

let xP, yP, velYP, velXP, rP; //variables personaje

let xO, yO, rO; //variables objetivo

let imagenBG; // fondo
let imagenE;  // enemigos
let imagenPj; // personaje
let imagenO; // objetivo
let vidaP;
let estado;
function setup() {
  
  createCanvas(800, 800);

  rectMode( CENTER );
  imageMode( CENTER );
  
  inicializarEnemigos();
  inicializarPersonaje();
  inicializarObjetivo();
  
  estado = 0;
}


function draw() {
  image( imagenBG , 400, 400, 800, 800); //fondo

///dibujado de estados
   if ( estado==0 ) {
      pantallaInicio();
      console.log("0");
    } else if ( estado == 1 ) {
      actualizarEnemigos();
      actualizarPersonaje();
      dibujarObjetivo();
      evaluarColisiones();
      colisionObjetivo();
      
      console.log("1");
    } else if ( estado == 2 ) {
      pantallaGanaste();
      
      console.log("2");
    } else if ( estado == 3 ) {
      pantallaPerdiste();
      
      console.log("3");
    }

  
}





function preload() {
  imagenBG = loadImage( "2023_TM1_tp4_bg.png" );
  imagene = loadImage( "2023_TM1_tp4_auto.png" );
  imagenPJ = loadImage( "2023_TM1_tp4_ranita.png" );
  imagenO = loadImage( "2023_TM1_tp4_mosquitas.png" );
}

function mousePressed(){
 if ( estado==0 ) {
    //flujo de estado 0->1
    estado = 1;
  } else if ( estado == 2 ) {
    //flujo de estado 2->0
    estado = 0;
  } else if ( estado == 3 ) {
    //flujo de estado 3->0
    estado = 0;
  }
}
function keyPressed(){
 if ( keyCode == UP_ARROW ) {
      yP -= rP;
    } else if ( keyCode == DOWN_ARROW ) {
      yP += rP;
    } else if ( keyCode == LEFT_ARROW ) {
      xP -= rP;
    } else if ( keyCode == RIGHT_ARROW ) {
      xP += rP;
    }
}
