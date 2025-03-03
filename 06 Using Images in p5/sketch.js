// IMage Basics
// Sandha, Abhay
// Febuary 26, 2025

// GLobal Variables
let lionL, lionR;
let pinImages = [];  //0-8
let currentFrame = 0;
let facing = "left"; //"left" "right"

function preload() {
  // function runs and won't end
  //until all files loading is complete
  lionL = loadImage("assets/lion-left.png");
  lionR = loadImage("assets/lion-right.png");

  for(let i = 0; i <= 8; i++){
    pinImages.push(loadImage("assets/pin-0" + i + ".png")); 
  }
  
  

  

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  //framerate() (changes refresh rate of everything)
}

function draw() {
  background(220);

  //pinwheel code (0-8)


image(inImages[currentFrame],width/2, height /2);
if(frameCount % 3===0){
    currentFrame++; //advance to the next picture
if(currentFrame > 8 ) currentFrame = 0;

}




function drawLion(){
      // Lion code
  let sizeX = lionL.width / 2;
  let sizeY = lionL.height /  2;

  if (movedX > 0) facing = "right";
  else if (movedX < 0) facing = "left";

  if(facing === "left"){
    image(lionL, mouseX, mouseY, sizeX, sizeY);
  }
  else{
    image(lionR,mouseX, mouseY, sizeX, sizeY);
  }
  image(lionL, mouseX, mouseY, sizeX, sizeY);

}

}
