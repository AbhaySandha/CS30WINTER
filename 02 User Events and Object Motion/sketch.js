// User Events
// Sandha, Abhay
// Febuary 7, 2025
// Global Variable Declarations
// Define yourglobals here.
// You can only store simple/primitive data
// at this point. (no system variables)
let tSize = 10;
let x; //declaration only

function setup() {
  //runs onces, right at the start
  createCanvas(windowWidth, windowHeight);
  x = width/2; //initialization, do in setup()
  rectMode(CENTER);
}

function draw() {
  //runs over and and over, targeting 60fps
  background(50);
  //print("Current Frame: "+ frameCount ); //console.log()
  
  //-----------Mouse Section------------\\
  fill("green"); //fill/stroke can use color strings
  textSize( tSize)
  text(mouseX + "," + mouseY + " " + mouseButton, mouseX, mouseY);

  //----------Keyboard Section----------\\
  fill(500,200,100);
  square(x, 200, 50, 5,0,0,0);

  if(keyIsDown(LEFT_ARROW)){
    x = x -5;
    x = width; //(create a wrap - around effect)

   
  }
  if(keyIsDown(RIGHT_ARROW)){
    x = x + 5;
    if (x>width){
      x = 0;
    }
  }
}

function mousePressed(){
  //this is called Automatically... do NOT call it 
  //yourself.
  //This is called ONCE PER MOUSE BUTTON PRESS
  tSize = random(50,100);
}
