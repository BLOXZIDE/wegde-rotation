
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var rock;
var angle = 60


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 5,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
   /*var rock_ops ={
     restitution: 1.6,
     frictionAir : 0.03
   }*/

   w1 = Bodies.rectangle(100,200,100,20,ground_options);
   World.add(world,w1)

   w2 = Bodies.rectangle(300,150,100,20,ground_options);
   World.add(world,w2);

   ground = Bodies.rectangle(200,300,400,20,ground_options);
  World.add(world,ground);
   fill("red")
  

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  

  /*rock = Bodies.circle(200,10,20,rock_ops);
  World.add(world,rock);*/
  fill("yellow")
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  //ellipse(rock.position.x,rock.position.y,20);
  rect(w2.position.x,w2.position.y,100,20)
  Matter.Body.rotate(w1,angle)
  push()
  translate(w1.position.x,w1.position.y)
  rotate(angle)
  rect(0,0,100,20)
  pop()
  angle+=0.1
}

