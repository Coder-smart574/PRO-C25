const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var lineDown, lineLeft, lineRight;
var ground, paper;
var backgroundImage;
var dustbin,dustbinImage;
var paperImage;

function preload(){

	backgroundImage = loadImage("background.jpg");
	dustbinImage = loadImage("dustbingreen.png");
	paperImage = loadImage("paper.png");

}

function setup() {
	createCanvas(1366, windowHeight);

	engine = Engine.create();
	world = engine.world;

	dustbin = createSprite(800, height - 230);
	dustbin.addImage(dustbinImage);
	dustbin.scale = 0.44;
	
	ground = new Ground(windowWidth / 2, height - 130, width, 20);

	lineDown = new Box(800, windowHeight - 150, 140, 20);
	lineLeft = new Box(720, windowHeight - 200, 20, 120);
	lineRight = new Box(880, windowHeight -200, 20, 120);

	paper = new Paper(80, windowHeight - 190, 40, 40);

	Engine.run(engine);
}


function draw() {
	background(backgroundImage);


	paper.display();
	paper.update();

	drawSprites();
 
}
