let Horse;
let firstRun = true
let numberOfTimes = 20 //Changes the Number of times the 4 audio leevels are dsipalyed 
let star = false

let words_history = [];
let vocal_history = [];
let drum_history = [];
let bass_history = [];
let other_history = [];

function add_to_history(history, d) {
  history.push(d);
}

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

add_to_history(words_history, words);
add_to_history(vocal_history, vocal);
add_to_history(drum_history, drum);
add_to_history(bass_history, bass);
add_to_history(other_history, other);

image(Horse,0,0);
background(135);
let total = map(vocal+drum+bass+other,0,359.57,-200,255);
let totalAngle = map(vocal+drum+bass+other,0,359.57, 0, 360);

fill(total,total,total);
stroke(255,total);
strokeWeight(2);

donutPlace(canvasX / 2, canvasY / 2, 0, 0, totalAngle);

function donutPlace(positionX, positionY, translateX, tranlateY, rotation){
push();
translate(positionX+translateX, positionY+tranlateY);
rotate(rotation);
donutVisual(0, 0,500,0.2,0.45,0.75,1);
pop();
}
function donutVisual(centerX, centerY,circleRadius,innerRingExterior,innerRingInterior,outerRingInterior,outerRingExterior){

let adjustment1a = (centerY - (innerRingInterior * circleRadius));
let adjustment1b = (centerY - (outerRingExterior * circleRadius));

let adjustment2a = (centerY - (outerRingInterior * circleRadius));
let adjustment2b = (centerY - (innerRingExterior * circleRadius));

let vocalMap1 = map(vocal,0,100,adjustment1a,adjustment1b);
let drumMap1 = map(drum,0,100,adjustment1a,adjustment1b);
let bassMap1 = map(bass,0,100,adjustment1a,adjustment1b);
let otherMap1 = map(other,0,100,adjustment1a,adjustment1b);

let vocalMap2 = map(vocal,0,100,adjustment2a,adjustment2b);
let drumMap2 = map(drum,0,100,adjustment2a,adjustment2b);
let bassMap2 = map(bass,0,100,adjustment2a,adjustment2b);
let otherMap2 = map(other,0,100,adjustment2a,adjustment2b);

let offsetAngle = (360/(4*numberOfTimes));

const AudioLevelPoint1 = [];
const AudioLevelPoint2 = [];

let AudioType1 = [vocalMap1, drumMap1, bassMap1, otherMap1];
let AudioType2 = [vocalMap2, drumMap2, bassMap2, otherMap2];

for(let i = 0; i < 4*numberOfTimes; i+=4){
  for(let x = 0; x < 4; x++){
  AudioLevelPoint1.push([ // outer ring
    (centerX - centerX) * cos((i + x) * offsetAngle) - (AudioType1[x] - centerY) * sin((i + x) * offsetAngle) + centerX,
    (centerX - centerX) * sin((i + x) * offsetAngle) + (AudioType1[x] - centerY) * cos((i + x) * offsetAngle) + centerY
    ])
  AudioLevelPoint2.push([ // inner ring
    (centerX - centerX) * cos((i + x) * offsetAngle) - (AudioType2[x] - centerY) * sin((i + x) * offsetAngle) + centerX,
    (centerX - centerX) * sin((i + x) * offsetAngle) + (AudioType2[x] - centerY) * cos((i + x) * offsetAngle) + centerY
    ])
  } 
}

fill(20,243,127,total); // outer ring
beginShape();
    for(let i = 0; i < 4*numberOfTimes; i++){
      vertex(AudioLevelPoint1[i][0],AudioLevelPoint1[i][1]);
    }
    vertex(AudioLevelPoint1[0][0],AudioLevelPoint1[0][1]);
endShape();

fill(135); // inner ring
beginShape();
    for(let i = 0; i < 4*numberOfTimes; i++){
      vertex(AudioLevelPoint2[i][0],AudioLevelPoint2[i][1]);
    }
    vertex(AudioLevelPoint2[0][0],AudioLevelPoint2[0][1]);
endShape();

for(let i = 0; i < 4*numberOfTimes; i++){ //lines from inner to outer ring
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



