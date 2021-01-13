var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const phyEngine = Matter.Engine;
const phyWorld = Matter.World;
const phyBodies = Matter.Bodies;




function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	
	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;
	fairy.debug = false;
	fairy.setCollider("circle",500,-45,45);

	
	
	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
	star.velocityY = 1;
	star.debug = false;
	/*star.x = starBody.position.x;
	star.y = starBody.position.y;*/

	
	
	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:false,});
	World.add(world, starBody);
	
	Engine.run(engine);

Body.setStatic(starBody,false);
console.log(starBody);
}


function draw() {
  background(bgImg);
 // createEdgeSprites();
 //fairy.bounceOff(edges[1]);
  
 
  keyPressed();
  

  if(starBody.position.y> 470)
  
  {star.collide(fairy)}
 
  drawSprites();
  //Engine.update(engine);
}

function keyPressed() {
	//write code here

	if (keyDown('right')) {
		fairy.x= fairy.x+6;
	  }
	  
	  if (keyDown('left')) {
		fairy.x=fairy.x-6;
	  }


}
