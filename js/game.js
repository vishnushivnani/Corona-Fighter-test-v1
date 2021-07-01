class Game{
  constructor(){

  }
  getState() {
      var gameStateRef = database.ref('gameState');
      gameStateRef.on("value", function (data) {
          gameState = data.val();
      })

  }

  update(state) {
      database.ref('/').update({
          gameState: state
      });
  }
  async start() {
          if (gameState === 0) {
              player = new Player();
              var playerCountRef = await database.ref('playerCount').once("value");
              if (playerCountRef.exists()) {
                  playerCount = playerCountRef.val();
                  player.getCount();
              }
              form = new Form()
              form.display();
          }
  player1 = createSprite(200,500);
  player1.addAnimation("player1",player_img);
  player1.scale = 0.09;
  
  player2 = createSprite(800,500);
  player2.addAnimation("player2", player_img);
  player2.scale = 0.09;
  players=[player1,player2];
  anyPlayer.add(player1);
  anyPlayer.add(player2);
  

  healthbar = new HealthBar(x,y,healthbarWidth,healthbarHeight,health,"green");
  healthbar2 = new HealthBar(x,y,healthbarWidth,healthbarHeight,health,"yellow");

      }
  
  play(){
      
              form.hide();

              Player.getPlayerInfo();
               image(trackImg, 0, 0, 1000, 800);
               var x=100;
               var y=200;
               var index=0;
               //var players= [index-1]
               drawSprites();
               //fill(random(0,255),random(0,255),random(0,255));
               //textSize(25);
              // text("Score :"+Score,100,100)
               for(var plr in allPlayers){
                  
                  
                   index = index+1;
                   x=500-allPlayers[plr].distance;
                   y=500;
                   
                   players[index-1].x=x
                   players[index-1].y=y
                
                   
                   if(index === player.index){
                       
                       fill("black");
                       textSize(25);
                       text(allPlayers[plr].name ,x-25,y+25);
                   }

                  }
                  if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }

                if(frameCount%220===0){
                    var diseases = createSprite(random(100,500),0);
                    diseases.velocityY = 2
                    var rand = Math.round(random(1,2));
                    switch(rand){
                        case 1 : diseases.addImage(Corona_Img);
                        diseases.scale = 0.2;
                        break;
                        case 2 :diseases.addImage(black_fungus);
                        diseases.scale = 0.2;
                        break;
                        default:break;



                }
            }
             /*   var diseases = createSprite(100,100);
                diseases.addImage(Mask_Img);
                diseases.scale = 0.5*/

               

               if (frameCount % 125 === 0 ){
                 health_Boosters = createSprite(random(50,800),0);
                //health_Boosters.addImage(Sanitizer_img);
                health_Boosters.scale = 0.2;
                health_Boosters.velocityY = 4
                var rand = Math.round(random(1,2));
               
                switch(rand){
                case 1 :  health_Boosters.addImage(Sanitizer_img);
                health_Boosters.scale = 0.2;
               health_Boosters.lifetime = 90
      
       break;
       case 2 :  health_Boosters.addImage(Mask_Img);
       health_Boosters.scale = 0.5;
      health_Boosters.lifetime = 90


break;
default:break;
                }




               }
                

                if(frameCount%80 === 0){
                  
                 
                
 
                   stalls = createSprite(random(100, 900), 0, 100, 100);
                  stalls.velocityY = 6;
                  stalls.lifetime = 200
                  stalls.debug = true
                  var rand = Math.round(random(1,2));
                  switch(rand){
                    case 1 : stalls.addImage(fruitStall_Img);
                             stalls.scale = 0.2; 
                             stalls.lifetime = 90
                   
                    break;
                    case 2 :  stalls.addImage(junkFoodStall_Img);
                              stalls.scale = 0.09;
                              stalls.lifetime = 90

                    
                    break;
                  
                    default:break;
                    
                  
                  }
                  allStalls.add(stalls)
                  
                }
                if (player.index !== null) {
                  //fill code here, to destroy the objects.
                  for (var i = 0; i < allStalls.length; i++) {
                     if (allStalls.get(i).isTouching(players)) {
                         allStalls.get(i).destroy();
                         //Score++
                      
                         
                     }
                     
                 }}

                            }}