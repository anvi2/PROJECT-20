var back,backImg;
var tom , jerry,tomImg1,jerryImg1 , tomImg2 , jerryImg2 , tomHappy , jerryHappy;




function preload() {
    //load the images here
    backImg=loadImage("images/garden.png");
    tomImg=loadImage("images/tomOne.png");
    jerryImg=loadImage("images/jerryOne.png");
    tomImg2 = loadAnimation("images/tomTwo.png" , "images/tomThree.png");
    jerryImg2 = loadAnimation("images/jerryTwo.png" , "images/jerryThree.png");
    tomHappy = loadAnimation("images/tomFour.png");
    jerryHappy = loadAnimation("images/jerryFour.png");


}

function setup(){
    createCanvas(800,800);
    back=createSprite(400,400);
    back.addImage(backImg);
    //back.scale = 2;
    //create tom and jerry sprites here
    tom=createSprite(600,600,50,50);
    tom.addImage(tomImg);
    tom.scale = 0.2;
    jerry=createSprite(140,600,50,50);
    jerry.addImage(jerryImg);
    jerry.scale = 0.2;

}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide
    if((tom.x - jerry.x) < (tom.width - jerry.width)/2){
        jerry.addAnimation("happy" , jerryHappy);
        jerry.changeAnimation("happy" , jerryHappy);
        tom.addAnimation("happy" , tomHappy);
        tom.changeAnimation("happy" , tomHappy);

        tom.velocityX = 0;
        tom.x += 100;



    }

    drawSprites();
}


function keyPressed(){
    if(keyCode === LEFT_ARROW){
        jerry.addAnimation("tease" , jerryImg2);
        jerry.changeAnimation("tease" , jerryImg2);

        tom.velocityX = -4;
        tom.addAnimation("walking" , tomImg2);
        tom.changeAnimation("walking" , tomImg2);
    }

  //For moving and changing animation write code here


}
