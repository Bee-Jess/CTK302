var f1, f2;
function setup() {
  createCanvas(400, 400);
  f1 = loadFont('assets/Butterfly.ttf');
  f2 = loadFont('assets/RIS.ttf');
  textAlign(CENTER);
}

function draw() {
  background(220);
  textFont(f1,48);
  text('Jessica',width/2, height/2);
  textFont(f2,40);
  text('Madden',width/2, height/2+60);
}
