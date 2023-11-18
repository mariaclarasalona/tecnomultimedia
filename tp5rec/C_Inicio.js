/*TM1 2023
comision 3 prof. David Bedoian
TP5rec MiniJuego con POO orientado a la Aventura Gráfica
Maria Clara Saloña
85207/7
enlace del video: https://youtu.be/l7ACf-X3G-8
*/
class Inicio {
  contructor (){
  }
  
  dibujar(){
    push();
    
    translate(width/2,height/2);
    rectMode(CENTER);
    textAlign(CENTER);
    textSize(40);
    background(0);
    fill(255);
    text("Ayuda a Gregor a escapar de su familia",0, -150);
    text("antes de que se acabe el tiempo",0, -100);
    textSize(30);
    text("usá las flechitas para moverte", 0, 0);
    text("↑→↓←", 0, 50);
    text("click para comenzar", 0, 200);
     
    pop();
  }

}
