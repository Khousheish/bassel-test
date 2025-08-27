let circles = [];

function setup() {
  createCanvas(800, 800);

  // Create screen reader accessible description
  describe("moving shapes of squares, circles and triangles");

  for (let i = 0; i < 20; i++) {
    let c1 = new Circle(random(width), random(height), random(10, 100));
    circles.push(c1);
  }
}

function draw() {
  background("aqua");
  circles.forEach(c => {


      let speed = random(1, 5);
    c.move(speed, width, height);


    circle(c.posX, c.posY, c.diameter);
  });
}


class Circle {
    constructor(posX, posY, diameter) {
        this.posX = posX;
        this.posY = posY;
        this.diameter = diameter;
        this.direction = random(2*Math.PI);
    }

    move(speed, canvasWidth, canvasHeight) {
      //randomly move each circle
      this.posX += cos(this.direction) * speed;
      this.posY += sin(this.direction) * speed;

      if(this.posX + this.diameter/2 >= canvasWidth) {
        this.direction = Math.PI - this.direction;
        this.posX -= 1;
      } else if(this.posX - this.diameter/2 <= 0) {
        this.direction = Math.PI - this.direction;
        this.posX += 1;
      }

      if(this.posY + this.diameter/2 >= canvasHeight) {
        this.direction = -this.direction;
        this.posY -= 1;
      } else if(this.posY - this.diameter/2 <= 0) {
        this.direction = -this.direction;
        this.posY += 1;
      }
    }
}