// Planets and Moons
// Sandha, Abhay
// March 19, 2025
// Storing objects IN objects, overwriting objects, basic transform

let myPlanet;
let listofMoons = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  myPlanet = new Planet(width/2, height/2);

}

function draw() {
  background(70);
  myPlanet.display();
}

function mousePressed(){
  //mouseClicked() -> behaves differently in certain browsers
  if(keyIsPressed && keyCode === SHIFT){
    fill(random(255), random(255), random(255));
    myPlanet = new Planet (mouseX, mouseY);
  }
  else{
    
    myPlanet.createMoon();
  }
}

function keyPressed(){
  // if any key (other than SHIFT) is pressed....
  if(keyCode !== SHIFT){
    myPlanet.relocate(mouseX, mouseY);
  }
}

class Planet{
  //1. Constructor
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.s = 100;
    this.moons = [];

  }
  //2. Class Functions
  display(){
    //draw the planet + all the moons
    circle(this.x, this.y, this.s);

    for(let m of this.moons){
     
      m.update();
    }

  }
  relocate(x,y){
    //First, the planet:
    this.x = y ;
    this.y = y ; 
    //then, the moons:
    for(let m of this.moons){
      m.x = x ;
      m.y = y ;
    }
  }

  createMoon(){
    this.moons.push(new Moon(this.x, this.y));
  }
}

class Moon{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.speed = 2;
    this.angle = 0;
    this.orbitRadius = random(100, width);
    this.s = random(10,50);
  }

  update(){
    //handles all internal class function calls
    this.move();
    this.display();
  }

  move(){
    this.angle += this.speed;

  }

  display(){

    push();
    translate(this.x, this.y);
    rotate(this.angle);
    
    circle(this.orbitRadius,0,this.s);
    pop();
    

  }

}