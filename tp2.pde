/*TM1 2023
comision 3 prof. David Bedoian
TP2 Funciones y Ciclos FOR
Maria Clara Saloña
85207/7
*/
///enlace al video: https://youtu.be/zrztspwbT7U
///enlace a gif de referencia: https://i2.wp.com/rz100arte.com/wp-content/uploads/2017/01/tumblr_n839o7CQON1qa4iv8o1_500.gif?resize=406%2C406&ssl=1

PImage opart; //inspiracion

float rotacion; //grado de rotacion

float diametro; //diametro de esferas

float x;
int numero;

float estado;

void setup (){
  size(800,400);
  
  opart = loadImage("opart.png");

  noStroke();
  
  diametro = 200;
  rotacion = radians(0);
  
  x = width;
  numero = 200;
  
  estado = 0;
  
  
}

void draw (){
  

  textAlign(CENTER);
  rectMode(CENTER);
  
  translate (width/3, height/2);
  
  if (estado ==0){
    
    background (255);
    
    
    
    fill(0);
    textSize(40);
    text( "OP ART",0,-40);
    
    textSize(20);
    text( "con funciones y ciclos FOR",0,-20);
    text( "Por María Clara Saloña",0,40);
    rect(0,150,150,70);
    
    fill(255);
    text( "COMENZAR",0,155);
    
    
    if ( mouseX > 190 && mouseX < 340 && mouseY > 315 &&
        mouseY < 400 ){
          
          fill(random(255),random(255),random(255));
          rect(0,150,150,70);
          fill(255);
          text( "COMENZAR",0,155);
          
        }
    
    
  }else{
    background (0);
    fill (255);
    
    push();
    //se invoca la funcion esferas
    esferas (mouseX); 
    
    rotacion+= 0.0008;
    pop();
    //imagen de referencia
    image(opart,140,-200,400,400);
  }
}

void mouseClicked(){
  
   if (estado ==0){
      
      estado=1;
      
    }else{
      
      estado=0;
      rotacion = 0;
      
    }
}
