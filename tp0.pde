/*TM1 2023
comision 3 prof. David Bedoian
TP0 Retrato
Maria Clara Saloña
85207/7
*/
PImage img ;

void setup () {
  
  size (800,400);
  img = loadImage("img.jpeg");
}
void draw () {
  image(img,400,0,400,400);
  smooth();
  noStroke();
  
    ///peloatras///
  fill(67,42,26);//marronoscuro
  
  beginShape();
  
  vertex(190,55);
  vertex(120,70);
  vertex(80,100);
  vertex(85,140);
  vertex(70,180);
  vertex(40,250);
  vertex(60,320);
  vertex(55,270);
  
  endShape();
  
    ///cuello///
  fill(82,41,155);//violetaoscuro
  
  beginShape();
  
  vertex(100,325);
  vertex(150,340);
  vertex(155,370);
  vertex(80,380);
  vertex(100,400);
  vertex(340,400);
  vertex(270,350);
  vertex(255,250);
  
  endShape();
  
  
    ///cara///
  fill(149,96,236);//violeta
  
  beginShape();

  vertex(55,193); //puntanariz
  vertex(110,150); //puente
  vertex(100,135); //entreojos
  vertex(140,85); //frente1
  vertex(170,65); //frente2
  vertex(270,55); //cuero
  vertex(290,180); //back1
  vertex(290,250); //back2
  vertex(160,310); //mandibula1
  vertex(100,325); //mandibula2
  vertex(70,310); //pera1
  vertex(73,290); //pera2
  vertex(77,280); //pera3
  vertex(75,265); //pera4  
  vertex(72,260); //labiobajo
  vertex(75,250); //labiobajo
  vertex(70,240); //labioalto
  vertex(75,225); //labioalto
  vertex(70,215); //bajonariz
  vertex(53,207); //puntanariz

  endShape();
  
    ///peloadelante///
  fill(93,67,50);//marron
  
  beginShape();
  
  vertex(180,58); //cuero
  vertex(195,70); //cuero
  vertex(200,90);
  vertex(190,130);
  vertex(220,170);
  vertex(250,200);
  vertex(265,200);
  vertex(230,220);
  vertex(220,240);
  vertex(210,280);
  vertex(230,300);//puntas
  vertex(260,320);//puntas
  vertex(330,330);
  vertex(360,255);
  vertex(330,200);
  vertex(345,150);
  vertex(320,100);
  vertex(285,75);
  vertex(285,70);
  vertex(250,40);
  
  endShape();
  
    ///ojo///
  fill(82,41,155);//violetaoscuro
  beginShape();
  
  vertex(125,138);
  vertex(155,150);
  vertex(140,153);
  vertex(115,165);
  vertex(115,150);
  
  endShape();
  
    ///nariz///
  beginShape();
  
  vertex(95,215);
  vertex(85,205);
  vertex(75,203);
  vertex(65,208);
  vertex(70,213);
 
  endShape();
  
    ///boca///
  triangle (75,250,85,248,110,260);
  
    ///luz///
  fill(149,130,237);//violetaluz
  
  beginShape();
  //luzcachete
  vertex(200,165);
  vertex(130,173);
  vertex(115,185);
  vertex(120,210);
  vertex(160,200);
  
  endShape();
  //luz frente
  beginShape();
  
  vertex(115,125);
  vertex(135,100);
  vertex(160,80);
  vertex(180,100);
  vertex(183,135);
  vertex(145,120);
  
  endShape();
  //luznariz
  beginShape();
  
  vertex(60,195);
  vertex(75,183);
  vertex(100,165);
  vertex(100,170);
  vertex(80,190);
  vertex(90,190);
  vertex(95,195);
  vertex(110,205);
  vertex(105,210);
  vertex(85,197);
  vertex(62,203);
  
  endShape();
  //luzpera
  beginShape();
  vertex(95,315);
  vertex(75,305);
  vertex(80,285);
  vertex(90,280);
  vertex(120,300);
  endShape();
  
}
