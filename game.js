class Game{

    constructor(){

    }
    
    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data){
        gameState = data.val()
        })
    }
    update(state){
        database.ref("/").update({
            gameState: state
        })
    }
    start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();


        }
         carro1 = createSprite(100,200);
         carro2 = createSprite(300,200);
         carro3 = createSprite(500,200);
         carro4 = createSprite(700,200);

         carro1.addImage(carroImg1);
         carro2.addImage(carroImg2);
         carro3.addImage(carroImg3);
         carro4.addImage(carroImg4);

        carros = [carro1, carro2, carro3, carro4];
    }
    play(){
        form.hide();
        text("O jogo começou", 150,100);
        Player.getplayerinfo();
        if (allPlayers !== undefined){
            //var display_pos = 130
            image(pistaImg, 0, -displayHeight * 4, displayWidth, displayHeight * 5);
            
            var x = 200; 
            var y;
            var index = 0;
            for(var plr in allPlayers){
            
                index = index + 1;
                x = x + 300;
                y = displayHeight - allPlayers[plr].distance;
                carros [index-1].x = x
                carros [index-1].y = y


                if(index === player.index) {
               
                 camera.position.x = displayWidth /2;
                 camera.positon.y = carros[index-1].y            
                 carros [index - 1].shapeColor = "blue";
                 
                }else{
                
                    //display_pos +=20;
                    //text(allPlayers[plr].name+ ": " + allPlayers [plr].distance, 120,display_pos);
                }
            
            }

        }
        if (keyIsDown(UP_ARROW) && player.index !== null){
            player.distance += 50;
            player.update();
        
        }
        
        drawSprites();
    }
}