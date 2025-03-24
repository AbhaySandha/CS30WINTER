// Perlin Noise
// Sandha, Abhay
// 3 March, 2025

let rectWidth = 1;
let noiseScale = 0.005;
let time = 0



function setup() {
  createCanvas(windowWidth, windowHeight);
  //generateTerrian();
  noStroke();

}

function draw() {
  background(220);
  generateTerrian();
  handleKeyPress();
  fill("black");
}

//--------Interactive Widths-------\\
function handleKeyPress() {
  // increase width
  if (keyIsDown(39) === true) {
    // for (let i = 0; i < 50; i++) {
    rectWidth = min(100, rectWidth + 1);
  }

  if (keyIsDown(37) === true) {
    // for (let i = 0; i > 50; i++) {
    rectWidth = max(1, rectWidth - 1);

  }
}


function generateTerrian() {
  //use a loop to generate and draw
  //several rectanglse side to side
  //to look like some 2D terrain

  rectMode(CORNERS);

  for (let x = 0; x < width; x += rectWidth) {
    // Generate a random height.
    // change this from using random() to noise()
    let rectHeight = noise((x + time) /100);

    // if (keyIsDown(LEFT_ARROW) === true) {
    //   x = x++;
    //   x2 = x2++;
    // }

    //calculate the other corner of our rectangle
    let x2 = x + rectWidth;
    let y2 = height - rectHeight;

    rect(x, height, x2, y2);

  }
  time += 1;
}




