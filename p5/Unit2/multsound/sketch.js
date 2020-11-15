let state = 0;
let song1, song2, song3;

function preload(){
  song1= loadSound("assets/bensound-love.mp3");
  song2= loadSound("assets/bensound-november.mp3");
  song3= loadSound("assets/bensound-scifi.mp3");
  song1.loop();
  song1.pause();
  song2.loop();
  song2.pause();
  song3.loop();
  song3.pause();
}

function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(100);

  switch (state) {

    case 0:
      text("0", 100, 100);
      break;

    case 1:
      text("1", 100, 100);
      break;

    case 2:
      text("2", 100, 100);
      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 2) state = 0;

}
