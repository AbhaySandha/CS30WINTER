// Cars 
// Sandha, Abhay
// March 21, 2025

let myCar = [];
let vehicles = [];
let eastbound = [];
let westbound = [];

let lights;

let carAmount;

function setup() {
  createCanvas(windowWidth, windowHeight);
  carAmount = int(random(0, 50));
  drawRoad();
  lights = new trafficLight(width / 2, height / 2 - 100);

  // Cars
  // WestBound
  for (let i = 0; i < 5; i++) {
    let type = round(random(0, 1));
    let x = round(random(windowWidth));
    let y = round(random(windowHeight / 2)) - 60;
    let color = random(255);
    let direction = 0;
    let xSpeed = random(0, 15);
    westbound.push(new Vehicle(type, x, y, color, direction, xSpeed,));
  }
  //EastBound
  for (let i = 0; i < 5; i++) {
    let type = round(random(0, 1));
    let x = round(random(windowWidth));
    let y = random(windowHeight / 2 + 20, windowHeight);
    let color = random(255);
    let direction = 1;
    let xSpeed = random(0, 15);
    eastbound.push(new Vehicle(type, x, y, color, direction, xSpeed,));
  }


  // for (let i = 0; i <= carAmount; i++) {
  //   let type = round(random(0, 1));
  //   let x = round(random(windowWidth));
  //   let y = round(random(windowHeight / 2));
  //   let color = random(255);
  //   let direction = round(random(0, 1));
  //   let xSpeed = random(0, 15);

  //   if (direction === 0) {
  //     y = y - 60;
  //     myCar.push(new Vehicle(type, x, y, color, direction, xSpeed));  // up   
  //   }

  //   if (direction === 1) {
  //     y = random(windowHeight / 2 + 10, windowHeight);
  //     myCar.push(new Vehicle(type, x, y, color, direction, xSpeed));  // down
  //   }


  // }

  //   //                  type    x     y        color   direction   speed
  //   myCar = new Vehicle(1,     100,  500,     "red",    0,          2);
  //  // myCar.display();

}

function draw() {
  background(220);
  drawRoad();

  lights.update();
  lights.draw();
  
  showCars();


  // for (let i of westbound) {
  //   i.action();
  // }

  // for (let i of eastbound) {
  //   i.action();
  // }

}

function showCars(){
  // SHow Cars 
  for (let i of westbound) {
    if (lights.red()) {
      i.display(); 
    } 
    else {
      i.action();  
    }
  }
  // Show eastbound Cars 
  for (let i of eastbound) {
    if (lights.red()) {
      i.display(); 
    } 
    else {
      i.action();
    }
  }


}
function mousePressed() {
  let type = round(random(0, 1));
  let x = round(random(windowWidth));
  let y = round(random(windowHeight / 2)) - 60;
  let color = random(255);
  let direction = 0;
  let xSpeed = random(0, 15);

  // Spawn cars in westbound.
  if (keyIsDown(SHIFT)) {
    if (mouseButton === LEFT) {
      westbound.push(new Vehicle(type, x, y, color, direction, xSpeed,));
    }
    // }
    // // Spawn cars in eastbound.
    // if (mouseButton === LEFT) {
    //   let x = round(random(windowWidth));
    //   let y = random(windowHeight / 2 + 20, windowHeight);
    //   let color = random(255);
    //   let direction = 1;
    //   let xSpeed = random(0, 15);
    //   eastbound.push(new Vehicle(type, x, y, color, direction, xSpeed));
    // }
  }
  // Spaw cars in eastbound.
  else if (mouseButton === LEFT) {
    let x = round(random(windowWidth));
    let y = random(windowHeight / 2 + 20, windowHeight);
    let color = random(255);
    let direction = 1;
    let xSpeed = random(0, 15);
    eastbound.push(new Vehicle(type, x, y, color, direction, xSpeed));
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
    this.type = type;
    this.direction = direction;
    this.xSpeed = speed;
    this.carColor = [random(255), random(255), random(255)];
    this.truckColor = [random(255), random(255), random(255)];

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
  changeColor() {
    // Changes color

    this.carColor = [random(255), random(255), random(255)];
    this.truckColor = [random(255), random(255), random(255)];
  }


  speedUp() {
    // Increaes speed to maximun of 15

    if (this.xSpeed < 15) {
      this.xSpeed += 0.1;
    }
    else {
      this.xSpeed = 15;
    }
  }


  speedDown() {
    // Decreaes speed to minimun of 0

    if (this.xSpeed <= 15) {
      if (this.xSpeed > 0.1) {
        this.xSpeed -= 0.1;
      }
      else {
        this.xSpeed = 0;
      }

    }
  }


  update() {
    // console.log(this.xSpeed);

    // Direction
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
  action() {
    this.update();

    if (random(100) < 1) {    //Speeds up
      this.speedUp();
    }
    // SpeedDown
    if (random(100) < 1) {      // Speeds down
      this.speedDown();
    }

    if (random(100) < 1) {
      this.changeColor();   // Changes Color 
    }

    this.display();
  }
}


class trafficLight {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.lightColor = "green";
    this.time = 0;
  }

  draw() { 
    // draw the traffic lights
    
    if (this.lightColor === "red") {
      fill("red");
    }
    else {
      fill("gray");
    }
    ellipse(this.x + 20, this.y + 25, 20);
    if (this.lightColor === "green") {
      fill("green");
    }
    else {
      fill("gray");
    }
    ellipse(this.x + 20, this.y + 75, 20);
  }

  update() {

    if (this.lightColor === "red") {
      this.time--;
      if (this.time <= 0) {
        this.lightColor = "green";
      }
    }
  }

  redlight() {
    this.lightColor = "red";
    this.time = 120;
  }

  red() {
    return this.lightColor === "red";
  }

}

// Space for lights
function keyPressed() {
  if (keyCode === 32) {
    lights.redlight();
  }
}







