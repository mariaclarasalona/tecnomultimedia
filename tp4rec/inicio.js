/*TM1 2023
comision 3 prof. David Bedoian
TP4Rec Introducción a P5.js
Maria Clara Saloña
85207/7
enlace del video: https://youtu.be/0_XQMyDHY9Y
*/
function pantallaInicio() {
  ///reset valores
  vidaP = 3;
  xP = width/2;
  yP = 760;
  
  background(234, 175, 228);
  textAlign(CENTER, CENTER);
  push();
  textSize(40);
  fill(0);
  text("usá las flechitas para moverte", width/2, height/2);
  text("↑→↓←", width/2, height/2+50);
  text("Click para comenzar!", width/2, height/2+200);
  
  textSize(20);
  text("¡Ayudá a la ranita a cruzar la calle y llegar a las mosquitas", width/2, height/3);

  text("sin que la pisen 3 autos!", width/2, height/3+40);
  pop();
  
  
}
