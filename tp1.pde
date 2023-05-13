/*TM1 2023
comision 3 prof. David Bedoian
TP1 Variables y Condicionales
Maria Clara Saloña
85207/7
*/
PImage imgtextos1 ;
PImage imgtextos2 ;
String txtrlv = "Textos revelados es una instalación interactiva que invita a descubrir textos ocultos en la pantalla. Cada gesto de la mano sobre el tejido elástico da vida a las palabras.";
String txtsrp = "La serpiente representa con su forma sinuosa y fluida represental el sistema de las redes sociales, un sistema de poder que elije la seduccion por sobre la potencia a la hora de someter.";

PImage imgserpiente1 ;
PImage imgserpiente2 ;
PImage imgserpiente3 ;

PImage imgutu1 ;
PImage imgutu2 ;

int ximg1 ; //x de imagen1
int ximg2 ; //x de imagen2



int t1; // transparencia
int t2;
int t3;

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
  
  ximg1 = -650;
  ximg2 = 700;
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
  
  }else if ( estado == 2 ){  /// obra 1 textos revelados
  background(0);
  
  //imagen1
  tint(255, t1);
  image(imgtextos1,250,0,350,300);

  
   //imagen2
  image(imgtextos2,0,300,350,350);

  
   //texto
  fill(255);
  textSize(40);
  text("Textos Revelados",30,100,200,200);
  textSize(15);
  text(txtrlv,350,370,200,200);

  
  t1 += 1;

    //rotate(rota);
    //rota += 0.02;
  
  }else if ( estado == 3 ){  /// obra 2 anillos de la serpiente
  noTint();
  background(32,86,126);

  fill(0);
  textSize(40);
  
  text("Los Anillos de la Serpiente",ximg1+620,100,300,200);
  image(imgserpiente1,ximg1,0,600,350);
  
  ximg1 += 1;
  
  textSize(20);
  text(txtsrp,ximg2-300,370,300,200);
  image(imgserpiente3,ximg2,350,600,350);
  
  ximg2 -= 1;
  
  
  }else if ( estado == 4 ){  /// obra 3 uturunku
  
  }
  if (estado >= 2){
    
  println(frameCount);

  }
  

  ///interaccion y colision
  /// && mouseX <= 150 && mouseX >= 500 && mouseY <= 340 && mouseY >= 440    <---- no se q esta mal
  if (mousePressed == true && estado == 1) {
    
    estado = 2;
    
  }
  if (frameCount >= 100 && estado == 2) {
    estado = 3;
  }
  if (frameCount >= 200 && estado == 3) {
    estado = 4;
  }
}
