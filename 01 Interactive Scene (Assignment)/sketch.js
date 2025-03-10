// Interactive Scene
// Sandha, Abhay
// Febuary 11, 2025

//Global Variables
let p = 0;
let l = 0;
let fishX;
let fishY;
let fishSize;
let numFish = 5;
let currentBack = 0;
let turtle;


//Turtle 
function preload() {
  turtle = loadImage("assets/Turtle.jpg");

}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(51, 153, 200);

  //Coordinates / values
  fishX = [];
  fishY = [];
  fishSize = 25;

  let currentBack = 0;

//turtle coords
  let turtleX = width / 2;
  let turtleY = height / 2;

  // make X and Y Pos, fo the fish
  for (let i = 0; i < numFish; i++) {
    fishX.push(random(0, windowWidth));
    fishY.push(random(0, windowHeight));

  }

}

function draw() {
  //---------Background----------\\
  switch (currentBack) {
  case 0:
    background(200, 200, 255);  // Blue
    break;
  case 1:
    background(255, 255, 255); // White
    break;
  case 2:
    background(50, 50, 50); // gray
    break;
  case 3:
    background(213, 197, 138); // Khaki
    break;
  }

  //-----Text-----\\
  fill(0);
  textSize(20);
  text("Sandha, Abhay", 10, height - 20);

  // draw turtle
  imageMode(CENTER);

  image(turtle, mouseX , mouseY, 100, 100);


  //Lesser Bubbles

  if (p % 60 === 0) {

    bubble(2);

  }
  p = p + 2;


  // Increase the amount of Fish
  if (l % 60 === 0) {
    for (let i = 0; i < numFish; i++) {
      fishX[i] = random(0, windowWidth);
      fishY[i] = random(0, windowHeight);
      fish(fishX[i], fishY[i], fishSize);
    }
    l = l + 10;
  }

  // Moving the fish to the right
  for (let i = 0; i < numFish; i++) {

    fishX[i] += 3;
    // Reset fish's position if it when off the screen
    if (fishX[i] > windowWidth + fishSize) {

      fishX[i] = -fishSize;
      fishY[i] = random(0, windowHeight);
    }

    fish(fishX[i], fishY[i], fishSize);
  }

}


// backgroudn key change
function keyPressed() {
  if (key === " ") {
    currentBack = (currentBack + 1) % 4;
  }
}



//---------Bubble---------\\

function bubble(rate) {


  let bubbleSize = 0;
  let numBubbles = random(5, 30);
  fill(255, 0, 0);

  
  for (let bubbles = 0; bubbles <= numBubbles * rate; bubbles++) {
    bubbleSize = random(5, 30);
    circle(random(0, windowWidth), random(0, windowHeight), bubbleSize);
  }
}





//------Fish-------\\

function fish(fishX, fishY, fishSize) {


  //fish body
  ellipse(fishX, fishY, fishSize * 1.5, fishSize);

  //Tail 
  tailX = fishX - fishSize * 0.75;
  tailY = fishY;
  triangle(tailX, tailY, tailX - fishSize * 0.4, tailY - fishSize * 0.4, tailX - fishSize * 0.4, tailY + fishSize * 0.4);

  //Eyes
  fill(255);
  ellipse(fishX + fishSize * 0.5, fishY - fishSize * 0.2, fishSize * 0.2, fishSize * 0.2);
  fill(0);
  ellipse(fishX + fishSize * 0.55, fishY - fishSize * 0.2, fishSize * 0.1, fishSize * 0.1);

}


