var movingrect , fixedrect;


function setup() {
  createCanvas(800,400);
 movingrect=createSprite(400, 200, 50, 20);
fixedrect = createSprite(400,200,50,50);
movingrect.shapeColor = "green";
fixedrect.shapeColor= "blue";
}

function draw() {
  background(0,100,25);  
   movingrect.x = mouseX;
   movingrect.y = mouseY;
   if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
    && fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2
    && movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2
      && fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){
      movingrect.shapeColor = "red";
      fixedrect.shapeColor = "yellow";
      
    }
    else{ movingrect.shapeColor = "purple";
     fixedrect.shapeColor = "pink";
     }


  drawSprites();
}