function setup() 
{
  createCanvas(500,500)
}

function draw() 
{

if(mouseX>width/2)
{
  background(0)
rect((width/2)-50,(height/2)-50, 100,100);
}else
{
  background(0)
  circle(width/2,height/2,100);
}
}
  /*Tegn en cirkel midt på skærmen. Hvis musen bevæger sig til højre for cirklens 
  centrum bliver den til et rektangel. Hvis den bevæger 
  sig til venstre for bliver den igen en cirkel.*/