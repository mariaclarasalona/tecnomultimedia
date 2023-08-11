/*TM1 2023
comision 3 prof. David Bedoian
Recu TP3 Aventura Grafica
Maria Clara Saloña
85207/7
enlace del video: https://youtu.be/IDlTaCh592M
*/

PImage [] fondos;
String[] textos;
String[] txtboton;
int estado; //valor quie habilita el cambio y dbujado de pantalla

int cantImagenes = 16;

void setup (){
  size(600,600);
  
  fondos = new PImage[16];
  
  for ( int i=0; i<cantImagenes; i++ ) { ///carga de imagenes con ciclo for
    fondos[i] = loadImage("data/f_"+nf(i, 2)+".png");

  }
  
  
  textos = new String[16]; //carga de textos

  textos[0] = ".";
  textos[1] = "Te despiertas en tu cama, te sientes extraño...";
  textos[2] = "Te encuentras transformado en una especie de bicho enorme";
  textos[3] = "Entras en pánico";
  textos[4] = "Sales por la puerta de tu habitación buscando a tu familia";
  textos[5] = "Ellos te ven y no te reconocen. Te persiguen para matarte.";
  textos[6] = "Vuelves a tu habitacion y trabas la puerta con tu cuerpo.";
  textos[7] = "Sientes a tu familia golpeando y tratando de abrir la puerta, quieren encontrarte.";
  textos[8] = "No te encuentran y al cabo de un rato se van";
  
  textos[9] = "Escapas por la ventana y nunca mas te vuelven a ver";
  textos[10] = "Escapas por la puerta principal, nunca mas te vuelven a ver";
  textos[11] = "Decides no esconderte, ellos te van a reconocer, son tu familia, no?";
  textos[12] = "Piensan que te fuiste solo y no vuelven a hablar del tema";
  textos[13] = "se olvidan de vos como bicho y como humano, como si nunca hubieras existido";
  textos[14] = "fin";
  textos[15] = "Hecho por María Clara Saloña. TM1 comisión 3 2023 prof. David Bedoian";
  
  txtboton = new String[13];
  txtboton[0] = "Iniciar";
  txtboton[1] = "Continuar";
  txtboton[2] = "Ventana";
  txtboton[3] = "Puerta";
  txtboton[4] = "Puerta al exterior";
  txtboton[5] = "Habitación";
  txtboton[6] = "No te escondes";
  txtboton[7] = "Abajo de la cama";
  txtboton[8] = "No te vuelven a ver";
  txtboton[9] = "Mueres";
  txtboton[10] = "Vives escondido el resto de tu vida";
  txtboton[11] = "Volver a empezar";
  txtboton[12] = "Créditos";
}

void draw (){
  
  print(estado);
  dibujaPantalla( fondos[estado], textos[estado] ); //dibuja fondos y texto descriptivo
  
  //dibujado 
  if ( estado == 0) {
    dibujaBotonRectangular( width/4*3, height/1.1, 120, 80, txtboton[0]);
    dibujaBotonRectangular( width/4, height/1.1, 120, 80, txtboton[12]);
  }if ( estado == 1 || estado == 2 || estado == 4 || estado == 6 || estado == 8) {
    dibujaBotonRectangular( width/2, height/1.1, 120, 80, txtboton[1]);
  }if ( estado == 3) {
    dibujaBotonRectangular( width/4*3, height/1.1, 120, 80, txtboton[3]);
    dibujaBotonRectangular( width/4, height/1.1, 120, 80, txtboton[2]);
  }if ( estado == 5) {
    dibujaBotonRectangular( width/4*3, height/1.1, 120, 80, txtboton[5]);
    dibujaBotonRectangular( width/4, height/1.1, 120, 80, txtboton[4]);
  }
  if ( estado == 7) {
    dibujaBotonRectangular( width/4*3, height/1.1, 120, 80, txtboton[6]);
    dibujaBotonRectangular( width/4*2, height/2, 120, 80, txtboton[7]);
    dibujaBotonRectangular( width/4, height/1.1, 120, 80, txtboton[2]);
  }if (estado == 11) {
    dibujaBotonRectangular( width/2, height/1.1, 120, 80, txtboton[9]);
  }if ( estado == 12) {
    dibujaBotonRectangular( width/4*2, height/2, 120, 80, txtboton[1]);
  }if ( estado == 14) {                                                    //fin
     dibujaBotonRectangular( width/4*3, height/1.1, 120, 80, txtboton[11]);
    dibujaBotonRectangular( width/4, height/1.1, 120, 80, txtboton[12]);
  }if ( estado == 9 || estado == 10 || estado == 13) {
    dibujaBotonRectangular( width/2, height/1.1, 120, 80, txtboton[1]);
  }if ( estado == 15) {              //creditos
    dibujaBotonRectangular( width/2, height/1.1, 120, 80, txtboton[1]);
  }
}

void inicializar() {
  //valor inciales
  estado = 0;
  
}
