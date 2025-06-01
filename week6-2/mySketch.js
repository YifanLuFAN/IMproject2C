//Note! The structure of this code 
//is borrowed from openprocessing, and some parts directly quote the source code on the website.
let X, Y;
let mic;

function preload() {
  img = loadImage("data/1.png");
  img2 = loadImage("data/2.png");
  img3 = loadImage("data/3.png");
  img4 = loadImage("data/4.png");
  img5 = loadImage("data/5.png");
}

function setup() {
  createCanvas(1920, 1080);
	mic = new p5.AudioIn();
  mic.start();
  frameRate(60);
}

function draw() {
  let vol = mic.getLevel();
  let X = 670;
  let Y = 1080 / 2 - 582 / 2;
  console.log(vol);

  background(255-vol*1000, 178+vol*1000, 156+vol*1000);

  let y = map(vol, 100, 0, X, 0);
   image(img5, X + 800 * y, Y + 800 * y);
  let a = map(vol, 100, 0, X, 0);
  image(img4, X + 400 * y, Y + 400 * y);
  image(img3, X, Y);
  let b = map(vol, 100, 0, X, 0);
  image(img2, X - 400 * y, Y - 400 * y);
  let c = map(vol, 100, 0, X, 0);
  image(img, X - 800 * y, Y - 800 * y);
}
