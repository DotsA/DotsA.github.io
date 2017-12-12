var mic;
var value = 0;

function setup() {
  createCanvas(1110, 500);
  noCursor();

  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();

}

function draw() {
  background(255, 204, 0);
  ellipse(mouseX, mouseY, 50, 50);

  // Get the overall volume (between 0 and 1.0)
  var vol = mic.getLevel();
  var vol2 = mic.getLevel()*2;
  var vol3 = mic.getLevel()*5;
  fill(255, 204, 0);
  
//   function mouseClicked() {
//   if (value == 0) {
//     value = 255, 204, 0;
//   } else {
//     value = 0;
//   }
// }

  // Draw an ellipse with height based on volume

  var h = map(vol, 0, 1, height, 0); 
  ellipse(width/3, h - 100, 50, 50);
    
  var h = map(vol2, 0, 1, height, 0);
  ellipse(width/3, h - 100, 50, 50);

  var h = map(vol3, 0, 1, height, 0);
  ellipse(width/3, h - 100, 25, 25);

  var h = map(vol, 0, 1, height, 0);
  ellipse(width/3, h - 100, 80, 80);

  var h = map(vol2, 0, 1, height, 0);
  ellipse(width/3, h - 100, 50, 50);

  var h = map(vol3, 0, 1, height, 0);
  ellipse(width/3, h - 100, 25, 25);

  // Set 2

  var h = map(vol, 0, 1, height, 0); 
  ellipse(width/4, h - 100, 50, 50);
    
  var h = map(vol2, 0, 1, height, 0);
  ellipse(width/4, h - 100, 50, 50);

  var h = map(vol3, 0, 1, height, 0);
  ellipse(width/4, h - 100, 25, 25);

  var h = map(vol, 0, 1, height, 0);
  ellipse(width/4, h - 100, 80, 80);

  var h = map(vol2, 0, 1, height, 0);
  ellipse(width/4, h - 100, 50, 50);

  var h = map(vol3, 0, 1, height, 0);
  ellipse(width/4, h - 100, 25, 25);

  // Set 2

  var h = map(vol, 0, 1, height, 0); 
  ellipse(width/6, h - 100, 50, 50);
    
  var h = map(vol2, 0, 1, height, 0);
  ellipse(width/6, h - 100, 50, 50);

  var h = map(vol3, 0, 1, height, 0);
  ellipse(width/6, h - 100, 25, 25);

  var h = map(vol, 0, 1, height, 0);
  ellipse(width/6, h - 100, 80, 80);

  var h = map(vol2, 0, 1, height, 0);
  ellipse(width/6, h - 100, 50, 50);

  var h = map(vol3, 0, 1, height, 0);
  ellipse(width/6, h - 100, 25, 25);

  //set 1

  var h = map(vol, 0, 1, height, 0); 
  ellipse(width/12, h - 100, 50, 50);
    
  var h = map(vol2, 0, 1, height, 0);
  ellipse(width/12, h - 100, 50, 50);

  var h = map(vol3, 0, 1, height, 0);
  ellipse(width/12, h - 100, 25, 25);

  var h = map(vol, 0, 1, height, 0);
  ellipse(width/12, h - 100, 80, 80);

  var h = map(vol2, 0, 1, height, 0);
  ellipse(width/12, h - 100, 50, 50);

  var h = map(vol3, 0, 1, height, 0);
  ellipse(width/12, h - 100, 25, 25);

}

//needs to run in local python server