 
const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Bodies;

var engine;
var world;
var body;
function setup(){
createCanvas (400,400);
engine = Engine.create();
world = engine.world;
body = Body.rectangle(100,150,25,20);
World.add(world,body);

console.log(body.position.y);
}


function draw(){
    background("black");
    Engine.update(engine);
    rectMode(CENTER);
  circle(body.position.x,body.position.y,20);
 
 
    
}

//the objects are stored in curly braces{} in computers's memory
//name spacing