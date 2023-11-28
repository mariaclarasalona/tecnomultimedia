class AventuraGrafica {
  constructor() {
    this.estado = 0;
    this.pantalla = new Pantalla();
    this.cantPantallas = 4;
    this.fondos = [];
    /*
    for (let i = 0; i < this.cantPantallas; i++) {
      this.fondos[i] = loadImage("./assets/fondo_" + i + ".png");
    }
    */
    
    this.fondos[0] = loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUXWfhwong6vecJkY3w0U5pfvUoGVzbFmeqQ&usqp=CAU");
    this.fondos[1] = loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzL89UZ4RjW6b6Rlf4rDSUBZwnfgOz_D2H9Q&usqp=CAU");
    this.fondos[2] = loadImage("https://img.freepik.com/vector-gratis/dibujado-mano-ilustracion-caperucita-roja_23-2148983010.jpg?size=626&ext=jpg");
    this.fondos[3] = loadImage("https://img.freepik.com/vector-gratis/dibujado-mano-ilustracion-caperucita-roja_23-2148983010.jpg?size=626&ext=jpg");
    //los textos:
    

    this.textos = [
      "Caperucita..",
      "Se encuentra con el lobo ¿Sigue su consejo?",
      "Se pierde en el bosque",
      "Llega antes que el lobo y advierte a su abuela del peligro"
    
    ];
    
    
    /*
    //otra alternativa es cargar utilizando la funcion loadStrings
    this.textos = laodStrings("assets/textos.txt");
    */
    
    this.botones = [];
  }

  actualizar() {
    background(200, 100, 0);
    this.pantalla.actualizar( this.fondos[ this.estado ] , this.textos[ this.estado ] );
  }
}
