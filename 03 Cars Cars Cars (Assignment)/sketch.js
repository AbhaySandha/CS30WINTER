// Cars 
// Sandha, Abhay
// March 21, 2025

let myCar = [];
let vehicles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  drawRoad();
  // Create multiple vehicles with random properties
  myCar.push(new Vehicle(0, 100, 200, "red", 1, 3));  // Car moving right
  myCar.push(new Vehicle(1, 300, 300, "blue",0, 2)); // Truck moving left
  myCar.push(new Vehicle(0, 500, 400, "green", 1, 4)); // Car moving right
  myCar.push(new Vehicle(1, 700, 500, "yellow", 0, 2.5)); // Truck moving left


  //   //                  type    x     y        color   direction   speed
  //   myCar = new Vehicle(1,     100,  500,     "red",    0,          2);
  //  // myCar.display();

}

function draw() {
  background(220);
  drawRoad();

  for (let i of myCar) {
    i.update();
    i.display();

  }

}


function drawRoad() {
  // Road

  fill(0);
  rectMode(CORNER);
  rect(0, 0, windowWidth, windowHeight);
  noStroke();
  fill("yellow");
  let x = windowHeight / 2;

  // Yellow Seperation Line
  for (let x = 0; x < windowWidth; x += windowWidth / 15 * 2) {
    rect(x, windowHeight / 2, windowWidth / 15, 5);
  }
}

class Vehicle {
  constructor(type, x, y, color, direction, speed) {
    this.x = x;
    this.y = y;
    this.carColor = random(255), random(255), random(255);
    this.truckColor = random(255), random(255), random(255);
    this.type = type;
    this.direction = direction;
    this.xSpeed = speed;
  }

  display() {
    // draw car
    if (this.type === 0) {
      rectMode(CORNER);
      // Tires
      fill(255);
      ellipse(this.x + 8, this.y + 25, 15, 8,);  //Left bottom
      ellipse(this.x + 8, this.y, 15, 8);        //Left up
      ellipse(this.x + 42, this.y + 25, 15, 8,); //Right bottom
      ellipse(this.x + 42, this.y, 15, 8);       //Right up
      // Main Body
      fill(this.carColor);
      rect(this.x, this.y, 50, 25);


    }
    // draw truck
    if (this.type === 1) {

      // Tires
      fill(255);
      ellipse(this.x + 8 * 1.5, this.y + 75 / 2, 15, 8,);  //Left bottom
      ellipse(this.x + 8 * 1.5, this.y, 15, 8);        //Left up
      ellipse(this.x + 42 * 1.5, this.y + 25 * 1.5, 15, 8,); //Right bottom
      ellipse(this.x + 42 * 1.5, this.y, 15, 8);       //Right up

      // Main Body
      fill(this.truckColor);
      rect(this.x, this.y, 50 * 1.50, 25 * 1.50);

    }
  }

  update() {
    // Direction
    // Left
    if (this.direction === 0) {
      this.x -= this.xSpeed;   // left
    }
    else {
      this.x += this.xSpeed; // right
    }

    // Wrap around
    if (this.x > width) {
      this.x = 0;
    }
    if (this.x < 0) {
      this.x = width;

    }

  }
}






