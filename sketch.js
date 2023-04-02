var canvas;
var backgroundImage,thief,police, track;
var obstacle1Image, obstacle2Image;                        //C41// SA
var database, gameState;
var form, player, playerCount;
var allPlayers, theif, police,obstacle1,obstacle2; // C41//SA
var catchImage;                   //C42// SA

function preload() {
  theifImg=loadImage("assets/CARS/thiefvan.png");
  policeImg=loadImage("assets/CARS/policecar.png");
  fuelImg=loadImage("assets/fuel.png");
  cars1Img=loadImage("assets/CARS/car1.png");
  cars2Img=loadImage("assets/CARS/car2.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(0);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
