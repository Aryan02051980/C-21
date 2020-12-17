var movingRect,fixedRect;
var o1;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);

  movingRect=createSprite(100,200,40,40);
  movingRect.velocityX=2;

  o1=createSprite(300,200,50,50);

}


function draw() {
  background(0);
  Bounceoff(movingRect,o1);
 
  drawSprites();
}
