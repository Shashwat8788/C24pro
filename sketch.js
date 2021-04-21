const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,stone,iron;
var rubber1,rubber2,rubber3,rubber4,rubber5,rubber6,rubber7;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);

    hammer = new Hammer(10,100);

    rubber1 = new Rubber(430,500,PI);
    rubber2 = new Rubber(445,500,PI);
    rubber3 = new Rubber(460,500,PI);
    rubber4 = new Rubber(475,500,PI);
    rubber5 = new Rubber(490,500,PI);
    rubber6 = new Rubber(505,500,PI);
    rubber7 = new Rubber(520,500,PI);

    stone = new Stone(650,500);
  
    iron = new Iron(340,500);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammer.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    rubber6.display();
    rubber7.display();
    
    stone.display();

    iron.display();
}