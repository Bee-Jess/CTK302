let state = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  textSize(16);
}

function draw() {
  switch (state) {

    case 0:
      background('green');
      text("What is the favorite color of a wind turbine?", 250, 250);
      break;

    case 1:
      background('blue');
      text("blew", 250, 250);
      break;
  }
}

function mouseReleased() {
  state++;
  if (state > 1) {
    state = 0;
  }
}
