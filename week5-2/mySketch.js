//Note! The structure of this code 
//is borrowed from openprocessing, and some parts directly quote the source code on the website.
var video;

var vScale = 16;

function setup() {
  createCanvas(1440, 1080);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width / vScale, height / vScale);
}

function draw() {
  background(51);
  video.loadPixels();
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = (video.width - x + 1 + (y * video.width)) * 4;
      var r = video.pixels[index + 0];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];
      var bright = (r + g + b) / 3;
      var w = map(bright, 5, 255, 0, vScale);
      var v = map(mouseX, 5, windowWidth, 0, 10);
      noStroke();
      fill(255);
     // rectMode(CENTER);
      ellipse(x * vScale, y * vScale, w+v, w+v);
    }
  }

}
