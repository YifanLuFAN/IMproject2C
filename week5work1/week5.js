let bottomImg, topImg;

function preload(){
  bottomImg = loadImage('./data/blackandwhite.png')
  topImg = loadImage('./data/colour.png')
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(200,200,0);
  bottomImg.resize(width,height);
  topImg.resize(width,height);
  image(bottomImg,0,0);

}


function draw() {

}

function mouseDragged(){
  copy(topImg,mouseX,mouseY,80,80,mouseX,mouseY,80,80);
}
