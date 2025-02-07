// Coordinate System and User Events 
// Sandha, Abhay
// Febuary 6th, 2025
// Not run-to-completion, but interactive programs...



function setup() {
  // runs ONCE, at the very beginning....
  createCanvas(500, 500);
}

function draw() {
  // draw LOOP, repeats over and over forever...
  // - taret of 60 frames per second
  // A new image is drawn at the bottom of the loop
  background(250);
 
  //secret calculated delay()
  //screen updates at end of loop
  FiveCircle(100)
}


function twoCircle(){
// draws two circles, one at a fixed location
// and one at the mosue location
stroke(0,0,255); //blue outline
strokeWeight(2);
fill(0,250,0); //green fill
circle(200,100,50); 

noStroke();
fill(255,0,0); //red fill
circle(mouseX, mouseY, 30);
}

function FiveCircle(){
// draw 4 circles on each corner and one in the middle
circle(width, height, 100);
circle(height, 0, 100);
circle(0, width, 100);
circle(0,0,100);
circle(height/2, width/2,100)
}