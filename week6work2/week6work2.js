function setup() {
createCanvas(windowWidth, windowHeight);
background("blue");
let myButton=createButton("PRESS THIS BUTTON");
myButton.position(100,100);
rectMode(CENTER);
textAlign(CENTER,CENTER);
myButton.mousePressed(spawn);
let div=createDiv("I AM A DIV");
div.position(width/2,height/2);
let link = createA("https://becausewhy.org","linkylink");
link.position(200,000);

}


function draw() {

}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  background(random(255),random(255),random(255));
}
function spawn(){
  background(0);
  let otherbutton = createButton("catch me!");
  otherbutton.position(random(width),random(height));
  otherbutton.mousePressed(spawn);
}
