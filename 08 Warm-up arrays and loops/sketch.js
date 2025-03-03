// Warm Up Exerices:
// 1. Summing an array
// 2. Drawing with Loops Practice

let a = [22,11,5,5,90,80,70,60];
//       0,  1,,2,3,4,5 , 6,7
// a.legiht is 8



function setup() {


  createCanvas(windowWidth, windowHeight);
  background(200);

// TASK 1: Add up all the values in our array
//        and display the total in the console  
//   let total = 0;
//   for(let i = 0 ; i<a.length; i++) {
//     total = total + a[i];
//   }

// }

// for(let currentNUmber of a ){
//   total += currentNUmber;

// }

// function draw() {
  
// 
}

function draw(){

  for (let x = 0; x <= 10; x++){
    circle(windowWidth*(x/10), windowHeight*(x/10), 60);
    circle(windowWidth*(x/10), windowHeight - windowHeight*(x/10),60);
  }
}



