
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  bananaGroup=new Group();
  obstacleImage = loadImage("obstacle.png");
 obstacleGroup= new Group();
}



function setup() {
  createCanvas(400,400);

  monkey=createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  
 ground = createSprite(400, 350, 900, 10);
 ground.velocityX=-4;
 ground.x=ground.width/2;
 console.log(ground.x);
  
}

function draw() {
background("white");
  
  if (ground.x<0){
    ground.x=ground.width/2;
  }
  if (keyDown("space")&& monkey.collide(ground)){
    monkey.velocityY=-12;
  }
  monkey.velocityY = monkey.velocityY + 0.6;
  monkey.collide(ground);
   
 spawnBanana();
 spawnObstacles();

  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+survivalTime, 100, 50);
  
  if (obstacleGroup.isTouching(monkey)){
   bananaGroup.velocityEach=0;
    monkey.velocity=0;
  }
  
      drawSprites();
}
  function spawnBanana() {
  if (frameCount%60===0){
 banana=createSprite(600, 200, 20, 20);
banana.addImage(bananaImage);
banana.scale=0.07;
banana.velocityX=-5;
  banana.lifeTime=300;
 
    bananaGroup.add(banana);
}
  }
  function spawnObstacles() {
     if (frameCount%80===0){
    obstacle=createSprite(600, 325, 20, 20);
      obstacle.addImage(obstacleImage);
      obstacle.scale=0.1;
      obstacle.velocityX=-5;
      obstacle.lifeTime=300;
      
      obstacleGroup.add(obstacle);
       
  }  
  }



