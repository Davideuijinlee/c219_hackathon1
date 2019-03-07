$(document).ready(startGame);
var gameboard;
var city = [];

function startGame() {
    gameboard = new GameBoard();
    city = []
}

// function clickInput(){

// }

var players = [];
players.push(new Player('Player 1', 1));
players.push(new Player('Player 2', 2));


