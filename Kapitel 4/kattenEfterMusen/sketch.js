  //diverse variabler til spillet
  let x;
  let y;
  let a;
  let b;
  let d;
  let speed;
  let kat1;
  let kat2;



  //Katte fu
  function lavKat() {
    
    k = new Object()
    //giver katten en "tilfældig" hastighed
    k.speedX = random(2, 6);
    k.speedY = random(2, 6);
    //placerer katten et tilfældigt sted på skærmen
    k.x = random(0, 500);;
    k.y = random(0, 500);;
    //kattens diameter
    k.d = 60;
    /*funktion tegner katten, bevæger katten, 
    øger hastigheden på katten og tjekker for kollision*/
    k.tegnkat = function() {
      let check = checkCollision(this);
      circle(this.x, this.y, this.d)
      katBorderCheck(this);
      //Bevæger katten
      this.x += this.speedX;
      this.y += this.speedY;
      //Øger kattens hastighed
      this.speedX *= 1.001;
      this.speedY *= 1.001;
      if(check)
        console.log("katten har spist dig");
    }
    return k;
  }

  

function setup() {
  createCanvas(500, 500);


  //musens koordinater og diameter
  x = random(0, 500);
  y = random(0, 500);
  d = 20;

  //musens fart og retning
  speed = 10;
  a = speed;
  b = 0;

  //Laver katte
  kat1 = lavKat();
  kat2 = lavKat();
}

/*funktion som tjekker om cirklen
har ramt kanten af skærmen
(ikke selvlavet, brugte den fra bogen)*/
function borderCheck() {
  if (x + d / 2 >= width) {
    a = -speed;
    b = 0;
  }
  if (x - d / 2 <= 0) {
    a = speed;
    b = 0;
  }
  if (y + d / 2 >= height) {
    a = 0;
    b = -speed;
  }
  if (y - d / 2 < 0) {
    a = 0;
    b = speed;
  }

  /*Omskrivning af den anden bordercheck funktion
  men til katten i stedet for musen*/
}
  function katBorderCheck(k) {
    if (k.x + k.d / 2 >= width) {
      k.speedX = -k.speedX;
    }
    if (k.x - k.d / 2 <= 0) {
      k.speedX = -k.speedX;
    }
    if (k.y + k.d / 2 >= height) {
      k.speedY = -k.speedY;
    }
    if (k.y - k.d / 2 < 0) {
      k.speedY = -k.speedY;
    }
 }

 //Gør det muligt at styre musen(ikke selvlavet, taget fra bogen)
 function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    b = speed;
    a = 0;
  }
  if (keyCode === UP_ARROW) {
    b = -speed;
    a = 0;
  }
  if (keyCode === LEFT_ARROW) {
    b = 0;
    a = -speed;
  }
  if (keyCode === RIGHT_ARROW) {
    b = 0;
    a = speed;
  }
 }

 //funktion der bruges til at tjekke for kollision mellem kat og mus
function checkCollision(k) {
  let katdist = d/2 + k.d/2;
  let actualdist = ((x-k.x)**2 + (y-k.y)**2)**0.5;
  return actualdist <= katdist;
}

function draw() {
  background(220);
  //tegner musen
  circle(x, y, d);
  borderCheck();
  //flytter musen
  x = x + a;
  y = y + b;

  //tegner og flytter kattene
  kat1.tegnkat();
  kat2.tegnkat();
}
