function setup() {
  createCanvas(displayWidth, displayHeight);
  rectMode(CENTER);
}

function draw() {
  background(50);
  noStroke();
  if (touchX > touchY) {
  	fill(255,0,0);
  } else if (touchX < touchY) {
  	fill(0,255,0);
  } else {
  	fill(0,0,255);
  }

  rect(width/2, height/2, touchX, touchY);
}

function touchMoved() {
  // otherwise the display will move around
  // with your touch :(
  return false;
}
