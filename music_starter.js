let numberOfTimes = 20 //Changes the Number of times the 4 audio leevels are dsipalyed 
let words_history = [];
let vocal_history = [];
let drum_history = [];
let bass_history = [];
let other_history = [];

function add_to_history(history, d) {
  history.push(d);
}

function generateNoiseGrid(gridSize) {
  for (let x = 0; x < width; x += gridSize) {
    for (let y = 0; y < height; y += gridSize) {
      if (random() > 0.5) {
        fill(255); // white
      } else {
        fill(0); // black
      }
      rect(x, y, gridSize, gridSize);
    }
  }
}


// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  // console.log(counter)
  background(150)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

add_to_history(words_history, words);
add_to_history(vocal_history, vocal);
add_to_history(drum_history, drum);
add_to_history(bass_history, bass);
add_to_history(other_history, other);

// if(counter <= 480){
// generateNoiseGrid(20); 
// blackScreen1 = map(other,65,66,255,0);
// fill(0,blackScreen1);
// rect(0,0,2*canvasX,2*canvasY);
// }

// if(counter >= 480 && counter <= 2640){
// donutHistory(canvasX/2, canvasY/2,1000,0.2);
// }

donutHistory(canvasX/2, canvasY/2,1000,0.2,words, vocal, drum, bass, other, counter);
}
function donutHistory(centerX, centerY,circleRadius,min,words, vocal, drum, bass, other, counter){

let maximum = (centerY - (circleRadius));
let minimum = (centerY - (min * circleRadius));

let vocalMap = map(vocal,0,100,minimum,maximum);
let drumMap = map(drum,0,100,minimum,maximum);
let bassMap = map(bass,0,100,minimum,maximum);
let otherMap = map(other,0,100,minimum,maximum);

let history_vocalMap = [];
let history_drumMap = [];
let history_bassMap = [];
let history_otherMap = [];

add_to_history(history_vocalMap, vocalMap);
add_to_history(history_drumMap, drumMap);
add_to_history(history_bassMap, bassMap);
add_to_history(history_otherMap, otherMap);

const AudioLevelPoint_vocalMap = [];
const AudioLevelPoint_drumMap = [];
const AudioLevelPoint_bassMap = [];
const AudioLevelPoint_otherMap = [];

for(let i = 0; i < 360; i++){
  AudioLevelPoint_vocalMap.push([
    (centerX - centerX) * cos(i) - (history_vocalMap[counter-i] - centerY) * sin(i) + centerX,
    (centerX - centerX) * sin(i) + (history_vocalMap[counter-i] - centerY) * cos(i) + centerY
    ])
    AudioLevelPoint_drumMap.push([
    (centerX - centerX) * cos(i) - (history_drumMap[counter-i] - centerY) * sin(i) + centerX,
    (centerX - centerX) * sin(i) + (history_drumMap[counter-i] - centerY) * cos(i) + centerY
    ])
    AudioLevelPoint_bassMap.push([
    (centerX - centerX) * cos(i) - (history_bassMap[counter-i] - centerY) * sin(i) + centerX,
    (centerX - centerX) * sin(i) + (history_bassMap[counter-i] - centerY) * cos(i) + centerY
    ])
    AudioLevelPoint_otherMap.push([
    (centerX - centerX) * cos(i) - (history_otherMap[counter-i] - centerY) * sin(i) + centerX,
    (centerX - centerX) * sin(i) + (history_otherMap[counter-i] - centerY) * cos(i) + centerY
    ])
}
let trueCounter = counter
if(counter < 360){
   trueCounter = 0
}
else{
  trueCounter = counter
}
stroke(10)
beginShape(LINES);
      for(let i = 0; i < 360; i++){
        vertex(AudioLevelPoint_vocalMap[trueCounter - i][0],AudioLevelPoint_vocalMap[trueCounter - i][1]);
      }
      vertex(AudioLevelPoint_vocalMap[trueCounter-360][0],AudioLevelPoint_vocalMap[trueCounter-360][1]);
endShape();
beginShape(LINES);
      for(let i = 0; i < 360; i++){
        vertex(AudioLevelPoint_drumMap[trueCounter - i][0],AudioLevelPoint_drumMap[trueCounter - i][1]);
      }
      vertex(AudioLevelPoint_drumMap[trueCounter-360][0],AudioLevelPoint_drumMap[trueCounter-360][1]);
endShape();
beginShape(LINES);
      for(let i = 0; i < 360; i++){
        vertex(AudioLevelPoint_bassMap[(counter << 360 ? 0 : counter-i)][0],AudioLevelPoint_bassMap[trueCounter - i][1]);
      }
      vertex(AudioLevelPoint_bassMap[trueCounter-360][0],AudioLevelPoint_bassMap[trueCounter-360][1]);
endShape();
beginShape(LINES);
      for(let i = 0; i < 360; i++){
        vertex(AudioLevelPoint_otherMap[trueCounter - i][0],AudioLevelPoint_otherMap[trueCounter - i][1]);
      }
      vertex(AudioLevelPoint_otherMap[trueCounter-360][0],AudioLevelPoint_otherMap[trueCounter-360][1]);
endShape();

}




function donutVisual(centerX, centerY,circleRadius,min,max){

let maximum = (centerY - (max * circleRadius));
let minimum = (centerY - (min * circleRadius));

let vocalMap = map(vocal,0,100,minimum,maximum);
let drumMap = map(drum,0,100,minimum,maximum);
let bassMap = map(bass,0,100,minimum,maximum);
let otherMap = map(other,0,100,minimum,maximum);

let offsetAngle = (360/(4*numberOfTimes));

const AudioLevelPoint = [];

let AudioType = [vocalMap, drumMap, bassMap, otherMap];

for(let i = 0; i < 4*numberOfTimes; i+=4){
  for(let x = 0; x < 4; x++){
  AudioLevelPoint.push([ // outer ring
    (centerX - centerX) * cos((i + x) * offsetAngle) - (AudioType[x] - centerY) * sin((i + x) * offsetAngle) + centerX,
    (centerX - centerX) * sin((i + x) * offsetAngle) + (AudioType[x] - centerY) * cos((i + x) * offsetAngle) + centerY
    ])
  } 
}

fill(20,243,127); // outer ring
beginShape();
    for(let i = 0; i < 4*numberOfTimes; i++){
      vertex(AudioLevelPoint[i][0],AudioLevelPoint[i][1]);
    }
    vertex(AudioLevelPoint[0][0],AudioLevelPoint[0][1]);
endShape();
}
function donutVisualCurved(centerX, centerY,circleRadius,min,max){

  let maximum = (centerY - (max * circleRadius));
  let minimum = (centerY - (min * circleRadius));
  
  let vocalMap = map(vocal,0,100,minimum,maximum);
  let drumMap = map(drum,0,100,minimum,maximum);
  let bassMap = map(bass,0,100,minimum,maximum);
  let otherMap = map(other,0,100,minimum,maximum);
  
  let offsetAngle = (360/(4*numberOfTimes));
  
  const AudioLevelPoint = [];
  
  let AudioType = [vocalMap, drumMap, bassMap, otherMap];
  
  for(let i = 0; i < 4*numberOfTimes; i+=4){
    for(let x = 0; x < 4; x++){
    AudioLevelPoint.push([ // outer ring
      (centerX - centerX) * cos((i + x) * offsetAngle) - (AudioType[x] - centerY) * sin((i + x) * offsetAngle) + centerX,
      (centerX - centerX) * sin((i + x) * offsetAngle) + (AudioType[x] - centerY) * cos((i + x) * offsetAngle) + centerY
      ])
    } 
  }
  
  fill(20,243,127); // outer ring
  beginShape();
      for(let i = 0; i < 4*numberOfTimes; i++){
        curveVertex(AudioLevelPoint[i][0],AudioLevelPoint[i][1]);
      }
      curveVertex(AudioLevelPoint[0][0],AudioLevelPoint[0][1]);
  endShape();
  }


