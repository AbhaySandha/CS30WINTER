// Interactive Scene
// Sandha, Abhay
// Febuary 11, 2025
// Underwater World:

// Draw a coral reef, fish, seaweed, and maybe a diver or a submarine.
// Use the mouse to control a fish’s movement or the diver’s swimming direction, and allow the user to interact with the sea creatures.

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(51,153,200);
  bubble();
}

function bubble(){
  fill(100,100,100);
  circle(random(0,windowHeight),random(windowWidth,0), random(0,5));
}