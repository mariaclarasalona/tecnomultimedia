/*TM1 2023
comision 3 prof. David Bedoian
TP1 Variables y Condicionales
Maria Clara Saloña
85207/7
*/
PImage img1 ;
PImage img2 ;
PImage img3 ;


int xtxt1; //x1 del texto
int ytxt1; //y1 del texto

int estado;

void setup(){
  size (600,600);
  estado = 1;
  frameRate(30);
  
  ///carga de imagenes
  /*
  img = loadImage("img.jpeg");
  img = loadImage("img.jpeg");
  img = loadImage("img.jpeg");
  */
}
void draw(){
  
  if (estado == 1){    /// pantalla de inicio
  background(255);
  fill(255,0,0);
  rect(150,340,300,100);
  fill(0);
  textAlign(CENTER);
  textSize(20);
  text("TM1 2023 comision 3 prof. David Bedoian TP1 Variables y Condicionales", 100,100,400,400);
  text(" Maria Clara Saloña 85207/7",300,200);
  textSize(40);
  text("Comenzar", width/2, height/1.5);
  
  }else if ( estado == 2 ){  /// obra 1
  
  }else if ( estado == 3 ){  /// obra 2
  
  }else if ( estado == 4 ){  /// obra 3
  
  }
  if (estado >= 2){
  println(frameCount);

  }

  ///interaccion y colision
  /// && mouseX <= 150 && mouseX >= 500 && mouseY <= 340 && mouseY >= 440    <---- no se q esta mal
  if (mousePressed == true && estado == 1) {
    estado = 2;
    
  }
}
