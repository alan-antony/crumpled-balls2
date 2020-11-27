const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box;
var ground,ball,ballImage,dustbinImage;
var world;

function setup() {
	createCanvas(1300, 500);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(0,470,12000,20);
	ball = new paper(100,450,70);
	box = new Box(1100,450);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  //Engine.update(engine)
  background(230);
  ball.display();
  ground.display();
  box.display();
 // drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:130,y:-145})
	}
}








