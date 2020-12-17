
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var base, side1, side2;
var paperBall;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground (400,650,800,10);
	
	base = new Dustbin (600, 640, 200, 15);
	side1 = new Dustbin (550, 640, 55, 170);
	side2 = new Dustbin (650, 640, 55, 170);

	paperBall = new Paper (45);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  ground.display();
   
  base.display();
  side1.display();
  side2.display();

  keyPressed();
  paperBall.display();

  drawSprites();
 
}

function keyPressed() {


	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:10,y:-30});

    }

}