/* U5A1 Car Assignment 2.0
This program will draw a high way and multiple cars using functions
Matthew Koch - 2020/04/17 */

/* Set up function */
function setup() {
  createCanvas(800, 600);
  background(99, 159, 255);
}

/* Main draw function */
function draw() {
  //Draw car1
  var carLocationX = 100;
  var carLocationY = 120;
  var carWidth = 130;
  var carHeight = 80;

  //drawCar(carLocationX, carLocationY, carWidth, carHeight, 'black');
  //drawCar(carLocationX, carLocationY, 30, 20, 'green');

  drawHighway(0, 50, 3, "east");
}

/* Draws car with parameters
    Location (x, y)
    Size (width, height)
    Colour
  */
function drawCar(x, y, width, height, color, direction) {
  //Draw 4 wheels
  fill("black");
  var frontWheelX = x + 12;
  var backWheelX = x + 33;
  if (direction === "west") {
    frontWheelX = frontWheelX + 6;
    backWheelX = backWheelX + 6;
  }
  rect(frontWheelX, y + 22, width - 18, height - 15);
  rect(frontWheelX, y + 43, width - 18, height - 15);
  rect(backWheelX, y + 22, width - 18, height - 15);
  rect(backWheelX, y + 43, width - 18, height - 15);

  //Draw body
  fill(color);
  rect(x + 10, y + 25, width + 13, height);
}

/* Draws a lane with 4 cars going in same direction on one lane of a road. Take in parameters for the lane location, direction, color, etc.
 */

function drawLane(x, y, w, h, direction, c) {
  noStroke();
  fill(c);
  //Road Lane
  rect(x, y, w, h);

  //Draw 4 cars
  drawCar(x + 50, y, 30, 20, "green", direction);
  drawCar(x + 175, y, 30, 20, "red", direction);
  drawCar(x + 300, y, 30, 20, "purple", direction);
  drawCar(x + 425, y, 30, 20, "blue", direction);

  dottedLine(x, y);
}

/* Draws the highway with 6 highway lanes. Take in parameters for the highway location, directions (i.e. #of lanes per direction), color, etc. Call the drawLane() function to draw the lanes.
  
  */
function drawHighway(x, y, numLanesPerDirection, direction) {
  //drawLane(0, 50, 800, 70, "northBound",'grey');
  var yPosition = 0;
  //Drawing 3 lanes east
  for (lanenum = 0; lanenum < numLanesPerDirection; lanenum++) {
    drawLane(0, lanenum * 73, 800, 70, "east", "grey");
  }
  //Drawing 3 lanes west
  for (lanenum = 0; lanenum < numLanesPerDirection; lanenum++) {
    drawLane(0, lanenum * 73 + 230, 800, 70, "west", "grey");
  }
}

function lineSegment(x, y, w, h) {
  fill(255, 234, 0);
  rect(x, y - 4, w, h);
}

function dottedLine(x, y, w, h) {
  fill("grey");
  rect(x, y - 4, 800, 5);
  for (line = 0; line < 15; line++) {
    lineSegment(line * 80 + 1, y, 40, 5);
  }
}
