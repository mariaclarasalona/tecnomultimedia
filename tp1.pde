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
String txtutu = "Uturunku (jaguar) es una instalación que se presenta como un espacio ritual, frente a un hombre contemporáneo falto de religiosidad, ávido de buscar la espiritualidad como relato pseudocientífico/religioso. A falta de un relato tanático que dé sentido a la muerte y por tanto a la existencia, este espacio ritual intenta erigirse como posible refugio ante las inclemencias de hoy, pero no deja de presentarse como un mar confuso de signos desarraigados, imagen de nuestro tiempo o gesto melancólico de un pasado ancestral.";

PImage imgserpiente1 ;
PImage imgserpiente2 ;
PImage imgserpiente3 ;

PImage imgutu1 ;
PImage imgutu2 ;

int ximg1 ; //x de imagen1
int ximg2 ; //x de imagen2



int t1; // transparencia

int rota; //rotacio 

int estado;

int cambiadordeestado;

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
  
  cambiadordeestado = 0;
  
  //rota = 5;

}
void draw(){
  println(cambiadordeestado);
  
  if (estado == 1){    /// pantalla de inicio
  background(255);
  fill(255,0,0);
  rect(150,340,300,100);
  fill(0);
  textAlign(CENTER);
  textSize(20);
  text("TM1 2023 comision 3 prof. David Bedoian TP1 Variables y Condicionales", 100,100,400,400);
  text(" Maria Clara Saloña 85207/7",300,200);
  textSize(35);
  text("Click para comenzar", width/2, height/1.5);
  
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
  background(28,107,165);

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
  background(0);
  fill(240,41,237);
  textSize(40);
  
  
  
  image(imgutu1,0,0,350,300);
  image(imgutu2,350,0,350,300);
  
  //pushStyle();
  
  //rotate(rota);
  text("UTURUNKU",300,200);
  //popStyle();
  textSize(15);
  fill(255);
  text(txtutu,50,350,500,200);
  
  }
  if (estado >= 2){
    
    cambiadordeestado += 1;
  //println(frameCount);

  }
  

  ///interaccion y colision
  /// && mouseX <= 150 && mouseX >= 500 && mouseY <= 340 && mouseY >= 440    <---- no se q esta mal
  if (mousePressed == true && estado == 1) {
    
    estado = 2;
    
  }
  if (cambiadordeestado >= 300 && estado == 2) {
    estado = 3;
  }
  if (cambiadordeestado >= 800 && estado == 3) {
    estado = 4;
  }
  if (cambiadordeestado >= 1200 && estado == 4) {
    estado = 1;
    cambiadordeestado = 0;
  }
}
