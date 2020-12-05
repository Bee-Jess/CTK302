let timer = 0;
let state = 0;

function setup() {
  createCanvas(500, 500);
  textSize(32);
  textAlign(CENTER);
  rectMode(CENTER);
}

function draw() {

  switch (state) {

    case 0:
      background('red');
      text("What do you get if you cross a pig and a cactus?", 250, 250, 350, 400);
      timer = timer + 1;
      if (time > 1 * 60) {
        state = 1;
        timer = 0;

      }

      break;

    case 1:
      background('blue');
      text("a porkypine", 250, 250, 350, 400);
      break;
  }
}
