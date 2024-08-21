let Horse;
let firstRun = true
let numberOfTimes = 20 //Changes the Number of times the 4 audio leevels are dsipalyed 
let star = false

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

image(Horse,0,0);
background(135);
let total = map(vocal+drum+bass+other,0,359.57,-200,255);
let totalAngleNumber = map(vocal+drum+bass+other,0,359.57, 0, 360);
for(i = 0; i <= 360; i+=totalAngleNumber){
  var totalAngle = i
  if(i==360){
    i=0
  }
}



fill(total,total,total);
stroke(255,total);
strokeWeight(2);

donutPlace(canvasX / 2, canvasY / 2, 0, 0, totalAngle);

// donutPlace(canvasX / 4,canvasY / 2, 0, -(map(drum,0,100,-canvasY / 2,canvasY / 2)),totalAngle);
// donutPlace(3 * canvasX / 4,canvasY / 2, 0, -(map(drum,0,100,-canvasY / 2,canvasY / 2)),totalAngle);
// donutPlace(canvasX / 4,canvasY / 2, 0, (map(drum,0,100,-canvasY / 2,canvasY / 2)),totalAngle);
// donutPlace(3 * canvasX / 4,canvasY / 2, 0, (map(drum,0,100,-canvasY / 2,canvasY / 2)),totalAngle);

function donutPlace(positionX, positionY, translateX, tranlateY, rotation){
push();
translate(positionX+translateX, positionY+tranlateY);
rotate(rotation);
donutVisual(0, 0,500,0.45,1,0.75,0.2);
pop();
}
function donutVisual(centerX, centerY,circleRadius,confine1a,confine1b,confine2a,confine2b){

let adjustment1a = (centerY - (confine1a* circleRadius));
let adjustment1b = (centerY - (confine1b* circleRadius));

let adjustment2a = (centerY - (confine2a* circleRadius));
let adjustment2b = (centerY - (confine2b* circleRadius));

let v = map(vocal, 0, 100, 0,89.23);
let d = map(drum, 0, 100, 0,93.26);
let b = map(bass, 0, 100, 0,92.22);
let o = map(other, 0, 100, 0,84.86);

let vocalMap1 = map(v,0,89.23,adjustment1a,adjustment1b);
let drumMap1 = map(d,0,93.26,adjustment1a,adjustment1b);
let bassMap1 = map(b,0,92.22,adjustment1a,adjustment1b);
let otherMap1 = map(o,0,84.86,adjustment1a,adjustment1b);

let vocalMap2 = map(v,0,89.23,adjustment2a,adjustment2b);
let drumMap2 = map(d,0,93.26,adjustment2a,adjustment2b);
let bassMap2 = map(b,0,92.22,adjustment2a,adjustment2b);
let otherMap2 = map(o,0,84.86,adjustment2a,adjustment2b);

let θ = (360/(4*numberOfTimes));

const AudioLevelPoint1 = [];
const AudioLevelPoint2 = [];

let AudioType1 = [vocalMap1, drumMap1, bassMap1, otherMap1];
let AudioType2 = [vocalMap2, drumMap2, bassMap2, otherMap2];

for(let i = 0; i < 4*numberOfTimes; i+=4){
  for(let x = 0; x < 4; x++){
  AudioLevelPoint1.push([
    (centerX - centerX) * cos((i + x) * θ) - (AudioType1[x] - centerY) * sin((i + x) * θ) + centerX,
    (centerX - centerX) * sin((i + x) * θ) + (AudioType1[x] - centerY) * cos((i + x) * θ) + centerY
    ])
  AudioLevelPoint2.push([
    (centerX - centerX) * cos((i + x) * θ) - (AudioType2[x] - centerY) * sin((i + x) * θ) + centerX,
    (centerX - centerX) * sin((i + x) * θ) + (AudioType2[x] - centerY) * cos((i + x) * θ) + centerY
    ])
  } 
}

fill(20,243,127,total);
beginShape();
    for(let i = 0; i < 4*numberOfTimes; i++){
      vertex(AudioLevelPoint1[i][0],AudioLevelPoint1[i][1]);
    }
    vertex(AudioLevelPoint1[0][0],AudioLevelPoint1[0][1]);
endShape();

fill(135);
beginShape();
    for(let i = 0; i < 4*numberOfTimes; i++){
      vertex(AudioLevelPoint2[i][0],AudioLevelPoint2[i][1]);
    }
    vertex(AudioLevelPoint2[0][0],AudioLevelPoint2[0][1]);
endShape();

for(let i = 0; i < 4*numberOfTimes; i++){
  beginShape();
  vertex(AudioLevelPoint1[i][0],AudioLevelPoint1[i][1]);
  vertex(AudioLevelPoint2[i][0],AudioLevelPoint2[i][1]);
  endShape();
}
}

if(star == true){
const LinesPointsPairs = [];

for(let i = 0; i < 4 * numberOfTimes; i+=0.5){
  LinesPointsPairs.push([
    centerX + (circleRadius * cos(i * 360 / (2 * numberOfTimes))),
    centerY + (circleRadius * sin(i * 360 / (2 * numberOfTimes))),
    centerX + (circleRadius * cos((i + numberOfTimes) * 360 / (2 * numberOfTimes))),
    centerY + (circleRadius * sin((i + numberOfTimes) * 360 / (2 * numberOfTimes)))
  ]);
}

for(let i = 0; i < 2 * numberOfTimes; i++){
  line(LinesPointsPairs[i][0],LinesPointsPairs[i][1],LinesPointsPairs[i][2],LinesPointsPairs[i][3]);
  circle(LinesPointsPairs[i][0],LinesPointsPairs[i][1],10);
  circle(LinesPointsPairs[i][2],LinesPointsPairs[i][3],10);
}
}






}



