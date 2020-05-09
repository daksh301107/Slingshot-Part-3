const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;


//function preload() {
  //  backgroundImg = loadImage("sprites/bg.png");
//}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Box(600,height,400,20);
    ground1=new Ground(750,300,30,40);
    ground2=new Ground(720,100,30,40);
    ground3=new Ground(690,300,30,40);
    ground4=new Ground(660,300,30,40);
    ground5=new Ground(630,300,30,40);
    ground6=new Ground(600,300,30,40);
    ground7=new Ground(570,300,30,40);
    ground8=new Ground(540,300,30,40);
    ground9=new Ground(510,300,30,40);
    ground10=new Ground(480,300,30,40);
    ground11=new Ground(450,300,30,40);
    ground12=new Ground(510,300,30,40);
    ground13=new Ground(480,300,30,40);
    ground14=new Ground(450,300,30,40);
    ground15=new Ground(420,300,30,40);
    ground16=new Ground(750,350,30,40);
    ground17=new Ground(720,350,30,40);
    ground18=new Ground(690,350,30,40);
    ground19=new Ground(660,350,30,40);
    ground20=new Ground(630,350,30,40);
    ground21=new Ground(600,350,30,40);
    ground22=new Ground(570,350,30,40);
    ground23=new Ground(540,350,30,40);
    ground24=new Ground(510,350,30,40);
    ground25=new Ground(480,350,30,40);
    ground26=new Ground(450,350,30,40);
    ground27=new Ground(420,350,30,40);
    ground28=new Ground(720,300,30,40);
    ground29=new Ground(690,250,30,40);
    ground30=new Ground(660,250,30,40);
    ground31=new Ground(630,250,30,40);
    ground32=new Ground(600,250,30,40);
    ground33=new Ground(570,250,30,40);
    ground34=new Ground(540,250,30,40);
    ground35=new Ground(510,250,30,40);
    ground36=new Ground(480,250,30,40);
    ground37=new Ground(450,250,30,40);
    ground38=new Ground(420,250,30,40);
   // slingshot2 = new Slingshot(bird.body,{x:200, y:40});
    ground43=new Ground(750,250,30,40);
    ground44=new Ground(720,250,30,40);

  //  platform = new Ground(150, 305, 300, 170);

   // box1 = new Box(700,320,70,70);
    //box2 = new Box(920,320,70,70);
    //pig1 = new Pig(810, 350);
    //log1 = new Log(810,260,300, PI/2);

    //box3 = new Box(700,240,70,70);
    //box4 = new Box(920,240,70,70);
    //pig3 = new Pig(810, 220);

    //log3 =  new Log(810,180,300, PI/2);

    //box5 = new Box(810,160,70,70);
    //log4 = new Log(760,120,150, PI/7);
    //log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,40);
    //bird.shapeColor=(255);

    //log6 = new Log(230,180,80, PI/2);
    slingShot = new SlingShot(bird.body,{x:200,y:40});
}

function draw(){
    background(255);
    Engine.update(engine);
    strokeWeight(4);
    //box1.display();
    //box2.display();
    ground.display();
    ground1.display();
    ground3.display();
    ground4.display();
    
    ground5.display();
    ground6.display();
    ground7.display();
    ground8.display();
    ground18.display();
    ground19.display();
    ground20.display();
    ground21.display();
    ground22.display();
    ground23.display();
    ground24.display();
    ground25.display();
    ground26.display();
    ground27.display();
    ground28.display();
    ground29.display(); 
    ground30.display();
    ground31.display();
    ground32.display();
    ground33.display();
    ground34.display();
    ground35.display();
    ground36.display();
    ground37.display();
    ground38.display();
    ground43.display();
    ground44.display();
   // slingshot2.display();  

    //pig1.display();
    //log1.display();

    //box3.display();
    //box4.display();
    //pig3.display();
    //log3.display();

    //box5.display();
    //log4.display();
    //log5.display();

    bird.display();
    ground2.display();
    ground12.display();
    ground13.display();
    ground14.display();
    ground15.display();
    ground16.display();
    ground17.display();
    ground2.display();
    ground2.display();
    //platform.display();
    //log6.display();
    slingShot.display();    
}
function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}