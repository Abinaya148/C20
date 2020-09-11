var fixedrect, movingrect;
var fixedrect1, movingrect1;

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 50);
  movingrect = createSprite(700,100,70,40);
  fixedrect1 = createSprite(200, 100, 50, 50);
  movingrect1 = createSprite(600,100,70,40);
  fixedrect1.shapeColor = "green"
   movingrect1.shapeColor = "green"
   fixedrect1.velocityX = 5
   movingrect1.velocityX =-5
}

function draw() {
  background(255,255,255);
  movingrect.x = mouseX;
  movingrect.y = mouseY;
  bounceOff();
  isTouching(); 
  drawSprites();
}
function isTouching(){
if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2  &&
  fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2  &&
  movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2 &&
  fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2 ){
    fixedrect.shapeColor = "blue"
   movingrect.shapeColor = "blue"
  }
  else{
    fixedrect.shapeColor = "pink"
   movingrect.shapeColor = "pink"
  }
}
function bounceOff(){
  if(movingrect1.x-fixedrect1.x<movingrect1.width/2+fixedrect1.width/2  &&
    fixedrect1.x-movingrect1.x<fixedrect1.width/2+movingrect1.width/2 ){
      fixedrect1.velocityX =fixedrect1.velocityX*(-1) 
      movingrect1.velocityX =movingrect1.velocityX*(-1) 
    }
    if(movingrect1.y-fixedrect1.y<movingrect1.height/2+fixedrect1.height/2  &&
      fixedrect1.y-movingrect1.y<fixedrect1.height/2+movingrect1.height/2 ){
        fixedrect1.velocityY =fixedrect1.velocityY*(-1) 
        movingrect1.velocityY =movingrect1.velocityY*(-1) 
      }
}