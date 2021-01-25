var helicopterIMG,helicopterSprite,packageSprite,packageIMG;
var packageBody,ground
const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function prelode(){
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}
function setup(){
	createCanvas(800,700);
	rectMode(CENTER);

	packageSprite=createSprite(width/2,80,10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helocopterSprite=createSprite(width/2,200,10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2,height-35,width,10);
	groundSprite.shapeColor(255);

	packageBody=Bodies.circle(width/2,200,5{restitution:0.5,isStatic:false});
	World.add(world,packageBody);

	//create a Ground
	ground=Bodies.rectangle(width/2,650,width,10{isStatic:true});
	World.add(world,ground);

	Engine.run(engine);

}

function draw(){
	rectMode(CENTER);
	background(0);
	packageSprite.x= packageBody.postion.x;
	packageSprite.y= packageBody.postion.y;

	drawSprite();
}

function keyPressed(){
	if(keyCode===DOWN_ARROW){
		packageBody.velocity=-0.0005
	}
}










