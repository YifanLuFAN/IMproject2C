//Note! The structure of this code 
//is borrowed from openprocessing, and some parts directly quote the source code on the website.
var r = 50;
var i = int(random(3));

var valueR = 100;     
var valueB = 100;     
var valueG = 100;     

function setup() {                           
	createCanvas(windowWidth, windowHeight);    
	background(100, 200, 200);           
}                                     

function draw() {   
   fill(valueR, valueB, valueG);
   
   if (mouseIsPressed) {
       
	switch (i) {
		case 0:
			ellipse(mouseX, mouseY, mouseX/3,mouseY/3);
			break;
		case 1:
			rect(mouseX, mouseY, mouseX/3,mouseY/3);
			break;
		case 2:
			triangle(mouseX, mouseY+r, mouseX, mouseY, mouseX+51, mouseY-51);
			break;
	}
			
		
		
}
  
    
}                                      
																	
function mouseClicked() {                   
    valueR = random(200);               
	valueB = random(200);
	valueG = random(200);   
	  
	i = int(random(3));       
}
