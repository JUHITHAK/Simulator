var car,car1,car2;
var wall,wall1,wall2;
var speed,weight;
var line,line1,line2;


function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50, 200, 30, 30);
  
  wall = createSprite(1300,200,20,60);
  wall.shapeColor = "white";
  
  car.velocityX = speed;
  
  
}

function draw() {
  background(24,24,23);   

  if(wall.x - car.x < (car.width + wall.width)/2){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509
  }
  if(deformation > 180){
    car.shapeColor = color(255,0,0)
  }

  if(deformation < 180 && deformation > 100 ){
    car.shapeColor = color(230,230,0)
  }

  if(deformation < 100){
    car.shapeColor = color(0,255,0)
  }

  

  drawSprites();
}