/*TM1 2023
comision 3 prof. David Bedoian
TPFinal Etapa 1 
Maria Clara Saloña
85207/7
*/
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
