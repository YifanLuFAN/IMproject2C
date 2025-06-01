//Note! The structure of this code 
//is borrowed from openprocessing, and some parts directly quote the source code on the website.
let env, fft;
let mySound;

function preload() {
	mySound = loadSound('data/bowAndarrow.mp3');
}

function setup() {
	createCanvas(1400, 600);
	colorMode(HSB);
	background(0);
    fft = new p5.FFT();
	img = loadImage("Rhythm.png");
}

function draw() {
	let split = 30;
	background (15);
	noStroke();

	let spectrum = fft.analyze();
	for (i = 0; i < spectrum.length; i++){

		let from = color(152, 64, 100);
		let to = color(8, 96, 77);
		let loc = map(i, 0, width/(split-1), 0, 1);

		fill(lerpColor(from, to, loc));
		freqHeight = map (spectrum[i], 0, 255, -500, height-60);
	    rect(i * split+3, height, split, - freqHeight);
		
	}
	
	fill(5);
	rect(0, 0, width, 60);
	
	image(img, 0, -100, width, 700);
	
	fill(5);
	rect(0, 540, width, 60);
}

function mousePressed(){
		  if(mySound.isPlaying()==true){
         mySound.stop();
         mySound.noLoop();
       }
       else{
       mySound.play();
       mySound.loop();
       }
}
	
