let Horse;
let numberOfTimes = 8 //Changes the Number of times the 4 audio leevels are dsipalyed 
let offset = 0

let offset_history = [];
let vocal_history = [];
let drum_history = [];
let bass_history = [];
let other_history = [];

function add_to_history(history, d) {
  history.push(d);
  if(history.length >= (width-1)/4) {
    history.shift();
}
}
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {

  console.log(counter)
  textFont('Verdana'); // please use CSS safe fonts
  background(135);
  rectMode(CENTER)


  offset ++
  text(offset,canvasX/2,canvasY/2);


add_to_history(vocal_history, vocal);
add_to_history(drum_history, drum);
add_to_history(bass_history, bass);
add_to_history(other_history, other);
add_to_history(offset_history, offset);


if(offset===250){
  offset = 0
}



donutPlace(canvasX / 2, canvasY / 2);

function donutPlace(positionX, positionY){
push();
translate(positionX, positionY);

// donutVisual(1750 + offset,0.2,1,6,counter);
// donutVisual(1500 + offset,0.2,1,5,counter);
// donutVisual(1250 + offset,0.2,1,4,counter);
// donutVisual(1000 + offset,0.2,1,3,counter);
// donutVisual(750 + offset,0.2,1,2,counter);
donutVisual(500 + offset,0.2,1,1,counter);
donutVisual(250 + offset,0.2,1,0,counter);
donutVisual(250,0.2,1,0,counter);
}
pop();
}


function donutVisual(circleRadius,minMultiplier,maxMultiplier,age,counter){

if(counter - (10*age) > 1){
  trueAge = counter - (10*age);
}
else{
  trueAge = 1
}

let max = (0 - (maxMultiplier * circleRadius));
let min = (0 - (minMultiplier * circleRadius));

let vocalMap = map(vocal_history[trueAge],0,100,min,max);
let drumMap = map(drum_history[trueAge],0,100,min,max);
let bassMap = map(bass_history[trueAge],0,100,min,max);
let otherMap = map(other_history[trueAge],0,100,min,max);

let offsetAngle = (360/(4*numberOfTimes));

const AudioLevelPoint = [];

let AudioType = [vocalMap, drumMap, bassMap, otherMap];
let centerX = 0
let centerY = 0

for(let i = 0; i < 4*numberOfTimes; i+=4){
  for(let x = 0; x < 4; x++){
  AudioLevelPoint.push([
    (centerX - centerX) * cos((i + x) * offsetAngle) - (AudioType[x] - centerY) * sin((i + x) * offsetAngle) + centerX,
    (centerX - centerX) * sin((i + x) * offsetAngle) + (AudioType[x] - centerY) * cos((i + x) * offsetAngle) + centerY
    ])
  } 
}

let total = map(vocal_history[trueAge]+drum_history[trueAge]+bass_history[trueAge]+other_history[trueAge],0,359.57,-200,255);
stroke(255,total);
fill(120,255,0,(map(age,0,6,100,0)));
beginShape();
    for(let i = 0; i < 4*numberOfTimes; i++){
      vertex(AudioLevelPoint[i][0],AudioLevelPoint[i][1]);
    }
    vertex(AudioLevelPoint[0][0],AudioLevelPoint[0][1]);
endShape();

  }
