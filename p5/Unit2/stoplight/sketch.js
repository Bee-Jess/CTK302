let timer = 0;
let state = 0;
let x = 0 ;
let velocity = 10;


function setup() {
  createCanvas(800, 800);

  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {

  background(100);

  fill('yellow');
  rect(width/2, height/2, 200, 600);

  //car code
  fill('blue');
  rect(x, 750, 75, 20);
  x = x + velocity;
  if (x > width){
    x = 0 ;
  }



  switch (state) {

    case 0: //red
      text("0", 100, 100);

      fill('red');
 ellipse(width/2, height/2-170, 150, 150);

      fill('gray');
      ellipse(width/2, height/2, 150, 150);

      fill('gray');
  ellipse(width/2, height/2+170, 150, 150);

      velocity = 0;
      break;
      break;

    case 1: //green
      text("1", 100, 100);
      fill('gray');
      ellipse(width/2, height/2-170, 150, 150);

      fill('gray');
      ellipse(width/2, height/2, 150, 150);

      fill('green');
      ellipse(width/2, height/2+170, 150, 150);
      velocity=10;
      break;

    case 2: //yellow
      text("2", 100, 100);

      fill('gray');
     ellipse(width/2, height/2-170, 150, 150);

      fill (237, 187, 7);
      ellipse(width/2, height/2, 150, 150);

    fill('gray');
  ellipse(width/2, height/2+170, 150, 150);
      velocity = 2;
      break;
      break;

  }

  timer = timer+1;
  if (timer > 100) {
    timer = 0;
    state++;
  if (state > 2) state = 0
  }
}

function mouseReleased() {
  state++;
  if (state > 2) state = 0;

}
