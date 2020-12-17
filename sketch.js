var wall,thickness;

var bullet,speed,weight;


function setup() {
  createCanvas(1700,400);
  speed=random(223,321)
  thickness=random(22,83)
  weight=random(30,50)

  bullet=createSprite(50,200,50,50)
  bullet.velocityX=speed;
  bullet.shapeColor=color(255);

  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor=color("white")

}

function draw() {
  background(0);  
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
    if (damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10)
    {
      wall.shpeColor=color(0,255,0)
    }
  }
  drawSprites();
}

function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false
}




