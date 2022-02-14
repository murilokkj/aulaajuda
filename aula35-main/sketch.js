var database;
var fundo;
var gameState = 0;
var playerCount;
var form;
var player;
var game;
var allPlayers;
var carro1, carro2, carro3, carro4;
var carros;


function setup(){
  createCanvas(displayWidth,displayHeight);

   database = firebase.database();

   game = new Game();
   game.getState();
   game.start();
  
}

function draw(){
  background("white");

  drawSprites();
  
  if (playerCount === 4){
    game.update(1);

  }
  if (gameState === 1){
    clear();
    game.play();
  }

drawSprites();
}

