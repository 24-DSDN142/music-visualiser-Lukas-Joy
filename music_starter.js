//empty arrays that the words and the volume values from the vocal, drum, bass and other channels are storyed as history
let words_history = [];
let vocal_history = [];
let drum_history = [];
let bass_history = [];
let other_history = [];

// function that adds the values from words, voca, drum, bass and other into the empty arrays above each frame
function add_to_history(history, d) {// this function is based of the framework from the fucntion of the same name in the music_history visualiser example/statrer option
  history.push(d);// pushes the value from the words, vocal, drum, bass or other channel into its specified array based off of the history and d variables
  if(history.length >= 361) {// stops the history from  being longer that a full cricle worth of degrees as there is no reason for it to be longer then that
    history.shift();
  }
}

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {

//noise grid function used to draw the static noise in the beginning
  function generateNoiseGrid(gridSize) {// gridSize is the dimensions in pixels of each of the squares in the static noise backgorund
    for (let x = 0; x < width; x += gridSize) {// for loop that outputs the x coordinate for each column
      for (let y = 0; y < height; y += gridSize) {// for loop that outputs the y coordinate for each row
        let fillColour = map(random(),0.5,0.50000000000000000001,0,255); // if(){} statement disguised as a map(); to randomly output 0 or 255 for black and white for the static noise background
        fill(fillColour);// uses if statment diguised as a map from above to randomly assign either black or white fill to each sqaure in the staic noise grid each frame
        rect(x, y, gridSize, gridSize);// draws each of the squares in the static noise background in the grid in the coordinate outputted from the for loops
      }
    }
  }
  //these two functions are no longer in use but are the orginal framework that the circular musci hisotyr visualser is based off of
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


  // lines the call the add_to_history function from lines 9-14 
add_to_history(words_history, words);
add_to_history(vocal_history, vocal);
add_to_history(drum_history, drum);
add_to_history(bass_history, bass);
add_to_history(other_history, other);

// Section One Static noise with black screen on beats
if(counter <= 480){// only draws for first 8 seconds * 60 frames per second
  generateNoiseGrid(20);// draws static noise grid with square size of 20 pixels
  blackScreen1 = map(other,65,66,255,0);// another if statement disguised as a map used to output a black coulour value if the other volume goes above 66 to match the beat in the section
  fill(0,blackScreen1);// coulours the rectangle that covers the screen blakc if the other volume goes above 65 to mach the beats in the section
  rect(0,0,2*canvasX,2*canvasY);// drwas the rectangle mentioned above
  }

// section two, four, six
// mirrored history visualiser in the center of the screen
if(counter >= 480 && counter <= 2640-120 || counter >= 4740 && counter <= 6900-120 || counter >= 8940 && counter <= 10920-120 ){
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

// transition animations out of the above sections 
// each of the animations between sections uses map() to transition each of the variables that are different between the sections to smoothly to transition the 
// positioning, size, angle, etc between the two states
// each of the animation sections remaps the counter value from the beginning of animation section and end of the animation sections to the previous sections value
// and next sections value so at the beginning of the animation sectino the value is the same as in the previous section and by the end of the animation section the
// map has eiather incerased or decreased the value smoothly to match the variables value in the next seciton.
// animation section two into three
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
// animation section four into five
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
// animation section six into seven
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

// section three, five, seven
// mirrored history visualiser on the outer sides of the screen
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

// transtiion animations out of the above sections
// each of the animations between sections uses map() to transition each of the variables that are different between the sections to smoothly to transition the 
// positioning, size, angle, etc between the two states
// each of the animation sections remaps the counter value from the beginning of animation section and end of the animation sections to the previous sections value
// and next sections value so at the beginning of the animation sectino the value is the same as in the previous section and by the end of the animation section the
// map has eiather incerased or decreased the value smoothly to match the variables value in the next seciton.
// animation section three into four
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
// animation section five into six
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
// animation ssection seven into eight
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

// section eight
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

// circular history function in clockwise rotation
function donutHistoryClockWise(centerX,centerY,circleRadius,audioType,degrees,offsetAngle){
  let max = circleRadius/100 //calculates the max multiplier to use on the audioType value that the called function is using

  // stops the code from breaking in the beginning of the running of the code and then keeps the spawn opint for the cufrrent audioType avleu as the mirror line
  let fullCircle = degrees
  if(audioType.length <= degrees){
    fullCircle = audioType.length
  }
  else{
    fullCircle = degrees
  }

  fill(0,0,0,100);// slighntly transparent black fill shape so you can see all of the audioType when overlayed
  beginShape();// custom shape used to draw the circular history music display
  for(i=0;i<fullCircle;i++){
    //new X and Y coordinates calculated from the the old X and Y coordinates using the audioTypes hiostry array to get the different old X and Y coordinates
    // and calculating the new coordinates using an equation shared to me by Wung (from danceswithcode.net) that is used to rotate a poitn around an arbritary center
    // the code runs through each of the points in the array and runs them through the calculation an creates a vertex for the custom shape at the calculated postion
    // before repeating the first calculated point and then finishing the shape
    vertex((centerX - centerX) * cos(i+offsetAngle) - ((centerY-((audioType[fullCircle-i])*max)) - centerY) * sin(i+offsetAngle) + centerX,// x coordinate
          (centerX - centerX) * sin(i+offsetAngle) + ((centerY-((audioType[fullCircle-i])*max)) - centerY) * cos(i+offsetAngle) + centerY) // y coordinate
  }
  // repeated first calculated coordiante to finish the shape 
  vertex((centerX - centerX) * cos(i+offsetAngle) - ((centerY-((audioType[0])*max)) - centerY) * sin(i+offsetAngle) + centerX,
        (centerX - centerX) * sin(i+offsetAngle) + ((centerY-((audioType[0])*max)) - centerY) * cos(i+offsetAngle) + centerY)
  endShape();
}

// circular history function in anti-clockwise rotation
function donutHistoryAntiClockWise(centerX,centerY,circleRadius,audioType,degrees,offsetAngle){
  let max = circleRadius/100 //calculates the max multiplier to use on the audioType value that the called function is using

  // stops the code from breaking in the beginning of the running of the code and then keeps the spawn opint for the cufrrent audioType avleu as the mirror line
  let fullCircle = degrees
  if(audioType.length <= degrees){
    fullCircle = audioType.length
  }
  else{
    fullCircle = degrees
  }
  
  fill(0,0,0,100);// slighntly transparent black fill shape so you can see all of the audioType when overlayed
  beginShape();// custom shape used to draw the circular history music display
  for(i=0;i<fullCircle;i++){
    //new X and Y coordinates calculated from the the old X and Y coordinates using the audioTypes hiostry array to get the different old X and Y coordinates
    // and calculating the new coordinates using an equation shared to me by Wung (from danceswithcode.net) that is used to rotate a poitn around an arbritary center
    // the code runs through each of the points in the array and runs them through the calculation an creates a vertex for the custom shape at the calculated postion
    // before repeating the first calculated point and then finishing the shape
    vertex((centerX - centerX) * cos(-i+offsetAngle) - ((centerY-((audioType[fullCircle-i])*max)) - centerY) * sin(-i+offsetAngle) + centerX, // X coordinate 
          (centerX - centerX) * sin(-i+offsetAngle) + ((centerY-((audioType[fullCircle-i])*max)) - centerY) * cos(-i+offsetAngle) + centerY) // Y coordinate  
  }
  // repeated first calculated coordiante to finish the shape 
  vertex((centerX - centerX) * cos(-i+offsetAngle) - ((centerY-((audioType[0])*max)) - centerY) * sin(-i+offsetAngle) + centerX,// First X Coordinate
        (centerX - centerX) * sin(-i+offsetAngle) + ((centerY-((audioType[0])*max)) - centerY) * cos(-i+offsetAngle) + centerY)// first y coordinate
  endShape();
}
}

