var socket;

function setup(){
	createCanvas(600,400);
	background(51);
	
	socket = socket.io.connect('ec2-54-244-167-140.us-west-2.compute.amazonaws.com:3000');

}

function draw(){
	noStroke();
	fill(255);
	ellipse(mouseX, mouseY, 36, 36);

}

