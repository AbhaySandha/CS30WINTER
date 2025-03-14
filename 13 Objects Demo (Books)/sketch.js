// Object Demo(Books)
// Sandha, Abhay
// March 12, 2025

// 1. Add two more book objects (each in a variable)
// and add to the shelf.... (connected to my book)

// 2. Use a loop to generate 20+ skinny books
// (can be all named the same if needed)
let myBook;
let myBook2;
let myBook3;
let bookshelf = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Make 20 books in  a row
  let x = 50;
  let covers = ["softcover", "hardcover" , "leatherbound"];
  for(let i = 0; i < 20; i++){
    let choice = int(random(3)); // 0,1,2 
    bookshelf.push(new Book("A"," Booth", " 999", "covers[choice] ",200, x,));
    x += 20;
  }

  myBook = new Book("CS30 Text", "Mr.Scott", 1234567891011, "leatherbound", 515, width * 0.3);
  myBook2 = new Book("CS30 Text", "Mr.Scott", 1234567891011, "hardcover", 515, width * 0.3);
  myBook3 = new Book("CS30 Text", "Mr.Scott", 1234567891011, "softcover", 515, width * 0.5);
  myBook.printOut();
}

function draw() { //clears teh screen each frame
  background(220);
  myBook.display();
  myBook2.display();
  myBook3.display();
}


// Nice to organize class at the bototm....
class Book {
  // 1. constructor
  constructor(title, author, isbn, cover, pages, x) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.cover = cover;
    this.pages = pages;
    this.x = x;


  }

  // 2. class methods
  display() {
    //render our book object on the canvas
    rectMode(CENTER);
    textAlign(CENTER, CENTER);
    textSize(20);

    switch (this.cover) {
    case "softcover":
      fill(250, 200, 150);  
      break;
    
    case "hardcover":
      fill(120,255,255);
      break;
    
    case "leatherbound":
      fill(150,100,15);
      break;
    
    }
    rect(this.x,height/2,this.pages/10, 150);
    fill(255);
    text(this.title[0], this.x,height/2 -50);

  }


  printOut() {
    //print out the data in a nice format
    print(this.title + ",by " + this.author);
    print("Length:" + this.pages);
    print("ISBN: " + this.isbn);
  }
}