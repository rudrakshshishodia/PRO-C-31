const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

//this is for variables
var engine ,world;
var particles=[]
var plinkos=[]
var divisions=[]
var divisionheight=300
var score=0;
var ground, ground1, ground2, ground3;
var division, division1, division2, division3;
var division4, division5, division6, division7;

function setup() {
  createCanvas(800,800);

 // world = engine.world; 
  //engine = Engine.create();
  

  
//this is for particles

 //   particles = new Particles(400, 200, 50);

 //this is for ground

 ground = new Ground(800,750,2000,50);
 

 //this is for ground1

 ground1 = new Ground(800,750,50,2000);
 

  //this is for ground2

 ground2 =new Ground(0,0,2000,50);
 

  //this is for ground3

 ground3 = new Ground(0,750,50,2000);
 
  //this is for division

 division = new Divisions(689, 624, 10, 200);

  //this is for division1

 division1 = new Divisions(578, 624, 10, 200);
 
 //this is for division2

 division2 = new Divisions(467, 624, 10, 200);

 //this is for division3

 division3 = new Divisions(356, 624, 10, 200);
 
 //this is for division4
                                
 division4 = new Divisions(245, 624, 10, 200);

 //this is for division5

 division5 = new Divisions(134, 624, 10, 200);
 
 //this is for division6

 division6 = new Divisions(28, 624, 05, 200);
 
  //this is for division7

 division7 = new Divisions(772, 624, 05, 200);


 
 
  //Engine.run(engine);


}

function draw() {
  rectMode(CENTER);
  background(1,1,1);  
  //particles.display();
  
   drawSprites();
 
}