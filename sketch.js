const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bg="Sprites/Day.jpg"
var backgroundImg
var score = 0 
function preload(){
  polygonImg=loadImage("Sprites/polygon.png");
  getBackgroundImg()
}
  function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
    world = engine.world;

  
  ground = new Ground(840,530,250,15);
  ground2 = new Ground(450,330,350,15);
  polygon = new Polygon(100,250,100)
  slingshot = new Slingshot(polygon.body,{x:100,y:250});
  //building 1
  //level one
  block16 = new Block(345,300,30,30);
	block15 = new Block(380,300,30,30);
	block14 = new Block(415,300,30,30);
	block13 = new Block(450,300,30,30);
	block12 = new Block(555,300,30,30);
	block11 = new Block(520,300,30,30);
  block10 = new Block(485,300,30,30);
   //level two 
	block9 = new Block(380,260,30,30);
	block8 = new Block(415,260,30,30);
  block7 = new Block(450,260,30,30);
	block6 = new Block(485,260,30,30);
  block5 = new Block(520,260,30,30);
   //level three
	block4 = new Block(415,220,30,30);
	block3 = new Block(450,220,30,30);
  block2 = new Block(485,220,30,30);
  //level four 
  
  block1 = new Block(450,180,30,30);

  //building 2

//level one
  block17 = new Block(840,420,30,30);
//level two
	block18 = new Block(875,460,30,30);
	block19 = new Block(840,460,30,30);
	block20 = new Block(805,460,30,30);
//level three
	block21 = new Block(770,500,30,30);
	block22 = new Block(805,500,30,30);
	block23 = new Block(840,500,30,30);
	block24 = new Block(875,500,30,30);
  block25 = new Block(910,500,30,30);
  Engine.run(engine)
  }

function draw() {
  if (backgroundImg){
    background(backgroundImg)
  }
  noStroke();
  textSize(35)
  fill("white")
  text("Score  " + score, width-300, 50)
  drawSprites();
  
  ground.display();
  ground2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  
 
  polygon.display();
  slingshot.display();
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();
  

}
function mouseDragged(){
  
      Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=19){
      bg = "Sprites/Day.jpg";
  }
  else{
      bg = "Sprites/Night.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}