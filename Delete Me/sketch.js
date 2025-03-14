function setup() {
  createCanvas(300,300);     //Just setting up the size
  background(255);   //White background
  stroke(0);         //Shapes have black lines
  noFill();          //Shapes are not filled in

  //Loop code below would go here.
}


function draw() {
  background(220);
}
for (let i = 0; i < 10; i++) {
  rect(i*20, height/2, 5, 5);
}