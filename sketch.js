const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body=Matter.Body

var box1,box2,box3;
var ground, ball;

let paperimage,dustbinimages,backgroundimage

function preload(){
paperimage=loadImage("paper.png")
dustbinimages=loadImage("dustbingreen.png")
backgroundimage=loadImage("images.jpg")
}



function setup(){
  createCanvas(800,600)
  
  engine=Engine.create()
  world=engine.world
  box1=new Dustbin(700,565,170,20)
  box2=new Dustbin(615,515,20,120)
  box3=new Dustbin(785,515,20,120)
  
  // Creating new Ground
  ground=new Ground(800,585)
  paper=new Paper(250,450,40)

}

function draw(){
  background(backgroundimage)
  Engine.update(engine)

  ground.display()
paper.display()
  box1.display()
  box2.display()
  box3.display()

  }

  function keyPressed(){ 
    if(keyCode === UP_ARROW){
      Matter.Body.applyForce(paper.body, paper.body.position,{x:25,y:-35}); 
     } 
   }

  
