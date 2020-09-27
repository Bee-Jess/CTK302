var=0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
background(100);

//rect(0,250, 50, 50);
text("Fire from fire", x,250);
x=x+5;

if (x>width){
  x = 0;
}
}
