class Aventura {
  
  constructor() {
    this.estado = 0;
    this.pantalla = new Pantalla();
    this.cantPantallas = 16;
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
    
    this.botones = [];
  }
  
  dibujar (image fondo, String texto){
    push();

    imageMode(CORNER);
    image(this.fondos,0,0,width,height);
    fill(0, 120);
    rectMode(CORNER);
    rect(0, height/3*2, width-2, height/3);
    fill(255);
    textSize(25);
    textLeading(40);
    textAlign(CENTER, CENTER);
    text(this.textos, 0, height/1.8, width, height/3);
    pop();
  }

  actualizar() {
    this.pantalla.actualizar( this.fondos[ this.estado ] , this.textos[ this.estado ] );
  }
}
