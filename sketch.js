var car ,  car2, wall;
var speed , weight;


function setup() {
  
  
  createCanvas(1600,400);
 car=createSprite(400, 200, 50, 50);
 speed=random(0,200)
 wall=createSprite(1590,200,20,400);
 wall.shapeColor=("gray")
 weight=random(400,1500);
 car.velocityX=speed;
 car.shapeColor=("white");
 car2=createSprite(400,300,50,50);
 car2.velocityX=speed;
 car2.shapeColor=("white");
}

function draw() {
  if(wall.x-car.x<(wall.width/2+car.width/2)){
    car.velocityX=0;
 var deformation=0.5*weight*speed*speed/22500
 if(deformation>100){
   car.shapeColor=color(255,0,0);
 }
 if(deformation<180 && deformation>100){
   car.shapeColor=color(230,230,0);
 }
 if(deformation<100){
   car.shapeColor=color(0,255,0)
 }
  }
  if(wall.x-car2.x<(wall.width/2+car2.width/2)){
    car2.velocityX=0;
 var deformation=0.5*weight*speed*speed/22500
 if(deformation>100){
   car2.shapeColor=color(255,0,0);
 }
 if(deformation<180 && deformation>100){
   car2.shapeColor=color(230,230,0);
 }
 if(deformation<100){
   car2.shapeColor=color(0,255,0)
 }
  }
  background(0,0,0);  
  drawSprites();
 }