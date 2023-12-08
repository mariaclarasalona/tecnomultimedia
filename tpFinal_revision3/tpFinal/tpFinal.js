let aventura;

function setup() {
  createCanvas(800, 800);
  aventura = new Aventura();
}

function draw() {
  aventura.actualizar();
}
function mousePressed(){
  aventura.mousePressed();
}
function keyPressed(){
  aventura.keyPressed();
}
////////////////////**** DEBUG **** BUILD ****/////////////////

/*
-fotos enemigo y gregor no cargan 
*/
