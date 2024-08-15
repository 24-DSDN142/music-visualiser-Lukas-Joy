let Horse;
let firstRun = true

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {

  // console.log(counter)
  background(150)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  if(firstRun){
    Horse = loadImage('Horse.png');
      firstRun = false
  }

  // image(Horse,0,0);

  fill(20,243,127);

    let circleRadius = 350
    let v = map(vocal,0,100,0,circleRadius);
    let d = map(drum,0,100,0,circleRadius);
    let b = map(bass,0,100,0,circleRadius);
    let o = map(other,0,100,0,circleRadius);
    
    let centerX = canvasX / 2;
    let centerY = canvasY / 2;


    stroke(255); // Set the stroke color to white
    
    let point3 = [centerX + (circleRadius * cos(0)), centerY + (circleRadius * sin(0))];
    let point4 = [centerX + (circleRadius * cos(45)), centerY + (circleRadius * sin(45))];
    let point5 = [centerX + (circleRadius * cos(90)), centerY + (circleRadius * sin(90))];
    let point6 = [centerX + (circleRadius * cos(135)), centerY + (circleRadius * sin(135))];
    let point7 = [centerX + (circleRadius * cos(180)), centerY + (circleRadius * sin(180))];
    let point8 = [centerX + (circleRadius * cos(225)), centerY + (circleRadius * sin(225))];
    let point1 = [centerX + (circleRadius * cos(270)), centerY + (circleRadius * sin(270))];
    let point2 = [centerX + (circleRadius * cos(315)), centerY + (circleRadius * sin(315))];

    circle(point1[0], point1[1], 20); // Adjust the circle radius as needed
    circle(point2[0], point2[1], 20);
    circle(point3[0], point3[1], 20);
    circle(point4[0], point4[1], 20);
    circle(point5[0], point5[1], 20);
    circle(point6[0], point6[1], 20);
    circle(point7[0], point7[1], 20);
    circle(point8[0], point8[1], 20);

    line(point1[0], point1[1],point5[0],point5[1])
    line(point2[0], point2[1],point6[0],point6[1])
    line(point3[0], point3[1],point7[0],point7[1])
    line(point4[0], point4[1],point8[0],point8[1])
    
    let point3volume = [centerX + (v * cos(0)), centerY + (v * sin(0))];
    let point4volume = [centerX + (d * cos(45)), centerY + (d * sin(45))];
    let point5volume = [centerX + (b * cos(90)), centerY + (b * sin(90))];
    let point6volume = [centerX + (o * cos(135)), centerY + (o * sin(135))];
    let point7volume = [centerX + (v * cos(180)), centerY + (v * sin(180))];
    let point8volume = [centerX + (d * cos(225)), centerY + (d * sin(225))];
    let point1volume = [centerX + (b * cos(270)), centerY + (b * sin(270))];
    let point2volume = [centerX + (o * cos(315)), centerY + (o * sin(315))];

    circle(point1volume[0], point1volume[1], 20);
    circle(point2volume[0], point2volume[1], 20);
    circle(point3volume[0], point3volume[1], 20);
    circle(point4volume[0], point4volume[1], 20);
    circle(point5volume[0], point5volume[1], 20);
    circle(point6volume[0], point6volume[1], 20);
    circle(point7volume[0], point7volume[1], 20);
    circle(point8volume[0], point8volume[1], 20);

    beginShape();
    vertex(point1volume[0], point1volume[1]);
    vertex(point2volume[0], point2volume[1]);
    vertex(point3volume[0], point3volume[1]);
    vertex(point4volume[0], point4volume[1]);
    vertex(point5volume[0], point5volume[1]);
    vertex(point6volume[0], point6volume[1]);
    vertex(point7volume[0], point7volume[1]);
    vertex(point8volume[0], point8volume[1]);
    vertex(point1volume[0], point1volume[1]);
    endShape();

    // line(point1volume[0], point1volume[1], point2volume[0], point2volume[1]); // Adjust the circle radius as needed
    // line(point2volume[0], point2volume[1], point3volume[0], point3volume[1]);
    // line(point3volume[0], point3volume[1], point4volume[0], point4volume[1]);
    // line(point4volume[0], point4volume[1], point5volume[0], point5volume[1]);
    // line(point5volume[0], point5volume[1], point6volume[0], point6volume[1]);
    // line(point6volume[0], point6volume[1], point7volume[0], point7volume[1]);
    // line(point7volume[0], point7volume[1], point8volume[0], point8volume[1]);
    // line(point8volume[0], point8volume[1], point1volume[0], point1volume[1]);

    let point2volume = [centerX + (o * cos(315)), centerY + (o * sin(315))];

  let numberOfPoints
    for(let i = 0; i <)
}