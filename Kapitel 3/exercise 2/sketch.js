function setup() {
  createCanvas(400, 400);
  frameRate(0.5);
}
let x = 5
let y = 3
function draw() {
  background(220);
  print(x+y);
  print(x-y);
  print(x*y);
  print(x/y);
  print(x%=y);
}
/*Definerer to variable x og y og 
sæt den lig med hhv. 5 og 3. Brug nu 
javascript til at beregne summen, 
differencen, multiplikationen og 
divisionen af de to samt find resten ved 
divisionen.*/