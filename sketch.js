var thickness, wall;
var bullet, speed, weight;

function setup() 
{
  createCanvas(1600,400);

  speed=random(55,90);
  thickness=random(22,83);

  bullet = createSprite(50, 200, 100, 20);
  bullet.velocityX=random(223, 321);
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() 
{
  background(255,255,255);  

  if(hasCollided(bullet, wall))
  {
    bullet.velocityX=0;
    var damage = Math.round(weight * speed * speed/(thickness * thickness * thickness));
    console.log(damage);
    if(damage>10)
    {
        wall.shapeColor=color(255,0,0);
    }
    
    if(damage<10)
    {
        bullet.shapeColor=color(0,255,0);
    }
  }

  drawSprites();
}

function hasCollided(lbullet, lwall)
{
    bulletRightEdge=lbullet.x+lbullet.width;
    wallLeftEdge=lwall.x;
    if (bulletRightEdge>=wallLeftEdge)
    {
      return true;
    }
    return false;
}