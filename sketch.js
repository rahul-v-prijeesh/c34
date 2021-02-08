var Constraint=Matter.Constraint
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ball


function setup(){
    engine = Engine.create();
    world = engine.world;
    createCanvas(3000,800)
    ground=Bodies.rectangle(width/2,800,width,20,{isStatic:true})
    World.add(world,ground);
ball=Bodies.circle(200,200,40,40)
 World.add(world,ball)  ;
 box1=new Box(900,100)
 box2=new Box(900,100);
  box3=new Box(900,100);
   box4=new Box(900,100);
   box5=new Box(900,100);
   box6=new Box(900,100)
   box7=new Box(900,100)
   box8=new Box(800,100)
   box9=new Box(800,100)
   box10=new Box(800,100)
   box11=new Box(800,100)
   box12=new Box(800,100)
   box13=new Box(800,100)
   box14=new Box(700,100)
   box15=new Box(700,100)
   box16=new Box(700,100)
   box17=new Box(700,100)
   box18=new Box(700,100)
   box19=new Box(700,100)
 sling=new SlingShot(ball,{x:400,y:200})
}

function draw(){
    Engine.update(engine);
    background(0); 
    ellipseMode(CENTER)
ellipse(ball.position.x,ball.position.y,80,80);

rectMode(CENTER)
rect(ground.position.x,ground.position.y,3000,20)
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    sling.display()
    drawSprites();
}   

