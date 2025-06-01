let font;
let points;
function preload(){
font = loadFont('data/Arial.ttf');
}
function setup() {
createCanvas(windowWidth,windowHeight);
background('blue');
points = font.textToPoints(
'diamonds',width/4-200,height/2,400,{
  sampleFactor:0.05,
  simplifyThreshold:0
});
  rectMode(CENTER);
}

function draw() {
  background("blue");
  fill(255,0,0);
  for (let i=0;i<points.length;i++){
    circle(points[i].x+random(5),points[i].y+random(5),10);
    stroke('yellow');
    line(points[i].x,points[i].y, mouseX,mouseY);
 }

}
