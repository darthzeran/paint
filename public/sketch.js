var socket;

function setup() {
  createCanvas(1400, 650);
  background(0);
  // Start a socket connection to the server
  socket = io.connect('http://ec2-54-244-167-140.us-west-2.compute.amazonaws.com:3000');
  socket.on('mouse', function(data) {
      console.log("Got: " + data.x + " " + data.y);
      // Draw a blue circle
      fill(0,0,255);
      noStroke();
      ellipse(data.x, data.y, 40, 40);
    }
  );
}

function draw() {
  // Nothing
}

function mouseDragged() {
	console.log('Sending:' + mouseX + ',' + mouseY);

	var data = {
		x: mouseX,
		y: mouseY
	}

	socket.emit('mouse', data);

  // Draw some white circles
  fill(255);
  noStroke();
  ellipse(mouseX,mouseY,40,40);
  // Send the mouse coordinates
  //sendmouse(mouseX,mouseY);
}

// Function for sending to the socket
function sendmouse(xpos, ypos) {
  // We are sending!
  //console.log("sendmouse: " + xpos + " " + ypos);
  
  // Make a little object with  and y
  var data = {
    x: xpos,
    y: ypos
  };

  // Send that object to the socket
  socket.emit('mouse',data);
}
