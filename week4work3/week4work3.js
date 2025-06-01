var pic;

function preload(){
  pic=loadImage("./data/image1.jpg");
}

function setup() {
createCanvas(windowWidth, windowHeight);
background("black");
imageMode(CENTER,CENTER);
}

function draw() {
image(pic,width/2,height/2,1000,1000);
}
