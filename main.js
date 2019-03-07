$(document).ready(startGame);
var gameboard;
var player1;
var player2;
var players = [];

function startGame() {
    gameboard = new GameBoard;
    player1 = new Player('Player 1', 1);
    player2 = new Player('Player 2', 2);
    players.push(player1);
    players.push(player2);
}



// function clickInput(){

// }
