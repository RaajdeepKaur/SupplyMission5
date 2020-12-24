var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var basket1, basket2, basket3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	//var ground_options{isStatic=true}

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(400, 650, 400, 10 , {isStatic:true} );
	 World.add(world, ground);

	Engine.run(engine);

      basket1 = createSprite(400,650,400,20, {isStatic : true} );
	  basket1.shapeColor = color(255,0,0);
	  World.add(world, basket1);

	  basket2 = createSprite(210,595,20,100, {isStatic : true} );
	  basket2.shapeColor = color(255,0,0);
	  World.add(world, basket2);

	  basket3 = createSprite(590,595,20,100, {isStatic : true} );
	  basket3.shapeColor = color(255,0,0);
	  World.add(world, basket3);
}


function draw() {
  background(0);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y, 400,20);
  

  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y;
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
	packageSprite.x = packageBody.position.x;
	packageSprite.y = packageBody.position.y;
  }
}



