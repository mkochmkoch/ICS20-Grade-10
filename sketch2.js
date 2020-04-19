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

  drawHighway(0, 50, 3, 'east');
}

/* Draws car with parameters
  Location (x, y)
  Size (width, height)
  Colour
*/
function drawCar(positionX, positionY, width, height, color) {
  fill(color);
  rect(positionX, positionY, width, height);

  //ellipse(positionX + 8,positionY + 20, 10);
  //ellipse(positionX + 23,positionY + 20, 10);
  //adding details
  //rect(positionX + 130, positionY, width - 40, height - 20, 10)
}

/* Draws a lane with 4 cars going in same direction on one lane of a road. Take in parameters for the lane location, direction, color, etc.
 */

function drawLane(x, y, w, h, direction, c) {
  noStroke();
  fill(c);
  rect(x, y, w, h);
  drawCar(x, y, 30, 20, "green");
  drawCar(x + 50, y, 30, 20, "red");
  drawCar(x + 100, y, 30, 20, "yellow");
  drawCar(x + 150, y, 30, 20, "blue");

  dottedLine(x,y);
}

/* Draws the highway with draws 6 highway lanes. Take in parameters for the highway location, directions (i.e. #of lanes per direction), color, etc. Call the drawLane() function to draw the lanes.

*/
function drawHighway(x, y, numLanesPerDirection, direction) {
  //drawLane(0, 50, 800, 70, "northBound",'grey');
var yPosition = 0;
  for (lanenum = 0; lanenum< numLanesPerDirection; lanenum++) {
    drawLane(0, lanenum * 73, 800, 70, direction, "grey");
  }
  for (lanenum = 0; lanenum< numLanesPerDirection; lanenum++) {
    drawLane(0, lanenum * 73 + 230, 800, 70, direction, "grey");
  }
  
}

function lineSegment(x,y,w,h) {
  fill(255, 234, 0);
  rect(x,y-4,w,h);
} 

function dottedLine(x,y) {
for (line = 0; line< 15; line++) 
    lineSegment(line*80+1,y,40,5);
}