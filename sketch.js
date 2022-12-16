var fox;
var road;
var rocks;
var startingbg;

var gameState = "end";

let engine;
let world;


function preload()
{
    foxImg = loadImage("fox.png");
    roadImg = loadImage("road.jpg");
    rocksImg = loadImage("rockobstacle.png");
    startingbg = loadImage("startingbg1.webp");
    
}



function setup()
{
    createCanvas(windowWidth, windowHeight);


    road = createSprite(displayWidth/2,windowHeight-300,windowWidth,1);
    road.addImage("road",roadImg);
    road.velocityX = -2;
    road.scale = 6.2;
    road.x = windowWidth/2;

    fox = createSprite(100,600,10,10);
    fox.addImage("fox",foxImg);
    fox.scale=0.1

    /*rocks = createSprite(800,600,10,10);
    rocks.addImage("rocks",rocksImg);
    rocks.scale=0.3*/

   
}

function draw()
{
    background(startingbg);
    //image(startingbg,0,0,displayWidth+80,displayHeight);

    push();
    imageMode(CENTER);
0

    if (road.x < windowWidth/3+150){
        road.x=windowWidth/2;
    }

    pop();

    if(keyDown(LEFT_ARROW))
    {
        fox.x-=5;
    }

    if(keyDown(RIGHT_ARROW))
    {
        fox.x-=-5
    }

    if(keyDown(DOWN_ARROW))
    {
        fox.y-=-5
    }

    if(keyDown(UP_ARROW))
    {
        fox.y-=5
    }

    spawnRocks();
    
    drawSprites();
}


function spawnRocks(){
    if (frameCount % 200 === 0){
        var rand = Math.round(random(200,800));
        var rocks = createSprite(800,rand,10,10);
        rocks.addImage("rocks",rocksImg);

        //var rand= Math.round(random(1));
        rocks.velocityX = -2;
        rocks.scale=0.2;
        rocks.lifetime = 400;
    }
}

