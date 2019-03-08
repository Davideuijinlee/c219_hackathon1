$(document).ready(startGame);
var gameboard;
var player1;
var player2;
var players = [];

function startGame() {
    gameboard = new GameBoard;
// debugger;
    gameboard.addPlayer('Player 1', 1);
    gameboard.addPlayer('Player 2', 2);
    gameboard.createStartingCards();
    gameboard.createFactoryCard();
    gameboard.createCityCard();
}

function alertPlayerTurn(){
    if(gameboard.currentPlayer === 0){
        alert("It's Player One's turn!")
    }else{
        alert("It's Player Two's turn!")
    }
}
