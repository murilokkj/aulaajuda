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

var carroImg1, carroImg2, carroImg3, carroImg4
var pistaImg, chaoImg;

function preload(){

  carroImg1 = loadImage("imagens/car1.png");
  carroImg2 = loadImage("imagens/car2.png");
  carroImg3 = loadImage("imagens/car3.png");
  carroImg4 = loadImage("imagens/car4.png");

  pistaImg = loadImage("imagens/track.jpg");
  chaoImg = loadImage("imagens/ground.png");

}

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

