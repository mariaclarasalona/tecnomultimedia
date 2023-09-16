function pantallaInicio() {
  background(255, 0, 0);
  textAlign(CENTER, CENTER);
  textSize(40);
  fill(0);
  text("flechitas para moverse", width/2, height/2);
  text("Click para comenzar!", width/2, height/2+100);
  
  textSize(20);
  text("Ayudá a la ranita a llegar con su amiga!", width/2, height/3);
  text("Llegá antes de que se acabe el tiempo y sin tocar los autos", width/2, height/3+40);
  
// inicializo las variables enemigo
  xe = int( random(16) ) * 50;
  ye = int( random(12) ) * 50;
  te = d;
  
  
}
