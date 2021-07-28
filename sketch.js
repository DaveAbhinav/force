const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground,left,right,topWall;
var ball;
var button1,button2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
ground = new Ground(200,390,400,10);
left = new Ground(390,200,10,400);
right = new Ground(10,200,10,400);
topWall = new Ground(200,10,400,10);

var ball_options = {
  restitution:1,

}
ball = Bodies.circle(100,10,20,ball_options);
World.add(world,ball);

button1 = createImg("push.png");
button1.position(20,20);
button1.mouseClicked(vForce);
button1.size(50,50);

}

function draw() 
{
  background(51);
  Engine.update(engine);
  ground.show();
  left.show();
  right.show();
  topWall.show();

  ellipse(ball.position.x,ball.position.y,20);
}

function hForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}

function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}


