
const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

var ground1 
var engine, world;
var tanker
var ball
var shooter


function setup() {
     createCanvas(windowWidth,windowHeight)
     engine = Engine.create();
     world = engine.world;
     ground1 = new Ground(windowWidth/2,windowHeight,windowWidth,5)
     ball = new Ball(100,350,50)
     shooter = new ShootBall(100,100)
     canonball = new CanonBall(ball.body,shooter.body)
     
}

function draw() {
background(150)
Engine.update(engine);
ball.display()
ground1.display()
canonball.display()

}


function keyReleased(){
}