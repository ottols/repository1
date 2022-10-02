
let xCircle;
let yCircle;

let xSquare;
let ySquare;

let ostCircle;
let ostSquare;
let ostPresent;
let ostX
let ostY

function setup() 
{
  createCanvas(500, 500);
  fill(255, 0, 0);

  xCircle = random(25, 475);
  yCircle = random(25, 475);
  
  xSquare = random(0, 450);
  ySquare = random(0, 450);

  ostCircle = 0;
  ostSquare = 0;
  ostPresent = false;
}

function draw() 
{
  //circle movement
  if (keyIsDown(LEFT_ARROW)) 
  {
    xCircle -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) 
  {
    xCircle += 5;
  }

  if (keyIsDown(UP_ARROW)) 
  {
    yCircle -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    yCircle += 5;
  }

  //square movement
  if (keyIsDown(65)) 
  {
    xSquare -= 5;
  }

  if (keyIsDown(68)) 
  {
    xSquare += 5;
  }

  if (keyIsDown(87)) 
  {
    ySquare -= 5;
  }

  if (keyIsDown(83)) 
  {
    ySquare += 5;
  }

  //tegner square og circle
  clear();
  circle(xCircle, yCircle, 50);
  rect(xSquare, ySquare, 50, 50)
  rect(ostX, ostY, 25, 25)

  //ost spist mechanic
  if(yCircle)

  if(ostPresent == false) 
  {
    ostX = random(0, 475);
    ostY = random(0, 475);
    ostPresent = true;
  }
  
}
