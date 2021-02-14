

var spritImg
var bgImg
function preload(){
spritImg=loadImage("images/Hot Air Ballon-02.png")
bgImg=loadImage("images/Hot Air Ballon-01.png")



}
function setup() {
  createCanvas(800,400);
  database= firebase.database();
  balloon= createSprite(400, 200, 50, 50);
  balloon.addImage(spritImg)
  balloon.scale=0.5
    balloon.shapeColor = "yellow";
     var balloonRef=database.ref('balloon/property')
     balloonRef.on("value",function(data){
         pos = data.val();
        balloon.x=pos.x
        balloon.y=pos.y
     })
 
}

function draw() {
  background(bgImg);
    if(keyDown(LEFT_ARROW)){
      changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
      changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
      changePosition(0,1);
    }
  drawSprites();
}

function changePosition(x,y){
  var dataRef = database.ref('balloon/property');
  dataRef.set({
      x:pos.x+x,
      y:pos.y+y
  })
}