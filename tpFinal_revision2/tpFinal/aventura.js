class Aventura {
  
  constructor() {
    this.juego = new Juego();
    this.estado = 16; //15 pantallas +juego
    this.pantalla = new Pantalla();
    this.cantPantallas = 17;
    this.botones = new Botones();
    this.fondos = [];

    for (let i = 0; i < this.cantPantallas; i++) {
      this.fondos[i] = loadImage("assets/f_"+nf(i, 2)+".png");
    }


    //los textos:
    

    this.textos = [
      ".",
      "Te despiertas en tu cama, te sientes extraño...",
      "Te encuentras transformado en una especie de bicho enorme",
      "Entras en pánico",
      "Sales por la puerta de tu habitación buscando a tu familia", 
      "Ellos te ven y no te reconocen. Te persiguen para matarte.", //minijuego
      "Vuelves a tu habitacion y trabas la puerta con tu cuerpo.",
      "Sientes a tu familia golpeando y tratando de abrir la puerta, quieren encontrarte.",
      "No te encuentran y al cabo de un rato se van",
      
      "Escapas por la ventana y nunca mas te vuelven a ver",
      "Escapas por la puerta principal, nunca mas te vuelven a ver",
      "Decides no esconderte, ellos te van a reconocer, son tu familia, no?",
      "Piensan que te fuiste solo y no vuelven a hablar del tema",
      "se olvidan de vos como bicho y como humano, como si nunca hubieras existido",
      "fin",
      "Hecho por María Clara Saloña. TM1 comisión 3 2023 prof. David Bedoian",
    ];
    
    
    /*
    //otra alternativa es cargar utilizando la funcion loadStrings
    this.textos = loadStrings("assets/textos.txt");
    */
  }


  actualizar() {
    console.log(this.estado);
    this.pantalla.actualizar( this.fondos[ this.estado ] , this.textos[ this.estado ] );
    
    switch(this.estado){ //dibuja botones dependiendo del estado
    
    case 0:
      this.botones.dibujar(width/4*3, height/1.1, 120, 80, this.botones.textos[0]);
      this.botones.dibujar(width/4, height/1.1, 120, 80, this.botones.textos[12]);
    break;
    
    case 1, 2, 4, 6, 8, 9, 10, 12, 13, 15: ///continuar's ????????????????????????????   NO SE ESTA DIBUJANDO ???????????????????
      this.botones.dibujar(width/2, height/1.1, 120, 80, this.botones.textos[1]);
    break;
    
    case 3:
      this.botones.dibujar(width/4*3, height/1.1, 120, 80, this.botones.textos[3]);
      this.botones.dibujar(width/4, height/1.1, 120, 80, this.botones.textos[2]);
    break;
    
    case 5:
      this.botones.dibujar(width/4*3, height/1.1, 120, 80, this.botones.textos[5]);
      this.botones.dibujar(width/4, height/1.1, 120, 80, this.botones.textos[4]);
    break;
    
    case 7:
      this.botones.dibujar(width/4*3, height/1.1, 120, 80, this.botones.textos[6]);
      this.botones.dibujar(width/4*2, height/1.1, 120, 80, this.botones.textos[7]);
      this.botones.dibujar(width/4, height/1.1, 120, 80, this.botones.textos[2]);
    break;
    
    case 11:
    this.botones.dibujar(width/2, height/1.1, 120, 80, this.botones.textos[9]);
    break;
    
    case 14:
    this.botones.dibujar(width/4*3, height/1.1, 120, 80, this.botones.textos[11]);
      this.botones.dibujar(width/4, height/1.1, 120, 80, this.botones.textos[12]);
    break;
    
    ///// JUEGO /////
    case 16:
      this.juego.draw();
    break;
    
    
    }
  }
  
  mousePressed(){
    switch(this.estado){ //cambio de estado depende de colision con boton especifico
    case 0:
      if (this.botones.colision(width/4*3, height/1.1, 120, 80) ){
        this.estado ++;
      } else if (this.botones.colision(width/4, height/1.1, 120, 80)){
        this.estado = 15;
      }
    break;
    
    case 1, 2, 4, 6:
      if (this.botones.colision(width/2, height/1.1, 120, 80) ){
        this.estado ++;
      }
    break;
    
    case 3:
      if (this.botones.colision(width/4*3, height/1.1, 120, 80) ){
          this.estado ++;
        } else if (this.botones.colision(width/4, height/1.1, 120, 80)){
          this.estado = 9;
      }
    break;
    
    case 5:
    if (this.botones.colision(width/4*3, height/1.1, 120, 80) ){ ///////te lleva a juego
          this.estado = 16;
        } else if (this.botones.colision(width/4, height/1.1, 120, 80)){
          this.estado = 10;
      }
    break;
    
    case 7:
    if (this.botones.colision(width/4*3, height/1.1, 120, 80) ){
          this.estado = 11;
        } else if (this.botones.colision(width/4*2, height/1.1, 120, 80)){
          this.estado = 8;
        }else if (this.botones.colision(width/4, height/1.1, 120, 80)){
           this.estado = 9;
      }
    break;
    
    case 8:
    if (this.botones.colision(width/2, height/1.1, 120, 80) ){
        this.estado = 12;
      }
    break;
    
    case 12:
      if (this.botones.colision(width/4*2, height/1.1, 120, 80)){
          this.estado = 13;
      }
    break;
    
    case 9, 10, 11, 13:
    if (this.botones.colision(width/2, height/1.1, 120, 80) ){
        this.estado = 14;
      }
    break;
    
    case 14:
    if (this.botones.colision(width/4*3, height/1.1, 120, 80) ){
          this.estado = 0;
        } else if (this.botones.colision(width/4, height/1.1, 120, 80)){
          this.estado = 15;
      }
    break;
    
    case 15:
    if (this.botones.colision(width/2, height/1.1, 120, 80) ){
        this.estado = 0;
      }
    break;
    
    ///// JUEGO /////
    case 16:
      this.juego.mousePressed();
    break;
    }
  }
  keyPressed(){
    if (this.estado = 16){
      this.juego.keyPressed(); 
    }
  }
  
}
