let aventura;

function setup() {
  createCanvas(800, 800);
  aventura = new Aventura();
}

function draw() {
  aventura.actualizar();
  //aventura.dibujar(this.aventura.fondos[ this.aventura.estado ] , this.aventura.textos[ this.aventura.estado ]);
}
