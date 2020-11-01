function isTouching (movingRect, fixedRect)
{
	if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2&&
	movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2&&fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2)
  { 
  return true;
  }
  else
  {
  return false;
  }
}
 
 function bounceOff (movingRect, fixedRect)
 {
if(movingRect.x-fixedRect.x===movingRect.width/2+fixedRect.width/2 || fixedRect.x-movingRect.x===movingRect.width/2+fixedRect.width/2){
	      fixedRect.velocityX = movingRect.velocityX;
		  movingRect.velocityX = -(fixedRect.velocityX);
		  //movingRect.velocityX = 0;
	      //fixedRect.velocityX = movingRect.velocityX;
 }
  }