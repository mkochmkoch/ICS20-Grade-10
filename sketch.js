/* U5A1 Car Assignment 2.0
This program will draw a high way and multiple cars using functions
Matthew Koch - 2020/04/17 */

/* Set up function */
function setup() {
  createCanvas(800, 600);
  background(13, 255, 0);
  frameRate(5); //slow down frame rate
}

/* Main draw function */
function draw() {
  //Create high way with 3 lanes in each direction
  drawHighway(3);

  //Decorate the highway
  drawTrees();
}

/* Draws car with parameters
    Location (x, y)
    Size (width, height)
    Colour
  */
function drawCar(x, y, width, height, color, direction) {
  //Draw 4 wheels for the car. The wheels are placed more to the back and the front is longer
  //to give a sense of direction in which the car is traveling
  fill("black");
  var frontWheelX = x + 12;
  var backWheelX = x + 33;
  if (direction === "west") {
    frontWheelX = frontWheelX + 6;
    backWheelX = backWheelX + 6;
  }
  //Draw 4 cars
  rect(frontWheelX, y + 22, width - 18, height - 15);
  rect(frontWheelX, y + 43, width - 18, height - 15);
  rect(backWheelX, y + 22, width - 18, height - 15);
  rect(backWheelX, y + 43, width - 18, height - 15);

  //Fill car color
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

  //Draw 4 cars using random spacing and colour to give effect of cars in motion. In setup, reduced framerate so cars move at a decent pace
  let spacings = [10, 15, 18, 13, 20, 21, 14, 8, 6, 3, 12, -3];
  let spacing = random(spacings); // select random space

  let colours = ["red", "purple", "green", "blue", "yellow"];
  let colour = random(colours); // select random colour
  drawCar(x + 10 + spacing * 4, y, 30, 20, colour, direction);

  drawCar(x + 205 + spacing * 3, y, 30, 20, colour, direction);
  drawCar(x + 400 + spacing * 5, y, 30, 20, colour, direction);
  drawCar(x + 525 + spacing * 7, y, 30, 20, colour, direction);

  //Draw dotted line to separate lane
  dottedLine(x, y);
}

/* Draws the highway with 6 highway lanes. Take in parameters for the highway location, directions (i.e. #of lanes per direction), color, etc. Call the drawLane() function to draw the lanes.
 */
function drawHighway(numLanesPerDirection) {
  //drawLane(0, 50, 800, 70, "northBound",'grey');
  var yPosition = 0;
  //Drawing 3 lanes going east
  for (lanenum = 0; lanenum < numLanesPerDirection; lanenum++) {
    drawLane(0, lanenum * 73, 800, 70, "east", "grey");
  }
  //Drawing 3 lanes going west
  for (lanenum = 0; lanenum < numLanesPerDirection; lanenum++) {
    drawLane(0, lanenum * 73 + 230, 800, 70, "west", "grey");
  }
  //Draw guard rails
  fill("black");
  rect(0, 210, 800, 8);
  rect(0, 225, 800, 8);
  rect(0, 440, 800, 8);
  rect(0, 0, 800, 8);
}

//Draw one line segment dividing lanes
function lineSegment(x, y, w, h) {
  fill(255, 234, 0);
  rect(x, y - 4, w, h);
}

//Add dotted lines to divide the whole highway lane
function dottedLine(x, y, w, h) {
  fill("grey");
  rect(x, y - 4, 800, 5);
  for (line = 0; line < 15; line++) {
    lineSegment(line * 80 + 1, y, 40, 5);
  }
}

function drawTrees() {
  //Draw trees along highway
  fill(22, 82, 7);
  triangle(120, 510, 140, 460, 160, 510);
  triangle(180, 505, 200, 460, 220, 505);
  triangle(220, 515, 240, 455, 260, 515);
  triangle(275, 530, 295, 460, 315, 530);
  triangle(360, 510, 380, 460, 400, 510);
  triangle(395, 525, 420, 460, 440, 525);
  triangle(470, 510, 490, 460, 510, 510);
  triangle(550, 525, 575, 460, 595, 525);
}
