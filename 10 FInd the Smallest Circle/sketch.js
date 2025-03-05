// Find the Smallest Circle
// Sandha, Abhay
// 05 March, 2025

let NUM_CIRCLES = 5; x = 0; y = 0; size = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  drawCircle();
}




function draw() {
 // background(220);
}

function drawCircle() {
  noFill();
  //variables to track smallest so far
  let smallestSize = Infinity;
  let smallX, smallY;

  for (let i = 0; i < NUM_CIRCLES; i++) {
    //generates the next circle
    let x = random(0, windowWidth);
    let y = random(0, windowHeight);
    let size = random(5, 50);
    //check "is this the smallest circle so far"
    circle(x, y, size);
    if (size < smallestSize) {
      smallestSize = size;
      smallX = x; smallY = y;
    }


  }
  fill(255, 255, 0);
  circle(smallX, smallY, smallestSize);
}


