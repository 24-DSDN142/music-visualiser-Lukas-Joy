let Horse;
let firstRun = true

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(150)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  if(firstRun){
    Horse = loadImage('Horse.png');
      firstRun = false
  }

  image(Horse,0,0);

  fill(20,243,127);

  let v = map(vocal,20,100,0,100);
  let d = map(drum,20,100,0,100);
  let b = map(bass,20,100,0,100);
  let o = map(other,20,100,0,100);

    beginShape();
      curveVertex(0,300);
      curveVertex(200,300);
      curveVertex(300,325-(2.5*v));
      curveVertex(400,325);
      curveVertex(500,325-(2.5*d));
      curveVertex(600,325);
      curveVertex(700,325-(2.5*b));
      curveVertex(800,325);
      curveVertex(900,325-(2.5*o));
      curveVertex(1000,300);
      curveVertex(1200,300);
    endShape();

    beginShape();
      curveVertex(0,300);
      curveVertex(200,300);
      curveVertex(300,275+(2.5*v));
      curveVertex(400,275);
      curveVertex(500,275+(2.5*d));
      curveVertex(600,275);
      curveVertex(700,275+(2.5*b));
      curveVertex(800,275);
      curveVertex(900,275+(2.5*o));
      curveVertex(1000,300);
      curveVertex(1200,300);
    endShape();

}