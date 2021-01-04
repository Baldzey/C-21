var fixedRect, movingRect;

var gOb1, gOb2, gOb3, gOb4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;


  gOb1 = createSprite(100,100,50,50);
  gOb1.shapeColor = "green";
  gOb2 = createSprite(200,200,50,50);
  gOb2.shapeColor = "green";
  gOb3 = createSprite(300,300,50,50);
  gOb3.shapeColor = "green";
  gOb4 = createSprite(400,400,50,50);
  gOb4.shapeColor = "green";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(isTouching(movingRect, gOb3)){
  movingRect.shapeColor = "red";
  gOb3.shapeColor = "red";

}
else {
  movingRect.shapeColor = "green";
  gOb3.shapeColor = "green";
}
  drawSprites();
}

function isTouching(object1, object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
  return true; 
} 
else {
  return false;
}



}