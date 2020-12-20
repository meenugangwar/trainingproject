const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(2000,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(900,100,50,50);
    box2 = new Box(900,100,50,100);
    box3 = new Box(900,300,50,50);
    box4 = new Box(840,100,50,100);
    box5 = new Box(800,300,50,50);
    box6 = new Box(840,100,50,100);
    box7 = new Box(800,300,50,50);
    box8 = new Box(840,100,50,100);
    box9 = new Box(700,300,50,50);
    box10 = new Box(740,100,50,100);
    box11 = new Box(700,300,50,50);
    box12 = new Box(740,100,50,100);
    box13 = new Box(600,300,50,50);
    box14 = new Box(640,100,50,100);
    box15 = new Box(900,100,50,50);
    box16 = new Box(900,100,50,100);
    box17 = new Box(900,300,50,50);
    box18 = new Box(840,100,50,100);
    box19 = new Box(800,300,50,50);
    box20 = new Box(840,100,50,100);
    box21 = new Box(900,100,50,50);
    box22 = new Box(900,100,50,100);
    box23 = new Box(900,300,50,50);
    box24 = new Box(840,100,50,100);
    box25 = new Box(800,300,50,50);
    box26 = new Box(900,100,50,50);
    box27= new Box(900,100,50,100);
    box28 = new Box(900,300,50,50);
    box29 = new Box(840,100,50,100);
    box30 = new Box(800,300,50,50);

    ground = new Ground(600,500,1200,20)
    ball1 =  new Ball(100,100,80,80,PI/2) ;

    rope = new Rope(ball1.body, { x: 850, y: 50 });
}

function draw(){
    background("pink");
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
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
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();

    
    ground.display();
    ball1.display();

    rope.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball1.body,{x:mouseX, y:mouseY});
}