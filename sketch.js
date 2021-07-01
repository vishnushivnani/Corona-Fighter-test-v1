var runner ;
var runner1,runner2,allPlayers;
var gameState = 0;
var playerCount;
var survivalTime= 0 ;
var database;
var trackImg,Running_Img;
var player
var form
var allPlayers; 
var Mask_Img

const x = 200;
const y = 200
const healthbarWidth = 200;
const healthbarHeight = 20;
let health = 100;
 var hploss ;
 var player, form,game;
var player1,player2;
var players;
var player_img;
var healthbar,healthbar2;
var index = 0;
var Sanitizer_img;
var junkFoodStall_Img,fruitStall_Img;
var survivalTime,Counter = 0;
var health_Boosters,diseases,stalls;
var anyPlayer ;//= new Group();
var allStalls;
var Corona_Img,black_fungus;







function preload(){
   trackImg = loadImage("track.png");
   player_img = loadAnimation("Runner-1.png","Runner-2.png");
   Corona_Img = loadImage("Corona_Img.png");
   Mask_Img = loadImage("MASK.png");
   Sanitizer_img = loadImage("Sanitizer.png");
   junkFoodStall_Img = loadImage("junkFoodStall.png");
   fruitStall_Img = loadImage("fruitStall.png");
   allStalls = new Group();
   black_fungus= loadImage("black_fungus.png")
}

function setup(){
   createCanvas(windowWidth,windowHeight);
   database = firebase.database();
   anyPlayer = new Group();
   

   game = new Game();
   game.getState();
   game.start();
  // if(gameState===1){
   survivalTime = select('#timer');
   survivalTime.position(width/2-100,20)
   function timeIt(){
    Counter++;
    survivalTime.html("SurvivalTime : "+ convertSeconds(Counter));

}
function convertSeconds(s){
    var min = floor(s/60)
    var sec = s % 60
    return min + ':' + sec

}


    setInterval(() => {timeIt();
       
    }, 1000);
    
  // }


  
  
  /* healthbar = new HealthBar(x,y,healthbarWidth,healthbarHeight,health,"green");
   healthbar2 = new HealthBar(x,y,healthbarWidth,healthbarHeight,health,"yellow");
   hploss = createButton("hploss");
   hploss.position(200,500);*/


}
function draw(){
   // background(1000);
    //healthbar2.display();
    //healthbar.display();
   
    background(0);
  
    if (playerCount === 2) {
      game.update(1);
    }
    if (gameState === 1) {
      clear(); 
      game.play();
    }
    if (gameState === 2) {
     
      game.end();
    }
 }
   /* drawSprites();
    hploss.mousePressed(()  =>{
        health -= 10;
        healthbar.updateHealth(health);*
    })*/
   
