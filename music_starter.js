let numberOfTimes = 20 //Changes the Number of times the 4 audio leevels are dsipalyed 
let words_history = [];
let vocal_history = [];
let drum_history = [];
let bass_history = [];
let other_history = [];

function add_to_history(history, d) {
  history.push(d);
  if(history.length >= 361) {
    history.shift();
  }
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

if(counter <= 2640){
  donutHistory(canvasX/2,canvasY/2,500,vocal_history);
  donutHistory(canvasX/2,canvasY/2,400,drum_history);
  donutHistory(canvasX/2,canvasY/2,300,bass_history);
  donutHistory(canvasX/2,canvasY/2,200,other_history);
}

if(counter <= 480){
generateNoiseGrid(20); 
blackScreen1 = map(other,65,66,255,0);
fill(0,blackScreen1);
rect(0,0,2*canvasX,2*canvasY);
}



function donutHistory(centerX,centerY,circleRadius,audioType){
  let max = circleRadius/100

  let fullCircle = 360
  if(audioType.length <= 360){
    fullCircle = audioType.length
  }
  else{
    fullCircle = 360
  }
  
  beginShape(LINES);
  for(i=0;i<fullCircle;i++){
    vertex((centerX - centerX) * cos(i) - ((centerY-((audioType[fullCircle-i])*max)) - centerY) * sin(i) + centerX,
          (centerX - centerX) * sin(i) + ((centerY-((audioType[fullCircle-i])*max)) - centerY) * cos(i) + centerY)
    
  }
  vertex((centerX - centerX) * cos(i) - ((centerY-((audioType[fullCircle-360])*max)) - centerY) * sin(i) + centerX,
        (centerX - centerX) * sin(i) + ((centerY-((audioType[fullCircle-360])*max)) - centerY) * cos(i) + centerY)
  endShape();
}




}

