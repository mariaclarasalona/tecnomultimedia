let aventura;

function setup() {
  createCanvas(800, 800);
  aventura = new Aventura();
}

function draw() {
  aventura.actualizar();
  //aventura.dibujar(this.aventura.fondos[ this.aventura.estado ] , this.aventura.textos[ this.aventura.estado ]);
}
function mousePressed(){
  aventura.mousePressed();
}
function keyPressed(){
  aventura.keyPressed();
}
////////////////////**** DEBUG **** BUILD ****/////////////////

/*
-botones continuar no se dibujan
-fotos enemigo y gregor no cargan 
-ganar/perder juego no conectado a la aventura
*/
