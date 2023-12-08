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
    
    this.textosBotones = [13];
    this.textosBotones [0] = "Iniciar";
    this.textosBotones [1] =   "Continuar";
    this.textosBotones [2] =   "Ventana";
    this.textosBotones [3] =   "Puerta";
    this.textosBotones [4] =   "Puerta al exterior";
    this.textosBotones [5] =  "Habitación";
    this.textosBotones [6] =   "No te escondes";
    this.textosBotones [7] =   "Abajo de la cama";
    this.textosBotones [8] =  "No te vuelven a ver";
    this.textosBotones [9] =  "Mueres";
    this.textosBotones [10] =  "Vives escondido el resto de tu vida";
    this.textosBotones [11] =  "Volver a empezar";
    this.textosBotones [12] =  "Créditos";
  }


  actualizar() {
    console.log(this.estado);
    this.pantalla.actualizar( this.fondos[ this.estado ] , this.textos[ this.estado ] );
    
    switch(this.estado){ //dibuja botones dependiendo del estado
    
    
    case 1:
    case 2:
    case 4:
    case 6:
    case 8:
    case 9:
    case 10:
    case 12:
    case 13:
    case 15: 
      this.botones.dibujar(width/2, height/1.1, 120, 80, this.textosBotones[1]);
    break;
    
    case 0:
      this.botones.dibujar(width/4*3, height/1.1, 120, 80, this.textosBotones[0]);
      this.botones.dibujar(width/4, height/1.1, 120, 80, this.textosBotones[12]);
    break;
    
    case 3:
      this.botones.dibujar(width/4*3, height/1.1, 120, 80, this.textosBotones[3]);
      this.botones.dibujar(width/4, height/1.1, 120, 80, this.textosBotones[2]);
    break;
    
    case 5:
      this.botones.dibujar(width/4*3, height/1.1, 120, 80, this.textosBotones[5]);
      this.botones.dibujar(width/4, height/1.1, 120, 80, this.textosBotones[4]);
    break;
    
    case 7:
      this.botones.dibujar(width/4*3, height/1.1, 120, 80, this.textosBotones[6]);
      this.botones.dibujar(width/4*2, height/1.1, 120, 80, this.textosBotones[7]);
      this.botones.dibujar(width/4, height/1.1, 120, 80, this.textosBotones[2]);
    break;
    
    case 11:
    this.botones.dibujar(width/2, height/1.1, 120, 80, this.textosBotones[9]);
    break;
    
    case 14:
    this.botones.dibujar(width/4*3, height/1.1, 120, 80, this.textosBotones[11]);
      this.botones.dibujar(width/4, height/1.1, 120, 80, this.textosBotones[12]);
    break;
    
    ///// JUEGO /////
    case 16:
      this.juego.draw(); ///termina y continua a estado 6
    break;
    
    
    }
  }
  
  mousePressed(){
    switch(this.estado){ //cambio de estado depende de colision con boton especifico
    case 0:
      if (this.botones.colision(width/4*3, height/1.1, 120, 80) ){
        this.estado ++;
      } else if (this.botones.colision(width/4, height/1.1, 120, 80) ){
        this.estado = 15;
      }
    break;
    
    case 1:
    case 2:
    case 4:
    case 6:
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
    
    case 9:
    case 10:
    case 11:
    case 13:
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
      
      switch(this.juego.estado){ ///al llegar al estado ganaste click continua aventura
        case 2:
        this.estado =6;
        break;
        
        default:
        break;
      }
    break;
    }
  }
  keyPressed(){
    if (this.estado = 16){
      this.juego.keyPressed(); 
    }
  }
  
}
