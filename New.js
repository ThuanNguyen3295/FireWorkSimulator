var fireworks = []; // an array of Firework
var gravity;

function setup(){
  createCanvas(1000,600); // create the canvas
  gravity = createVector(0, 0.2);
  stroke(255);
  strokeWeight(4);
  background(0); // trailing for the particles
}
function draw(){
  colorMode(RGB); // set up colorMode
  background(0, 0, 0, 25); // transition background
  if(random(1) < 0.04) {
  fireworks.push(new Firework());
}
  for(var i = fireworks.length -1; i >=0; i--){ // loop through to update 
    fireworks[i].update();
    fireworks[i].show();
    if(fireworks[i].done()){ // if expoded, then remove it from the array
        fireworks.splice(i,1);
    }
  }
}
