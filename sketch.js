let cor;


function setup() {
  createCanvas(400, 400);
  cor = color ( random(0,  255), random (0,  255), random (0,  255))
}

function draw() {
  background ("#ADE5EC");
  stroke('rgb(14,14,221)');
  fill (cor)
  rect( mouseX, mouseY, 30, 30,);
}