function setup() 
{
  createCanvas(400, 400);
  strokeWeight(10);
}

function draw() 
{
  background(200);
  line(mouseX,mouseY,pmouseX,pmouseY);
}
/*Lav et simpelt tegneprogram der 
tegner en streg efter musens bevægelse*/