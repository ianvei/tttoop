import Game from "./game.js"
import GameView from "./gameview.js";

let game = new Game();

let gameView = new GameView(document.getElementById('app'));

gameView.onTileClick = function(i){
    console.log(`tile clicked ${i}`)
};

gameView.onRestartClick = function(i){
    console.log(`tile clicked ${i}`)
};