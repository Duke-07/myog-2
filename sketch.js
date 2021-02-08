//namespacing
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine, world;
var ball;
var player;
function setup() {
  createCanvas(displayWidth, displayHeight);

  engine=Engine.create();
  world=engine.world;
  angleMode(DEGREES);  

  player=new Player(displayWidth/2, displayHeight/2)
  ball=new Ball(Math.round(random(displayWidth/4,displayWidth-100)),Math.round(random(displayHeight/4,displayHeight/2+100)),100,100);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background("green");  
  Engine.update(engine);
  //if()
  if (keyDown("a")|| keyDown("d") || keyDown("w")|| keyDown("s")){
    player.move();
  }
  
  hr = hour();
  mn = minute();
  sc = second();

  ball.display();
  player.display();
  //drawSprites();
}

