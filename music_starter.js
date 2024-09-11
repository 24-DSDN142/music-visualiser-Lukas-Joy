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

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  function generateNoiseGrid(gridSize) {
    for (let x = 0; x < width; x += gridSize) {
      for (let y = 0; y < height; y += gridSize) {
        let fillColour = map(random(),0.5,0.50000000000000000001,0,255);
        fill(fillColour);
        rect(x, y, gridSize, gridSize);
      }
    }
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



if(counter <= 2640-120 || counter >= 4740 && counter <= 6900-120 || counter >= 8940 && counter <= 10920-120 ){
let sizeAdd = 0
  if(drum > 65){
    sizeAdd = 200
  }else{
    sizeAdd = 0
  }
  donutHistoryAntiClockWise(canvasX/2,canvasY/2,600+sizeAdd,vocal_history,180,0);
  donutHistoryAntiClockWise(canvasX/2,canvasY/2,600+sizeAdd,drum_history,180,180);
  donutHistoryAntiClockWise(canvasX/2,canvasY/2,600+sizeAdd,bass_history,180,0);
  donutHistoryAntiClockWise(canvasX/2,canvasY/2,600+sizeAdd,other_history,180,180);
  donutHistoryClockWise(canvasX/2,canvasY/2,600+sizeAdd,vocal_history,180,0);
  donutHistoryClockWise(canvasX/2,canvasY/2,600+sizeAdd,drum_history,180,180);
  donutHistoryClockWise(canvasX/2,canvasY/2,600+sizeAdd,bass_history,180,0);
  donutHistoryClockWise(canvasX/2,canvasY/2,600+sizeAdd,other_history,180,180);
}

if(counter <= 480){
  generateNoiseGrid(20); 
  blackScreen1 = map(other,65,66,255,0);
  fill(0,blackScreen1);
  rect(0,0,2*canvasX,2*canvasY);
  }
  
if(counter >= 2640-120 && counter <= 2640){
  let sizeAdd = 0
    if(drum > 67.5){
      sizeAdd = 200
    }else{
      sizeAdd = 0
    }
    let xToZero = map(counter,2640-120,2640,canvasX/2,0);
    let x2Tox = map(counter,2640-120,2640,canvasX/2,canvasX);
    let sizetrans = map(counter,2640-120,2640,600,900);
    let ZeroToOneEighty = map(counter,2640-120,2640,0,180);
    let OneEightyToZero = map(counter,2640-120,2640,180,0);
    donutHistoryAntiClockWise(xToZero,canvasY/2,sizetrans+sizeAdd,vocal_history,180,ZeroToOneEighty);
    donutHistoryAntiClockWise(x2Tox,canvasY/2,sizetrans+sizeAdd,drum_history,180,OneEightyToZero);
    donutHistoryAntiClockWise(xToZero,canvasY/2,sizetrans+sizeAdd,bass_history,180,ZeroToOneEighty);
    donutHistoryAntiClockWise(x2Tox,canvasY/2,sizetrans+sizeAdd,other_history,180,OneEightyToZero);
    donutHistoryClockWise(x2Tox,canvasY/2,sizetrans+sizeAdd,vocal_history,180,ZeroToOneEighty);
    donutHistoryClockWise(xToZero,canvasY/2,sizetrans+sizeAdd,drum_history,180,OneEightyToZero);
    donutHistoryClockWise(x2Tox,canvasY/2,sizetrans+sizeAdd,bass_history,180,ZeroToOneEighty);
    donutHistoryClockWise(xToZero,canvasY/2,sizetrans+sizeAdd,other_history,180,OneEightyToZero);
}

if(counter >= 6900-120 && counter <= 6900){
  let sizeAdd = 0
    if(drum > 67.5){
      sizeAdd = 200
    }else{
      sizeAdd = 0
    }
    let xToZero = map(counter,6900-120,6900,canvasX/2,0);
    let x2Tox = map(counter,6900-120,6900,canvasX/2,canvasX);
    let sizetrans = map(counter,6900-120,6900,600,900);
    let ZeroToOneEighty = map(counter,6900-120,6900,0,180);
    let OneEightyToZero = map(counter,6900-120,6900,180,0);
    donutHistoryAntiClockWise(xToZero,canvasY/2,sizetrans+sizeAdd,vocal_history,180,ZeroToOneEighty);
    donutHistoryAntiClockWise(x2Tox,canvasY/2,sizetrans+sizeAdd,drum_history,180,OneEightyToZero);
    donutHistoryAntiClockWise(xToZero,canvasY/2,sizetrans+sizeAdd,bass_history,180,ZeroToOneEighty);
    donutHistoryAntiClockWise(x2Tox,canvasY/2,sizetrans+sizeAdd,other_history,180,OneEightyToZero);
    donutHistoryClockWise(x2Tox,canvasY/2,sizetrans+sizeAdd,vocal_history,180,ZeroToOneEighty);
    donutHistoryClockWise(xToZero,canvasY/2,sizetrans+sizeAdd,drum_history,180,OneEightyToZero);
    donutHistoryClockWise(x2Tox,canvasY/2,sizetrans+sizeAdd,bass_history,180,ZeroToOneEighty);
    donutHistoryClockWise(xToZero,canvasY/2,sizetrans+sizeAdd,other_history,180,OneEightyToZero);
}

if(counter >= 10920-120 && counter <= 10920){
  let sizeAdd = 0
    if(drum > 67.5){
      sizeAdd = 200
    }else{
      sizeAdd = 0
    }
    let xToZero = map(counter,10920-120,10920,canvasX/2,0);
    let x2Tox = map(counter,10920-120,10920,canvasX/2,canvasX);
    let sizetrans = map(counter,10920-120,10920,600,900);
    let ZeroToOneEighty = map(counter,10920-120,10920,0,180);
    let OneEightyToZero = map(counter,10920-120,10920,180,0);
    donutHistoryAntiClockWise(xToZero,canvasY/2,sizetrans+sizeAdd,vocal_history,180,ZeroToOneEighty);
    donutHistoryAntiClockWise(x2Tox,canvasY/2,sizetrans+sizeAdd,drum_history,180,OneEightyToZero);
    donutHistoryAntiClockWise(xToZero,canvasY/2,sizetrans+sizeAdd,bass_history,180,ZeroToOneEighty);
    donutHistoryAntiClockWise(x2Tox,canvasY/2,sizetrans+sizeAdd,other_history,180,OneEightyToZero);
    donutHistoryClockWise(x2Tox,canvasY/2,sizetrans+sizeAdd,vocal_history,180,ZeroToOneEighty);
    donutHistoryClockWise(xToZero,canvasY/2,sizetrans+sizeAdd,drum_history,180,OneEightyToZero);
    donutHistoryClockWise(x2Tox,canvasY/2,sizetrans+sizeAdd,bass_history,180,ZeroToOneEighty);
    donutHistoryClockWise(xToZero,canvasY/2,sizetrans+sizeAdd,other_history,180,OneEightyToZero);
}

if(counter >= 2640 && counter <= 4740-120 || counter >= 6900 && counter <= 8940-120 || counter >= 10920 && counter <= 12960-120 ){
let sizeAdd = 0
  if(drum > 70){
    sizeAdd = 200
  }else{
    sizeAdd = 0  
  }
  donutHistoryAntiClockWise(0,canvasY/2,900+sizeAdd,vocal_history,180,180);
  donutHistoryAntiClockWise(canvasX,canvasY/2,900+sizeAdd,drum_history,180,0);
  donutHistoryAntiClockWise(0,canvasY/2,900+sizeAdd,bass_history,180,180);
  donutHistoryAntiClockWise(canvasX,canvasY/2,900+sizeAdd,other_history,180,0);
  donutHistoryClockWise(canvasX,canvasY/2,900+sizeAdd,vocal_history,180,180);
  donutHistoryClockWise(0,canvasY/2,900+sizeAdd,drum_history,180,0);
  donutHistoryClockWise(canvasX,canvasY/2,900+sizeAdd,bass_history,180,180);
  donutHistoryClockWise(0,canvasY/2,900+sizeAdd,other_history,180,0);
}

if(counter >= 4740-120 && counter <= 4740){
  let sizeAdd = 0
    if(drum > 67.5){
      sizeAdd = 200
    }else{
      sizeAdd = 0
    }
    //All these names are actually false and are flipped to go in the reverse direction suggested in the name
    let xToZero = map(counter,4740-120,4740,0,canvasX/2);
    let x2Tox = map(counter,4740-120,4740,canvasX,canvasX/2);
    let sizetrans = map(counter,4740-120,4740,900,600);
    let ZeroToOneEighty = map(counter,4740-120,4740,180,0);
    let OneEightyToZero = map(counter,4740-120,4740,0,180);
    donutHistoryAntiClockWise(xToZero,canvasY/2,sizetrans+sizeAdd,vocal_history,180,ZeroToOneEighty);
    donutHistoryAntiClockWise(x2Tox,canvasY/2,sizetrans+sizeAdd,drum_history,180,OneEightyToZero);
    donutHistoryAntiClockWise(xToZero,canvasY/2,sizetrans+sizeAdd,bass_history,180,ZeroToOneEighty);
    donutHistoryAntiClockWise(x2Tox,canvasY/2,sizetrans+sizeAdd,other_history,180,OneEightyToZero);
    donutHistoryClockWise(x2Tox,canvasY/2,sizetrans+sizeAdd,vocal_history,180,ZeroToOneEighty);
    donutHistoryClockWise(xToZero,canvasY/2,sizetrans+sizeAdd,drum_history,180,OneEightyToZero);
    donutHistoryClockWise(x2Tox,canvasY/2,sizetrans+sizeAdd,bass_history,180,ZeroToOneEighty);
    donutHistoryClockWise(xToZero,canvasY/2,sizetrans+sizeAdd,other_history,180,OneEightyToZero);
  
}
if(counter >= 8940-120 && counter <= 8940){
  let sizeAdd = 0
    if(drum > 67.5){
      sizeAdd = 200
    }else{
      sizeAdd = 0
    }
    //All these names are actually false and are flipped to go in the reverse direction suggested in the name
    let xToZero = map(counter,8940-120,8940,0,canvasX/2);
    let x2Tox = map(counter,8940-120,8940,canvasX,canvasX/2);
    let sizetrans = map(counter,8940-120,8940,900,600);
    let ZeroToOneEighty = map(counter,8940-120,8940,180,0);
    let OneEightyToZero = map(counter,8940-120,8940,0,180);
    donutHistoryAntiClockWise(xToZero,canvasY/2,sizetrans+sizeAdd,vocal_history,180,ZeroToOneEighty);
    donutHistoryAntiClockWise(x2Tox,canvasY/2,sizetrans+sizeAdd,drum_history,180,OneEightyToZero);
    donutHistoryAntiClockWise(xToZero,canvasY/2,sizetrans+sizeAdd,bass_history,180,ZeroToOneEighty);
    donutHistoryAntiClockWise(x2Tox,canvasY/2,sizetrans+sizeAdd,other_history,180,OneEightyToZero);
    donutHistoryClockWise(x2Tox,canvasY/2,sizetrans+sizeAdd,vocal_history,180,ZeroToOneEighty);
    donutHistoryClockWise(xToZero,canvasY/2,sizetrans+sizeAdd,drum_history,180,OneEightyToZero);
    donutHistoryClockWise(x2Tox,canvasY/2,sizetrans+sizeAdd,bass_history,180,ZeroToOneEighty);
    donutHistoryClockWise(xToZero,canvasY/2,sizetrans+sizeAdd,other_history,180,OneEightyToZero);
  
}
if(counter >= 12960-120 && counter <= 12960){
  let sizeAdd = 0
    if(drum > 67.5){
      sizeAdd = 200
    }else{
      sizeAdd = 0
    }
    //All these names are actually false and are flipped to go in the reverse direction suggested in the name
    let xToZero = map(counter,12960-120,12960,0,canvasX,0);
    let x2Tox = map(counter,12960-120,12960,canvasX,canvasX/2);
    let sizetrans = map(counter,12960-120,12960,900,600);
    let ZeroToOneEighty = map(counter,12960-120,12960,180,0);
    let OneEightyToZero = map(counter,12960-120,12960,0,180);
    donutHistoryAntiClockWise(xToZero,canvasY/2,sizetrans+sizeAdd,vocal_history,180,ZeroToOneEighty);
    donutHistoryAntiClockWise(x2Tox,canvasY/2,sizetrans+sizeAdd,drum_history,180,OneEightyToZero);
    donutHistoryAntiClockWise(xToZero,canvasY/2,sizetrans+sizeAdd,bass_history,180,ZeroToOneEighty);
    donutHistoryAntiClockWise(x2Tox,canvasY/2,sizetrans+sizeAdd,other_history,180,OneEightyToZero);
    donutHistoryClockWise(x2Tox,canvasY/2,sizetrans+sizeAdd,vocal_history,180,ZeroToOneEighty);
    donutHistoryClockWise(xToZero,canvasY/2,sizetrans+sizeAdd,drum_history,180,OneEightyToZero);
    donutHistoryClockWise(x2Tox,canvasY/2,sizetrans+sizeAdd,bass_history,180,ZeroToOneEighty);
    donutHistoryClockWise(xToZero,canvasY/2,sizetrans+sizeAdd,other_history,180,OneEightyToZero);
  
}

if(counter >= 12960){
  let sizeFade = map(counter,12960,14051,600,0);
    donutHistoryAntiClockWise(canvasX/2,canvasY/2,sizeFade,vocal_history,180,0);
    donutHistoryAntiClockWise(canvasX/2,canvasY/2,sizeFade,drum_history,180,180);
    donutHistoryAntiClockWise(canvasX/2,canvasY/2,sizeFade,bass_history,180,0);
    donutHistoryAntiClockWise(canvasX/2,canvasY/2,sizeFade,other_history,180,180);
    donutHistoryClockWise(canvasX/2,canvasY/2,sizeFade,vocal_history,180,0);
    donutHistoryClockWise(canvasX/2,canvasY/2,sizeFade,drum_history,180,180);
    donutHistoryClockWise(canvasX/2,canvasY/2,sizeFade,bass_history,180,0);
    donutHistoryClockWise(canvasX/2,canvasY/2,sizeFade,other_history,180,180);
}

function donutHistoryClockWise(centerX,centerY,circleRadius,audioType,degrees,offsetAngle){
  let max = circleRadius/100

  let fullCircle = degrees
  if(audioType.length <= degrees){
    fullCircle = audioType.length
  }
  else{
    fullCircle = degrees
  }

  fill(0,0,0,65);
  beginShape();
  for(i=0;i<fullCircle;i++){
    vertex((centerX - centerX) * cos(i+offsetAngle) - ((centerY-((audioType[fullCircle-i])*max)) - centerY) * sin(i+offsetAngle) + centerX,
          (centerX - centerX) * sin(i+offsetAngle) + ((centerY-((audioType[fullCircle-i])*max)) - centerY) * cos(i+offsetAngle) + centerY)
    
  }
  vertex((centerX - centerX) * cos(i+offsetAngle) - ((centerY-((audioType[0])*max)) - centerY) * sin(i+offsetAngle) + centerX,
        (centerX - centerX) * sin(i+offsetAngle) + ((centerY-((audioType[0])*max)) - centerY) * cos(i+offsetAngle) + centerY)
  endShape();
}

function donutHistoryAntiClockWise(centerX,centerY,circleRadius,audioType,degrees,offsetAngle){
  let max = circleRadius/100

  let fullCircle = degrees
  if(audioType.length <= degrees){
    fullCircle = audioType.length
  }
  else{
    fullCircle = degrees
  }
  
  fill(0,0,0,65);
  beginShape();
  for(i=0;i<fullCircle;i++){
    vertex((centerX - centerX) * cos(-i+offsetAngle) - ((centerY-((audioType[fullCircle-i])*max)) - centerY) * sin(-i+offsetAngle) + centerX,
          (centerX - centerX) * sin(-i+offsetAngle) + ((centerY-((audioType[fullCircle-i])*max)) - centerY) * cos(-i+offsetAngle) + centerY)
    
  }
  vertex((centerX - centerX) * cos(-i+offsetAngle) - ((centerY-((audioType[0])*max)) - centerY) * sin(-i+offsetAngle) + centerX,
        (centerX - centerX) * sin(-i+offsetAngle) + ((centerY-((audioType[0])*max)) - centerY) * cos(-i+offsetAngle) + centerY)
  endShape();
}
}

