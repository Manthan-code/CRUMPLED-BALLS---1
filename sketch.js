
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world,dustbin,paper;


function setup() {
	createCanvas(800,400);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	dustbin1=new DUSTBIN(720,390,100,10);
	dustbin2=new DUSTBIN(666,345,10,100);
	dustbin3=new DUSTBIN(774,345,10,100);
	paper=new PAPER(100,300,10);
	ground=	Bodies.rectangle(width/2,400,width,10,
		{
	isStatic:true	
	});
	ground.shapeColor="yellow";
	World.add(world,ground);
	
}


function draw() {
  background("black");
  rectMode(CENTER);
  background(0);
  
dustbin1.display();
dustbin2.display();
dustbin3.display();

paper.display();

  drawSprites();
 
}

function keyPressed(){
	if(keycode === UP_ARROW){
		Matter.Body.applyForce(papper.Body,paper.body.position,{x:85,y:-85});
	}

}



