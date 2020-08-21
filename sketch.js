var trex, trex_running, trex_collided;

function preload(){
  trex_running = loadAnimation('trex1.png','trex3.png','trex4.png');
  
  trex_collided = loadImage('trex_collided.png');

  
}

function setup() {
  createCanvas(400, 400);
  
  trex = createSprite(40,370,10,10)
  trex.addAnimation("running", trex_running)
  trex.scale = 0.5
}

function draw() {
  background(220);
  
  drawSprites();
}