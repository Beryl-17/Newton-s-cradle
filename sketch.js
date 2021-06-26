const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ball;
var ball2;
var ball3;
var ball4;
var ball5;
var ball6;
var ground;
var con;
var con2;
var con3;
var con4;
var con5;
var con6;
var roof;



function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  var ball_options = {
    restitution: 0.8
    
  }
  
  ball = Bodies.circle(90,250,12,ball_options);
  World.add(world,ball);
  
  
  ball2 = Bodies.circle(110,250,12,ball_options);
  World.add(world,ball2);
  
 ball3 = Bodies.circle(130,250,12,ball_options);
  World.add(world,ball3);
  ball4 = Bodies.circle(150,250,12,ball_options);
  World.add(world,ball4);
  ball5 = Bodies.circle(170,250,12,ball_options);
  World.add(world,ball5);
  ball6 = Bodies.circle(190,250,12,ball_options);
  World.add(world,ball6);
  
  con = Matter.Constraint.create({
    pointA:{x:90,y:20},
    bodyB:ball,
    pointB:{x:0,y:0},
    length:100,
    stiffness:0.1
  });
  World.add(world,con);
      
  con2 = Matter.Constraint.create({
       
        pointA:{x:110,y:20},
         bodyB:ball2,
         pointB:{x:0,y:0},
         length:100,
        stiffness:0.1
       }); 
       World.add(world,con2);
  con3 = Matter.Constraint.create({
       
        pointA:{x:130,y:20},
         bodyB:ball3,
         pointB:{x:0,y:0},
         length:100,
        stiffness:0.1
       });  
       World.add(world,con3);  
  con4 = Matter.Constraint.create({
       
        pointA:{x:150,y:20},
         bodyB:ball4,
         pointB:{x:0,y:0},
         length:100,
        stiffness:0.1
       });  
       World.add(world,con4);
   con5 = Matter.Constraint.create({
       
        pointA:{x:170,y:20},
         bodyB:ball5,
         pointB:{x:0,y:0},
         length:100,
        stiffness:0.1
       });  
       World.add(world,con5);
    con6 = Matter.Constraint.create({
       
        pointA:{x:190,y:20},
         bodyB:ball6,
         pointB:{x:0,y:0},
         length:100,
        stiffness:0.1
       });  
       World.add(world,con6);
//
  // World.add(world,con2);
  
  //rectMode(CENTER);
  //ellipseMode(RADIUS);
  var roof_options={
		isStatic:true			
	}
  roof = Bodies.rectangle(160,20,280,16,roof_options);
  World.add(world,roof);

Engine.run(engine);

rectMode(CENTER);
ellipseMode(RADIUS);
}

function draw() {
rectMode(CENTER);
background("#99004d");
rect(roof.position.x,roof.position.y,230,20);

  ellipse(ball.position.x,ball.position.y,12);
  ellipse(ball2.position.x,ball2.position.y,12);
  ellipse(ball3.position.x,ball3.position.y,12);
  ellipse(ball4.position.x,ball4.position.y,12);
  ellipse(ball5.position.x,ball5.position.y,12);
  ellipse(ball6.position.x,ball6.position.y,12);

  push();
  strokeWeight(2);
  stroke(255);
 line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
 line(con2.pointA.x,con2.pointA.y,ball2.position.x,ball2.position.y);
 line(con3.pointA.x,con3.pointA.y,ball3.position.x,ball3.position.y);
 line(con4.pointA.x,con4.pointA.y,ball4.position.x,ball4.position.y);
 line(con5.pointA.x,con5.pointA.y,ball5.position.x,ball5.position.y);
 line(con6.pointA.x,con6.pointA.y,ball6.position.x,ball6.position.y);
  pop();
  push();
  strokeWeight(2);
  stroke(255);
  
  pop();
  
}

function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0.01,y:0});
    }
}

