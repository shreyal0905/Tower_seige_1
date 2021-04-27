const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world

  ground = new Ground(500,500,250,15);

  block1 = new Block(400,473,30,40)
  block2 = new Block(430,473,30,40)
  block3 = new Block(460,473,30,40)
  block4 = new Block(490,473,30,40)
  block5 = new Block(520,473,30,40)
  block6 = new Block(550,473,30,40)
  block7 = new Block(580,473,30,40)
  //block8 = new Block(600,473,30,40)

  block9 = new Block(415,434,30,40);
  block10 = new Block(445,434,30,40);
  block11 = new Block(475,434,30,40);
  block12 = new Block(505,434,30,40);
  block13 = new Block(535,434,30,40);
  block14 = new Block(565,434,30,40);

  block15 = new Block(430,395,30,40);
  block16 = new Block(460,395,30,40);
  block17 = new Block(490,395,30,40);
  block18 = new Block(520,395,30,40);
  block19 = new Block(550,395,30,40);

  block20 = new Block(445,355,30,40);
  block21 = new Block(475,355,30,40);
  block22 = new Block(505,355,30,40);
  block23 = new Block(535,355,30,40);

  block24 = new Block(460,315,30,40);
  block25 = new Block(490,315,30,40);
  block26 = new Block(520,315,30,40);

  block27 = new Block(475,275,30,40);
  block28 = new Block(505,275,30,40);

  block29 = new Block(490,235,30,40);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon)

  slingshot = new Slingshot(this.polygon,{x:100,y:200});



}

function draw() {
  background("black");  
  Engine.update(engine); 

  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  //block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display()
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();

  Slingshot.display();


  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}