// 2D Array Basics
// Sandha, Abhay
// April 3, 2025
// Working with 2D Arrays, Visualizations

let grid =
  [[0, 60, 120, 180, 240],
  [240, 180, 120, 60, 0],
  [0, 200, 0, 200, 0]
  ];

let squareSize = 40;
const NUM_ROWS = 3;
const NUM_COLS = 5;


function setup() {
  createCanvas(NUM_COLS * squareSize, NUM_ROWS * squareSize);
}

function renderGrid() {
  //interpret the information in teh 2D array, and draw
  //a grid of colors on the sreen to reflect it.
  for (let y = 0; y < NUM_ROWS; y++) {
    for (let x = 0; x < NUM_COLS; x++) {
      let fillcolor = grid[y][x];
      // noStroke();
      fill(fillcolor);
      square(x * squareSize, y * squareSize, squareSize);
    }
  }
}

function getCurrentY() {
  // Determine current row of the mouse position
  let constrainedY = constrain(mouseY, 0, height - 1);
  return floor(constrainedY / squareSize);
}

function getCurrentX() {
  // Determine current col of the mouse position
  let consrtainedX = constrain(mouseX, 0, width - 1);
  return floor(consrtainedX / squareSize);
}

function checkForMouse() {
  // Flip current title to a random greyscale value
  if (mouseIsPressed) {
    let x = getCurrentX;
    let y = getCurrentY;
    grid[y][x] = floor(random(255))
    ;
  }

}

function draw() {
  background(220);
  renderGrid();
  checkForMouse();

  // // Temporary Helper
  // fill(255,0,0);
  // text(floor(mouseX/squareSize), mouseX, mouseY);

}
