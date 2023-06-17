/*TM1 2023
comision 3 prof. David Bedoian
TP2 Funciones y Ciclos FOR
Maria Clara Saloña
85207/7
*/
///enlace al video: https://youtu.be/zrztspwbT7U

//inicializacion de funcion de cantidad de brazos
float calculaModulo( float total_ , float cant_    ){
  
  float resultado;
  resultado = total_ / cant_ ;
  
  return resultado;
}

void esferas (float inicia){
  for (int i=0; i<inicia; i+=145){ //brazos de esferas
    
      rotate(calculaModulo(radians(inicia),TWO_PI));
    
      pushMatrix();
      for (int inicia2=0; inicia2<numero; inicia2 ++){
        scale (0.90);
        rotate(rotacion);
        ellipse (x,0,diametro,diametro);
    
      }
      popMatrix();
    }
}
