//creating Engine, World, Bodies, Constraint
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
//creating ground1, ground2, block1, block2, polygon, ball, slingshot, score
var ground1, ground2;
var block1, block2;
var polygon;
var ball;
var slingshot;
var score = 0;

function preload()
{
  polygon = loadImage("Polygon.jpg")
}
function setup() 
{
  //creating Canvas
  createCanvas(800, 400);
  //creating engine, world
  engine = Engine.create();
  world = engine.world;
  //creating ground1, ground2
  ground1 = new Ground(400, 360, 150, 15);
  ground2 = new Ground(625, 180, 150, 15);
  //creating first pyramid, first row of blocks 
  block1 = new Block(340, 335, 20, 40);
  block2 = new Block(360, 335, 20, 40);
  block3 = new Block(380, 335, 20, 40);
  block4 = new Block(400, 335, 20, 40);
  block5 = new Block(420, 335, 20, 40);
  block6 = new Block(440, 335, 20, 40);
  block7 = new Block(460, 335, 20, 40);
  //creating first pyramid, second row of blocks 
  block8 = new Block(360, 295, 20, 40);
  block9 = new Block(380, 295, 20, 40);
  block10 = new Block(400, 295, 20, 40);
  block11 = new Block(420, 295, 20, 40);
  block12 = new Block(440, 295, 20, 40);
  //creating first pyramid, third row of blocks 
  block13 = new Block(380, 255, 20, 40);
  block14 = new Block(400, 255, 20, 40);
  block15 = new Block(420, 255, 20, 40);
  //creating first pyramid, fourth row of blocks 
  block16 = new Block(400, 215, 20, 40);
  //creating second pyramid, first row of blocks 
  block17 = new Block(565, 155, 20, 40);
  block18 = new Block(585, 155, 20, 40);
  block19 = new Block(605, 155, 20, 40);
  block20 = new Block(625, 155, 20, 40);
  block21 = new Block(645, 155, 20, 40);
  block22 = new Block(665, 155, 20, 40);
  block23 = new Block(685, 155, 20, 40);
  //creating second pyramid, second row of blocks 
  block24 = new Block(585, 115, 20, 40);
  block25 = new Block(605, 115, 20, 40);
  block26 = new Block(625, 115, 20, 40);
  block27 = new Block(645, 115, 20, 40);
  block28 = new Block(665, 115, 20, 40);
  //creating second pyramid, third row of blocks 
  block29 = new Block(605, 75, 20, 40);
  block30 = new Block(625, 75, 20, 40);
  block31 = new Block(645, 75, 20, 40);
  //creating second pyramid, fourth row of blocks 
  block32 = new Block(625, 35, 20, 40);
  //creating ball 
  ball = Bodies.circle(50,200,20); 
  //adding ball to World
  World.add(world,ball);
  //creating slingshot
  slingshot = new Slingshot(ball, {x : 100, y : 200});
  //running engine
  Engine.run(engine);

}

function draw() 
{
  background(0);
  //calling function ChangeBackground
  //changeBackground();
  //displaying score
  noStroke();
  textSize(35);
  fill("blue"); 
  text("Score : " + score, 400, 40); 
  //updating engine
  Engine.update(engine);
  //giving ground a color and displaying ground
  fill("brown");
  ground1.display();
  ground2.display();
  //giving blocks a color and displaying first pyramid, first row of blocks 
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  //giving blocks a color and displaying first pyramid, second row of blocks 
  fill("blue");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  //giving blocks a color and displaying first pyramid, third row of blocks 
  fill("darkblue");
  block13.display();
  block14.display();
  block15.display();
  //giving blocks a color and displaying first pyramid, fourth row of blocks 
  fill("midnightblue");
  block16.display();
  //giving blocks a color and displaying second pyramid, first row of blocks 
  fill("skyblue");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  //giving blocks a color and displaying second pyramid, second row of blocks 
  fill("blue");
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  //giving blocks a color and displaying second pyramid, third row of blocks 
  fill("darkblue");
  block29.display();
  block30.display();
  block31.display();
  //giving blocks a color and displaying second pyramid, fourth row of blocks 
  fill("midnightblue");
  block32.display();
  //assigning first pyramid, first row of blocks score function
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  //assigning first pyramid, second row of blocks score function
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  //assigning first pyramid, third row of blocks score function
  block13.score();
  block14.score();
  block15.score();
  //assigning first pyramid, fourth row of blocks score function
  block16.score();
  //assigning second pyramid, first row of blocks score function
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  //assigning second pyramid, second row of blocks score function
  block24.score();
  block25.score();
  block26.score();
  block27.score();
  block28.score();
  //assigning second pyramid, third row of blocks score function
  block29.score();
  block30.score();
  block31.score();
  //assigning second pyramid, fourth row of blocks score function
  block32.score();
  //displaying polygon
  image(polygon, ball.position.x, ball.position.y, 40, 40);
  //displaying slingshot
  slingshot.display();
  //drawing sprites
  drawSprites();
}
//letting the mouse drag the ball
function mouseDragged()
{
  Matter.Body.setPosition(ball,{x:mouseX,y:mouseY});
}
//letting the mouse release the ball
function mouseReleased()
{
  slingshot.fly();
}
//attaching the ball to slingshot by pressing space
function keyPressed()
{
  if(keyCode === 32)
  {
    slingshot.attach(ball);
  }
}
//changing background color depending on time
async function changeBackground()
{
  var response = await fetch("http://worldtimeapi.org/api/timezone/America/Chicago");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
    
  if(hour>=0600 && hour<=1800)
  {
      background("orange");
  }
  else
  {
    background("purple");
  }
}