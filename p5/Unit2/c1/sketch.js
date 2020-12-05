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
      text("Shhh...", 10, 100);
      textSize(20)
      fill('white')
      break;

    case 1:
      background('black')
      textSize(15)
      text("Quiet down!", 100, 300);



      if (y < 60) {
        y = 60;
        vol = (mic.getLevel()).toFixed(2); // returned level is between 0 and 1

        if (vol > 0.2) {
          state = 1
        }
      }

      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 1) state = 1;
}
  function touchStarted() {
    getAudioContext().resume();


}
