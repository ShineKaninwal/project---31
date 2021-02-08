const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var maxDrops = 100;

var bruceWayne;
var rainDrop =[]

function preload(){
    batman_Walking = loadAnimation("batman.png")
bolt_1 = loadImage("images/thunderbolt/thunderBolt1.png")
bolt_2 = loadImage("images/thunderbolt/thunderBolt2.png")

}

function setup(){
    var canvas = createCanvas(400,600);
    engine = Engine.create();
    world = engine.world;
cover=new Umbrella(200,400,65)
    bruceWayne = createSprite(200,460)
    bruceWayne.addAnimation("batman.png",batman_Walking)
    bruceWayne.scale = 0.4

    thunderBolt = createSprite(200,90)

    for(var i=0;i<maxDrops;i++){
        rainDrop.push(new Rain(random(0,200),random(0,200),5))
    }
    Engine.run(engine)
    
}

function draw(){
    background("black")
    Engine.update(engine)
    cover.display();
    for (var j = 0; j < rainDrop.length; j++) {
        rainDrop[j].display();
        rainDrop[j].update();
      }


     if(frameCount%15===0){
        spawnBolt();
     }
    drawSprites();
}   

function spawnBolt(){
    
        var boltSwitch = Math.round(random(1,4));
        
    switch(boltSwitch){
        case 1: thunderBolt.addImage(bolt_1)
        thunderBolt.scale = 0.4
        break;

        case 2: thunderBolt.addImage(bolt_2)
        thunderBolt.scale = 0.4
        break;

        default: break;
    }

}
