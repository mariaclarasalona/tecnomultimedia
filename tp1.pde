/*TM1 2023
comision 3 prof. David Bedoian
TP1 Variables y Condicionales
Maria Clara Saloña
85207/7
*/
PImage imgtextos1 ;
PImage imgtextos2 ;

PImage imgserpiente1 ;
PImage imgserpiente2 ;
PImage imgserpiente3 ;

PImage imgutu1 ;
PImage imgutu2 ;


int xtxt1; //x1 del texto
int ytxt1; //y1 del texto

int t1; // transparencia

int rota; //rotacio 

int estado;

void setup(){
  size (600,600);
  estado = 1;
  frameRate(30);
  
  ///carga de imagenes

  imgtextos1 = loadImage("revealed_texts_1.jpg");
  imgtextos2 = loadImage("revealed_texts_2.jpg");
  
  imgserpiente1 = loadImage("serpiente_1.jpg");
  imgserpiente2 = loadImage("serpiente_2.jpg");
  imgserpiente3 = loadImage("serpiente_3.jpg");
  
  imgutu1 = loadImage("uturunku_1.jpg");
  imgutu2 = loadImage("uturunku_2.jpg");
  
  t1 = 0;

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
  image(imgtextos1,350,0,350,350);
    //tint(255, t1);
    //rotate(rota);
    //rota += 0.02;
  
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
