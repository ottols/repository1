function setup() {
  createCanvas(500,500);
  frameRate(1);
}
  
  
  function draw() {
    let mouseDiffX = (mouseX - pmouseX)**2;
    let mouseDiffY = (mouseY - pmouseY)**2;
    let mouseDiffFinal=(mouseDiffX + mouseDiffY)**0.5;
    background(100);
    text("Mouse difference: "+mouseDiffFinal, 0, height/2);
    print(mouseDiffFinal);
    /* Printer hvor meget din mus har 
    bevæget sig siden sidste frame*/
  }