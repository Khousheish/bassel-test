function setup() {
  createCanvas(1024, 1024);

  // Create screen reader accessible description
  describe('moving shapes of squares, circles and triangles');
}

function draw() {
  background("aqua");
  if (mouseIsPressed === true) {
  fill(0);
} else {
  fill(255);
}

  translate(width/2, height/2);
  rotate(frameCount/100);
  stroke(255);
  strokeWeight(15);
  line(0, 0, 150, 0);
  circle(140, 0, 50);
}
