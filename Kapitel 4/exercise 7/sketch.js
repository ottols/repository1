//Lav et program, som tegner et A på kanvas når du trykker på A. Og når du trykker på V tegnes et V.
function setup() {
  createCanvas(800, 800);
}

function draw() {
  strokeWeight(30);
  if(keyCode == 65)
  {
    background(200);
    line(0, height, width/2, 0);
    line(width, height, width/2, 0);
    line(width/4, height/2, (width/4)*3, height/2);
  }
  if(keyCode == 86)
  {
    background(200);
    line(0, 0, width/2, height);
    line(width, 0, width/2, height);
  }

}
