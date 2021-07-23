var space,spaceImg
var rocket,rocImg
var distance = 0
var fueltank = 0
var score = 0
var mImg,meImg,stImg,veImg
var PLAY = 1
var END = 0
var gameState = PLAY
var gameO
var restart,restartImg
var gameS
var mix

function preload(){
  spaceImg = loadImage("space.jpg");
  rocImg = loadImage("1509422154.svg");
  EImg = loadImage("earth23.png")
  meImg = loadImage("meteor23.png")
  fuelImg = loadImage("fuel23.png")
  veImg = loadImage("mars23.png")
  gameO = loadImage("gameOver.png")
  restartImg = loadImage("restart.png")
  gameS = loadSound("gameover.mp3")
  mix = loadSound("mixkit-player-jumping-in-a-video-game-2043.wav")
  
  
}

function setup() {
  
  space = createSprite(600,600)
  space.addImage(spaceImg)
  space.scale= 4
  space.x = space.width /2;
  
  rocket = createSprite(80,220,50,50)
  rocket.addImage(rocImg)
  rocket.scale = 0.26
  

  
  distance = 0
  fueltank = 0
  score = 0
  
  venusG = new Group()
  earthG = new Group()
  meteorG = new Group()
  fuelG = new Group()
  
  rocket.setCollider("circle",150,-70,90);
 rocket.debug = false
  
}

function draw() {
  createCanvas(750,400)
  background("black")
  
  if(gameState === PLAY){
    venus()
  earth()
  meteor()
  ft()
  
  space.velocityX = -(4 + distance/100)
  distance = distance + Math.round(getFrameRate()/60);
    
    gameO.visible = false
    
    
  if(fuelG.isTouching(rocket)){
    fuelG.destroyEach()
    fueltank+=1
    mix.play();
  }
    
  if (space.x < 0){
      space.x = space.width/2;
    }
  
  
  if(earthG.isTouching(rocket)){
    earthG.destroyEach()
     score = score + 50
    mix.play();
     }
    
    if(venusG.isTouching(rocket) || meteorG.isTouching(rocket)){
       gameState = END
      gameS.play();
       }
  }
  
  if(gameState === END){
    rocket.addImage(gameO)
    rocket.x = 375
    rocket.y = 200
    rocket.scale = 1
    
    space.velocityX = 0
    
    
    venusG.destroyEach()
    meteorG.destroyEach()
    earthG.destroyEach()
    fuelG.destroyEach()
  }
  
  
  
  
  
  drawSprites()
  textStyle(BOLD)
  fill("white")
  textSize(17)
  text("DISTANCE:" + distance,560,25)
  text("FUEL TANK:" + fueltank,560,50)
  text("SCORE:" + score,420,25)
  text("Score is determined by planet Earth.",10,25)
  text("Not to touch the planet Mars and the Meteor.",10,50)
  text("Remember to take the fuel tank.",10,75)
  
  
  
  rocket.y = World.mouseY
}


function venus (){
  if(frameCount%160===0){
  player1 = createSprite(750,round(random(50,350)),20,20)
  player1.scale =0.16;
  player1.velocityX = -3
  player1.addImage(veImg);
  venusG.add(player1)
  player1.depth = rocket.depth
  rocket.depth+=1
  
}
}
function earth (){
  if(frameCount%270===0){
  player2 = createSprite(750,round(random(50,350)),20,20)
  player2.scale =0.18;
  player2.velocityX = -3
  player2.addImage(EImg);
  earthG.add(player2)
  player2.depth = rocket.depth
  rocket.depth+=1
}
}
function meteor (){
  if(frameCount%200===0){
  player3 = createSprite(750,round(random(50,350)),20,20)
  player3.scale =0.18;
  player3.velocityX = -3
  player3.addImage(meImg);
  meteorG.add(player3)
  player3.depth = rocket.depth
  rocket.depth+=1
  
}
}
function ft (){
  if(frameCount%419===0){
  player4 = createSprite(750,round(random(50,350)),20,20)
  player4.scale =0.18;
  player4.velocityX = -3
  player4.addImage(fuelImg);
  fuelG.add(player4)
  player4.depth = rocket.depth
  rocket.depth+=1
    
  
  
  
  
}
}






  
  
  
  






