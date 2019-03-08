$(document).ready(startGame);
var gameboard;
var player1;
var player2;
var players = [];

function startGame() {
    gameboard = new GameBoard;

    gameboard.addPlayer('Player 1', 1);
    gameboard.addPlayer('Player 2', 2);
    gameboard.createStartingCards();
    gameboard.createFactoryCard();
}



// function clickInput(){

// }
