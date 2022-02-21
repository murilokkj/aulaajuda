class Form{
    
     constructor(){
        this.input = createInput("nominho:");
        this.botao = createButton("playzinho");
        this.greeting = createElement("h3");
     }
    
    display(){
         var title = createElement("h2");
         title.html("corridinha!");
         title.position(displayWidth /2,0);
         
         this.input.position(displayWidth /2,displayHeight /2);
         this.botao.position(displayWidth /2,displayHeight /2 + 50);
     

         this.botao.mousePressed(()=>{
            this.input.hide();
            this.botao.hide();
         player.name = this.input.value();
         playerCount +=1;
         player.update();
         player.updateCount(playerCount);
         this.greeting.html("bem vindinho " + player.name);
         this.greeting.position(displayWidth /2,displayHeight /2);
        player.index = playerCount
        })

    }
    hide (){
        this.greeting.hide();
        this.input.hide();
        this.botao.hide();
    }
}