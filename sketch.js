var  dogImage, dogHappy;
var dog, database, foodStock;

function preload()
{
	dogImage = loadImage("images/dogImg.png");
  dogHappy = loadImage("images/dogImg1.png")
}

function setup() {
  
  database = firebase.database();
  
	createCanvas(500, 500);
  
    dog = createSprite(250,250);
    dog.addImage(dogImage)
    dog.scale = 0.1;
  
  foodStock = database.ref('/food');
  
}


function draw() {  
   
   background(46, 139, 87);
  
   drawSprites();
  
   if (keyWentDown(UP_ARROW)){
     writeStock(foodStock);
     dog.addImage(dogHappy);
   }

   text("Food Left: "+foodStock, 10, 10);

}

function readStock(){

  foodS = database.val();
  
}

function writeStock(x){
  
  if (x<=0){
    x = 0;
  } else{
    x = x-1;
  }

  database.ref('/').update({
    Food:x
  })
  
}



