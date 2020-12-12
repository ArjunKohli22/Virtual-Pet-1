var dog, happyDog, database, foodS, foodStock;
function preload()
{
  dogImg = loadImage("dogImg.png");
  dogImg1 = loadImage("dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  var dog = createSprite ;
  dog.addImage=(dogImg);
  
}


function draw() {  

  drawSprites();
if(keyWentDown(UP_ARROW)){
  writeStock(foddS);
  dog.addImage(dogHappy);

}
}



