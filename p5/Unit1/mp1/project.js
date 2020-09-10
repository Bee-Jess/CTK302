function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(80, 94, 200);
  noStroke();


  fill(128, 4, 0);
  rect(1, 30, 200, 400)

  fill(36, 16, 11);
  rect(30, 165, 120, 900);


  fill(71, 62, 59);
  rect(400, 30, 200, 400)

  fill(82, 21, 11)
  rect(450, 165, 120, 900);


  fill(255, 239, 138);
  rect(155, 220, 70, 70);

  fill(255, 197, 143);
  ellipse(190, 220, 72, 72);

  fill(255, 239, 138);
  arc(190, 205, 70, 40, PI, TWO_PI);
  //bangs

  fill(2, 15, 66);
  rect(165, 253, 50, 75)
  //torso

  fill(255, 197, 143);
  rect(165, 328, 20, 25)


  fill(255, 197, 143);
  rect(195, 328, 20, 25)

  fill(255, 197, 143);
  rect(150, 260, 15, 55)

  fill('gray');
  rect(1, 380, 600, 20)

  fill(199, 197, 197);
  rect(1, 370, 600, 10)

  fill(255, 197, 143);
  rect(210, 260, 15, 55)

  fill('black');
  rect(195, 350, 20, 25)
  //leg

  fill('black');
  rect(165, 350, 20, 25)
  //leg

  fill('black');
  arc(165, 375, 20, 25, PI, TWO_PI);
  //shoe

  fill('black');
  arc(195, 375, 20, 25, PI, TWO_PI);
  //shoe

  fill('white');
  ellipse(170, 220, 15, 20);
  //eye white

  fill('white');
  ellipse(205, 220, 15, 20);
  //eye white

  fill('gold');
  ellipse(205, 225, 10, 15);
  //iris

  fill('gold');
  ellipse(170, 225, 10, 15);
  //iris

  fill('black');
  ellipse(205, 225, 5, 10);
  //pupil

  fill('black');
  ellipse(170, 225, 5, 10);
  //pupil

  fill(245, 86, 86);
  arc(187, 240, 20, 10, TWO_PI, PI);


  if (mouseIsPressed) {

    fill(245, 86, 86);
    arc(187, 240, 20, 10, PI, TWO_PI);
    //singing mouth

    fill('black');
    arc(170, 220, 20, 20, PI, TWO_PI);
    //right eyelid

    fill('black');
    arc(205, 220, 20, 20, PI, TWO_PI);
    //left eyelid

    fill('yellow');
    rect(190, 100, 40, 5)
    //top of music

    fill('yellow');
    rect(190, 100, 5, 40)
    //part of note

    fill('yellow');
    rect(225, 100, 5, 40)
    //part of note

    fill('yellow');
    ellipse(180, 140, 30, 20);
    //bottom of music note

    fill('yellow');
    ellipse(220, 140, 30, 20);
    //bottom of music note

    fill(255, 226, 199);
    ellipse(490, 360, 70, 50);
    //burglar head

    fill('black');
    rect(520, 330, 90, 50)
    //burglar torso

    fill(245, 86, 86);
    ellipse(510, 360, 30, 10);
    //burglar mouth

    fill('white');
    ellipse(480, 350, 10, 20);
    //burglar eye

    fill('white');
    ellipse(480, 375, 10, 20);
    //burglar eye

    fill('white');
    rect(520, 330, 10, 50)
    //top stripe

    fill('white');
    rect(550, 330, 10, 50)
    //middle stripe

    fill('white');
    rect(580, 330, 10, 50)
    //bottom stripe

  }
  textSize(15);
  fill('white');
  text('Songbird is the name of a young hero who uses her strength, agility, and voice to', 10, 30);
  text('fight crime. When she sings, she can put her foes to sleep instantly.', 10, 50);
}
