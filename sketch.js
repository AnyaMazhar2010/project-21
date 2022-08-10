
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 750);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,650,1200,10)

	Engine.run(engine);
  
	rightSide = new Ground(750,600,10,110)
	leftSide = new Ground(600,600,10,110)

	ball = new Ball(260,100,30)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ground.display()
 leftSide.display()
 rightSide.display()
 ball.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
Matter.Body.applyForce(ball.body,{x:0,y:0},{x:80,y:-80})
	}
}



