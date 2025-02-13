// Drawing with Shapes Practice
// Sandha, Abhay
// Febuary 10, 2025

// GLobal Variable Decalarations
let boxX = 200, boxY = 100;
//let x = width/2, let y = height/2;


function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  
  background(220);
  drawCharacter();
  drawBox();
}

function drawBox(){
  //draw a box on the screen
  fill (255,155,55)
  rect(boxX, boxY, 50,30,5,5,0,0);
  rect (boxX, boxY - 50,30);
}

function drawCharacter(){
  // to practise drawing with shapes and understanding
  // the underlying coordinating
  noStroke()
  circle( width/2, height/2, 100);
  rect( width/2 -50, height/2 - 5, 100,70);
  fill(0);
  circle(width/2 - 20, height/2, 10);
  circle(width/2 + 20, height/2, 10);
  rect(width/2 - 10,height/2 +20, 20, 5);
}

function keyPressed(){
  if (key === "a"){
    boxX = 0;
  }
  if(key === "b"){
    boxY = 400;
  }
  if (keyCode === ESCAPE ){
    boxX = width * 0.85; //85% across the screen 
    boxY = height * 0.6;//60% down the screen


  }

}