function setup() {
  createCanvas(400, 400);
}

function draw() {
  if(keyCode === 70)
  {
    rect(200,200,50,50);
  } else if(keyCode === 67)
  {
    circle(200,200,50);
  }
  else if(keyCode === 69)
  {
    ellipse(200,200,60,40);
  }
}
/*Lav et program, der tegner en firkant 
hvis du trykker "f", en cirkel hvis du 
trykker "c" eller en ellipse 
hvis du trykker "e".*/