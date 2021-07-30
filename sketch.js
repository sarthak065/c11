var runner,path;
var bomb,drink;
var power ,coin,edges;
var runnerrrunning,leftboundry;
var rightboundry,coinImage;
var pathImage;
function preload(){
  //pre-load images
  runnerrrunning=loadImage("Runner-1.png","Runner-2.png");
  pathimage=loadImage("path.png");
  drink=loadImage("energyDrink.png");
  coinImage=loadImage("coin.png");
  bomb=loadImage("bomb.png");
  power=loadImage("power.png");
}

function setup(){
  createCanvas(400,400);
 edges=createEdgeSprites();
 path=createSprite(200,200);
 path.addImage(pathImage)
 runner=createSprite(180,340,50,170);
runner.addAnimation("runnerer",runnerrrunning);
coin=createSprite(200,200,80,90);
coin.addImage(coinImage);
coin.scale=0.3;
leftboundry=createSprite(0,0,100,800);
rightbounry=createSprite(410,0,100,800);
leftboundry.visible=false;
rightboundry.visible=false;

  //create sprites here
}

function draw() {
  background(0);
  TextSize(50);
  Text("40",20,230);
  path.velocityY=5;
 
  path.scale=1.2;
  runner.x=world.mouseX
    if(path.y>400){
      path.y=height/2
    }
    //if (runner.isTouching(coin)){
      //coinscore=coinsore+1;
    //}//
    runner.collide(leftboundry)
    runner.collide(rightboundry)
    
   runner.collide(edges)
drawSprites();
}
