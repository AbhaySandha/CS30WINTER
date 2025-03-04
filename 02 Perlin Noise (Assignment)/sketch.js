// Perlin Noise
// Sandha, Abhay
// 3 March, 2025

let rectWidth = 1;




function setup() {
  createCanvas(windowWidth, windowHeight);
  generateTerrian();
}

function generateTerrian(){

  //use a loop to generate and draw
  //several rectanglse side to side
  //to look like some 2D terrain
  rectMode(CORNERS);
  for(let x = 0; x < width; x += rectWidth){
  // Generate a random height.
  // change this from using random() to noise()
    let rectHeight = noise(x); //

    //calculat ethe other corner of our rectangle
    let x2  = x + rectWidth; y2 = height - rectHeight;
    
    rect(x,height,x2,y2);
  }

}


function draw() {
  // background(220);
  // generateTerrian();
}

