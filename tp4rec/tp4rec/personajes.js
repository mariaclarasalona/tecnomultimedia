//las funciones del personaje:
function inicializarPersonaje() {
  rP = 30;
  xP = width/2;
  yP = 760;
  velYP = 0;
  velXP = 0;
  
  vidaP = 3;
}

function actualizarPersonaje() {
  dibujarPersonaje();
}

function dibujarPersonaje() {
  //
  push();
  translate(xP, yP);
  image( imagenPJ , 0, 0, rP*2, rP*2); 
  pop();
}
