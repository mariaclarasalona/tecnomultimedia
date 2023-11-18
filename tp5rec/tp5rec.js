/*TM1 2023
comision 3 prof. David Bedoian
TP5rec MiniJuego con POO orientado a la Aventura Gráfica
Maria Clara Saloña
85207/7
enlace del video: https://youtu.be/l7ACf-X3G-8
*/
let juego;
function setup() {
  createCanvas(800,800);
  juego = new Juego();
  //juego es un objeto de la clase Juego
  //o una instancia de la clase Juego
}


function draw() {
 juego.draw();
}

function mousePressed(){
 juego.mousePressed(); 
}

function keyPressed(){
 juego.keyPressed(); 
}
