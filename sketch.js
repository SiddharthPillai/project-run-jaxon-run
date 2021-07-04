var path , pathImg
var boy , boyImg








function preload(){
  //pre-load images
  pathImg=loadImage ('path.png')
  powerImg=loadImage ( " power.png")
  boyImg = loadAnimation ('Runner-1.png','Runner-2.png')

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200)
  path.addImage(pathImg)
  boy=createSprite(200,200)
  boy.addAnimation ('running', boyImg)
  boy.scale=0.1
}

function draw() { 
  background(0);
drawSprites()
path.velocityY = 4;
path.scale=1.2;

if(path.y>400) {
  path.y = height/2;
}
}
