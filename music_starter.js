let Horse;
let firstRun = true
let numberOfTimes = 8 //Changes the Number of times the 4 audio leevels are dsipalyed 


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
stroke(255);

let circleRadius = 350
let v1 = map(vocal,0,100,0,circleRadius);
let d1 = map(drum,0,100,0,circleRadius);
let b1 = map(bass,0,100,0,circleRadius);
let o1 = map(other,0,100,0,circleRadius);
let v2 = map(vocal,0,100,0,(3/4)*circleRadius);
let d2 = map(drum,0,100,0,(3/4)*circleRadius);
let b2 = map(bass,0,100,0,(3/4)*circleRadius);
let o2 = map(other,0,100,0,(3/4)*circleRadius);
    
let centerX = canvasX / 2;
let centerY = canvasY / 2;


const AudioLevelPoint1 = [];
const AudioLevelPoint2 = [];

for(let i = 0; i < 4*numberOfTimes; i+=4){
  AudioLevelPoint1.push([centerX + (v1 * cos((i+0)*360/(4*numberOfTimes))), centerY + (v1 * sin((i+0)*360/(4*numberOfTimes)))]);
  AudioLevelPoint1.push([centerX + (d1 * cos((i+1)*360/(4*numberOfTimes))), centerY + (d1 * sin((i+1)*360/(4*numberOfTimes)))]);
  AudioLevelPoint1.push([centerX + (b1 * cos((i+2)*360/(4*numberOfTimes))), centerY + (b1 * sin((i+2)*360/(4*numberOfTimes)))]);
  AudioLevelPoint1.push([centerX + (o1 * cos((i+3)*360/(4*numberOfTimes))), centerY + (o1 * sin((i+3)*360/(4*numberOfTimes)))]);
  AudioLevelPoint2.push([centerX + (b2 * cos((i+0)*360/(4*numberOfTimes))), centerY + (b2 * sin((i+0)*360/(4*numberOfTimes)))]);
  AudioLevelPoint2.push([centerX + (o2 * cos((i+1)*360/(4*numberOfTimes))), centerY + (o2 * sin((i+1)*360/(4*numberOfTimes)))]);
  AudioLevelPoint2.push([centerX + (v2 * cos((i+2)*360/(4*numberOfTimes))), centerY + (v2 * sin((i+3)*360/(4*numberOfTimes)))]);
  AudioLevelPoint2.push([centerX + (d2 * cos((i+3)*360/(4*numberOfTimes))), centerY + (d2 * sin((i+4)*360/(4*numberOfTimes)))]);
} 
fill(20,243,127);
beginShape();
    for(let i = 0; i < 4*numberOfTimes; i++){
      vertex(AudioLevelPoint1[i][0],AudioLevelPoint1[i][1]);
    }
endShape();

fill(213,54,127);
beginShape();
    for(let i = 0; i < 4*numberOfTimes; i++){
      vertex(AudioLevelPoint2[i][0],AudioLevelPoint2[i][1]);
    }
endShape();

    for(let i = 0; i < 4*numberOfTimes; i++){
      circle(AudioLevelPoint1[i][0],AudioLevelPoint1[i][1],10);
    }

    for(let i = 0; i < 4*numberOfTimes; i++){
      circle(AudioLevelPoint2[i][0],AudioLevelPoint2[i][1],10);
    }
  
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



