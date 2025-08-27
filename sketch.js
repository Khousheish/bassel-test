let things = [];

function setup() {
  createCanvas(800, 800);

  // Create screen reader accessible description
  describe("moving shapes of squares, circles and triangles");

  for (let i = 0; i < 7; i++) {
    let s1 = new Square(random(width), random(height), random(40, 100));
    things.push(s1);
  }
  for (let i = 0; i < 7; i++) {
    let c1 = new Circle(random(width), random(height), random(40, 100));
    things.push(c1);
  }
   for (let i = 0; i < 7; i++) {
    let t1 = new Triangle(random(width), random(height), random(40, 100));
    things.push(t1);
  }
}

function draw() {
  background("aqua");
  things.forEach(t => {


    let speed = random(1, 5);
    t.move(speed, width, height);
    t.draw();
  });
}

class Thing {
  constructor(posX, posY, size) {
    this.posX = posX;
    this.posY = posY;
    this.size = size;
    this.direction = random(2 * Math.PI);
  }

  static move(speed, canvasWidth, canvasHeight) {
    //randomly move each thing
    //  this.posX += cos(this.direction) * speed;
    //  this.posY += sin(this.direction) * speed;
  }
}


class Circle extends Thing {
  constructor(posX, posY, size) {
    super(posX, posY, size);
    this.direction = Math.PI / 2 * random([-1, 1]);
  }

  draw() {
    circle(this.posX, this.posY, this.size);
  }

  move(speed, canvasWidth, canvasHeight) {
    // super.move(speed, canvasWidth, canvasHeight);
    this.posX += cos(this.direction) * speed;
    this.posY += sin(this.direction) * speed;
    if (this.posX + this.size / 2 >= canvasWidth) {
      this.direction = Math.PI - this.direction;
      this.posX -= 1;
    } else if (this.posX - this.size / 2 <= 0) {
      this.direction = Math.PI - this.direction;
      this.posX += 1;
    }

    if (this.posY + this.size / 2 >= canvasHeight) {
      this.direction = -this.direction;
      this.posY -= 1;
    } else if (this.posY - this.size / 2 <= 0) {
      this.direction = -this.direction;
      this.posY += 1;
    }
  }
}

class Square extends Thing {
  constructor(posX, posY, size) {
    super(posX, posY, size);
    this.direction = Math.PI * random([0, 1]);
  }

  draw() {
    rect(this.posX, this.posY, this.size, this.size);
  }

  move(speed, canvasWidth, canvasHeight) {
    this.posX += cos(this.direction) * speed;
    this.posY += sin(this.direction) * speed;
    if (this.posX + this.size >= canvasWidth) {
      this.direction = Math.PI - this.direction;
      this.posX -= 1;
    } else if (this.posX <= 0) {
      this.direction = Math.PI - this.direction;
      this.posX += 1;
    }

    if (this.posY + this.size >= canvasHeight) {
      this.direction = -this.direction;
      this.posY -= 1;
    } else if (this.posY <= 0) {
      this.direction = -this.direction;
      this.posY += 1;
    }
  }
}


class Triangle extends Thing {
  constructor(posX, posY, size) {
    super(posX, posY, size);
    this.direction = Math.PI/4 * random([-1, 1]);
  }

  draw() {
    triangle(this.posX, this.posY, this.posX + this.size/2, this.posY - this.size, this.posX + this.size, this.posY);
  }

  move(speed, canvasWidth, canvasHeight) {
    this.posX += cos(this.direction) * speed;
    this.posY += sin(this.direction) * speed;
    if (this.posX + this.size >= canvasWidth) {
      this.direction = Math.PI - this.direction;
      this.posX -= 1;
    } else if (this.posX <= 0) {
      this.direction = Math.PI - this.direction;
      this.posX += 1;
    }

    if (this.posY >= canvasHeight) {
      this.direction = -this.direction;
      this.posY -= 1;
    } else if (this.posY - this.size <= 0) {
      this.direction = -this.direction;
      this.posY += 1;
    }
  }
}