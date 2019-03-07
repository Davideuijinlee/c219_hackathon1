$(document).ready(startGame);
var gameboard;

function startGame(){
    gameboard = new GameBoard;
}

// function clickInput(){
    
// }

var players = [];
players.push(new Player('Player 1'));
players.push(new Player('Player 2'));

