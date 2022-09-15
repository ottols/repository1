function setup() {
  createCanvas(400, 400);
  frameRate(60);
}

function draw() {
  background(220);
  if(mouseIsPressed == true)
  {
    if(mouseButton == LEFT)
    {
      circle(mouseX,mouseY,80);
    }
    else if (mouseButton == RIGHT)
    {
      rect(mouseX,mouseY,80,40);
    }
  }

}
/*Lav et program, der tegner en cirkel 
når du klikker med venstre mus og et 
rektangel med højre mus.*/