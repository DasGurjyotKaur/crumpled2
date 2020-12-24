
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperBall,dustbin;
var s1,s2,s3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
  world = engine.world;
  paperBall=new Paper (21,66);
ground=new Ground (80,700,3000,20)
ground.shapeColor=color(255)

s1=new Dustbin(570,660,20,100);
 s2=new Dustbin(790,660,20,100);
 s3=new Dustbin(680,685,200,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
 paperBall.display();
  s1.display();
  s2.display();
  s3.display();
  ground.display();
  drawSprites();
 Engine.update(engine);
}
function keyPressed(){

if (keyCode===UP_ARROW){
Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:130,y:-145});
}

}


