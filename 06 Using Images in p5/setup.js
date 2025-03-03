// IMage Basics
// Sandha, Abhay
// Febuary 26, 2025

// GLobal Variables
let lionL, lionR;
let pinImages = [];  //0-8
let currentFrame = 0;

function preload() {
  // function runs and won't end
  //until all files loading is complete
  lionL = loadImage("assets/lion-left.png");
  lionR = loadImage("assets/lion-right.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  // Lion code
  image(lionL, mouseX, mouseY);
}
