const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;

var world, engine;
var ball_1;
var sustentacao;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  ball_1_config = {
    restitution: 0.95,
    frictionAir: 0.019
  }

  ball_1 = Bodies.circle(100, 10, 20, ball_1_config);
  World.add(world, ball_1);

  var sustentacao_config = {
    isStatic: true
  }

  sustentacao = Bodies.rectangle(200,390,400,20,sustentacao_config);
  World.add(world, sustentacao);
  
  
   

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
 background("grey");
 Engine.update(engine);

 ellipse(ball_1.position.x, ball_1.position.y, 20);
 rect(sustentacao.position.x, sustentacao.position.y, 400, 20);
}

