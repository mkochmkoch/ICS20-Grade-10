//initialize the variables
var circleWidth = 500;
var circleHeight = 500;
var circleX = 400;
var circleY = 300;

function setup() {
  // put setup code here
  createCanvas(800,600);
}

function draw() {
  // put drawing code here

  //first circle
  fill(147, 82, 163);
  ellipse(circleX, circleY, circleWidth, circleHeight);

  //Divide the width and height of the circle by 2
  circleWidth = circleWidth / 2;
  circleHeight = circleHeight / 2;

  //second circle
  fill(0,255,0);
  ellipse(circleX, circleY, circleWidth, circleHeight);



  //Divide the width and height of the circle by 2
  circleWidth = circleWidth / 2;
  circleHeight = circleHeight / 2;

  //third circle
  fill(0,0,255);
  ellipse(circleX, circleY, circleWidth, circleHeight);

  //Divide the width and height of the circle by 2
  circleWidth = circleWidth / 2;
  circleHeight = circleHeight / 2;

  //fourth circle
  fill(255,255,0);
  ellipse(circleX, circleY, circleWidth, circleHeight);

  //Divide the width and height of the circle by 2
  circleWidth = circleWidth / 2;
  circleHeight = circleHeight / 2;

  //fifth circle
  fill(0,255,255);
  ellipse(circleX, circleY, circleWidth, circleHeight);


  noLoop();

}