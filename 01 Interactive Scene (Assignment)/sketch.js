// Interactive Scene
// Sandha, Abhay
// Febuary 11, 2025
// Underwater World:

let p = 0;
let l = 0;
let fishX;
let fishY;
let fishSize;



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(51, 153, 200);
  //Coordinates / values
  fishX;
  fishY;
  fishSize = 25;
  numFish = 5;


}

function draw() {
  //Lesser Bubbles

  if (p % 60 === 0) {

    bubble(1);

  }
  p = p + 2;




  background(51, 153, 200);
  
  // Increase the amount of Fish
  if (l % 60 === 0) {
    for (let i = 0; i < numFish; i++) {
      fishX = random(0, windowWidth);
      fishY = random(0, windowHeight);
      fish(fishX, fishY, fishSize);
    }
    l = l + 2;
  }
  // Moving the fish to the right
  fishX += 2;
  // Reset fish's position if it when off the screen
  if (fishX > windowWidth + fishSize) {

    fishX = -fishSize; 
    fishY = random(0, windowHeight); 
  }

  
  fish(fishX, fishY, fishSize);
}

function bubble(rate) {

  background(51, 153, 200);
  let bubbleSize = 0;
  let numBubbles = random(5, 30);
  fill(131, 239, 244);

  //
  for (let bubbles = 0; bubbles <= numBubbles * rate; bubbles++) {
    bubbleSize = random(5, 20);
    circle(random(0, windowWidth), random(0, windowHeight), bubbleSize);
  }
}
function fish(fishX, fishY, fishSize) {


  //fish body
  ellipse(fishX, fishY, fishSize * 1.5, fishSize);

  //Tail (triangle)
  tailX = fishX - fishSize * 0.75;
  tailY = fishY;
  triangle(tailX, tailY, tailX - fishSize * 0.4, tailY - fishSize * 0.4, tailX - fishSize * 0.4, tailY + fishSize * 0.4);

  //Eyes
  fill(255);
  ellipse(fishX + fishSize * 0.5, fishY - fishSize * 0.2, fishSize * 0.2, fishSize * 0.2);
  fill(0);
  ellipse(fishX + fishSize * 0.55, fishY - fishSize * 0.2, fishSize * 0.1, fishSize * 0.1);

}
