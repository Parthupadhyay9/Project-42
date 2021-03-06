function setup() {
  createCanvas(1200, 800);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(200, 200);
  rotate(-90);
  let hr = hour();
  let mn = minute();
  let sec = second();


  strokeWeight(8);
  stroke(255,0,0);
  noFill();
  let secondAngle = map(sec, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle);

  stroke(0,255,0);
  let minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minuteAngle);

  stroke(0,0,255);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hourAngle);

  push();
  rotate(secondAngle);
  stroke(255,0,0);
  line(0, 0, 100, 0);
  pop();
  
  
  push();
  rotate(minuteAngle);
  stroke(0,255,0);
  line(0, 0, 75, 0);
  pop();
  
  
  push();
  rotate(hourAngle);
  stroke(0,0,255);
  line(0, 0, 50, 0);
  pop();
  
  stroke(255);
  point(0,0);

  //fill(255);
  // noStroke();
  //text(hr + ':' + min + ':' + sec,10,200);
}
