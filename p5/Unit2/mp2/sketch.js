var mic;
var vol;
let state = 0;
let x, y


function setup() {
  createCanvas(400, 400);

  mic = new p5.AudioIn();
  mic.start();


}

function draw() {
  noStroke()

  background('purple');

  switch (state) {

    case 0:
      text("The cemetery is usually empty...", 10, 100);
      textSize(20)
      fill(13, 36, 6);
      rect(1, 360, 400, 60);
      //grass

      fill(197, 192, 204);
      arc(70, 395, 80, 100, PI, TWO_PI);
      //first stone

      fill(207, 214, 0);
      rect(285, 170, 90, 20);
      //horiz of cross

      fill(207, 214, 0);
      rect(310, 150, 40, 80);
      //base of cross

      fill(28, 14, 3);
      rect(250, 230, 160, 150);
      //church

      fill(87, 86, 74);
      arc(160, 390, 80, 170, PI, TWO_PI);
      //second tombstone

      fill(44, 48, 37);
      arc(245, 395, 90, 130, PI, TWO_PI);
      //third tombstone

      fill('black');
      arc(330, 380, 70, 190, PI, TWO_PI);
//set up placement of moon for next state
      x = width / 2;
      y = height;

      break;

    case 1:
      background('black')
      textSize(30)
      text("Until the sun sets, and noise causes a change...", 100, 300);


      fill('yellow');
      arc(x, y, 80, 100, 20, PI + HALF_PI, PIE);

    //  x = x;
      // Moving up at a constant speed
      y = y - 1;

      // Hold
      if (y < 60) {
        y = 60;
        vol = (mic.getLevel()).toFixed(2); // returned level is between 0 and 1

        if (vol > 0.2) {
          state = 2
        }
      }

      break;

    case 2:

      background(24, 16, 28);
      fill(197, 192, 204);
      arc(200, 400, 120, 200, PI, TWO_PI);
      //first stone
      textSize(20)
      text("Then you might make a few new friends!", 1, 20);

      fill(80, 235, 232)
      ellipse(40, 210, 90, 20);
      //arm

      fill(80, 235, 232)
      ellipse(170, 210, 90, 20);

      fill(80, 235, 232)
      ellipse(100, 210, 80, 200);
      //body

      fill('black')
      ellipse(80, 170, 10, 30);
      //eye

      fill('black')
      ellipse(120, 170, 10, 30);
      //eye

      fill('black')
      arc(80, 215, 70, 60, 0, TWO_PI + QUARTER_PI);
      //mouth

      fill(33, 222, 65)
      ellipse(140, 90, 50, 10);

      fill(33, 222, 65)
      ellipse(220, 60, 10, 70);

      fill(33, 222, 65)
      ellipse(190, 100, 70, 100);
      //body

      fill('orange')
      ellipse(210, 90, 10, 30);
      //eye

      fill('orange')
      ellipse(170, 90, 10, 30);
      //eye

      fill('black')
      arc(190, 110, 40, 60, 0, TWO_PI + PI);
      //mouth

      fill(97, 18, 34)
      ellipse(350, 280, 10, 100);

      fill(97, 18, 34)
      ellipse(250, 200, 10, 70);

      fill(97, 18, 34)
      ellipse(300, 250, 120, 160);
      //body

      fill('red')
      ellipse(280, 200, 20, 30);
      //eye1

      fill('red')
      ellipse(300, 200, 20, 30);
      //eye

      fill('black')
      arc(300, 215, 70, 30, 0, TWO_PI + PI);
      //mouth

      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 2) state = 0;
}
  function touchStarted() {
    getAudioContext().resume();


}
