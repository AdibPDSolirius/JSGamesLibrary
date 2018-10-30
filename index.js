import { GameCanvas } from './gameCanvas.js';
import { GameObject } from './gameObject.js';
import { Position } from './position.js';
import { Size } from './size.js';
import { GameBoard } from './gameBoard.js';
import { RowColumn } from './rowColumn.js';
import { GameListener } from './motion/gameListeners.js';
import { GameKeys } from './motion/gameKeys.js';

//SNAKE EXAMPLE
//Initialise gameboard
var gameBoardSize = new Size(1000, 1000);
var gameBoardRowByColumn = new RowColumn(60, 60);
var gameBoardPosition = new Position(100, 100);
var gameBoardColour = 'black';
var gameBoardBorder = '0px solid';
var gameBoard = new GameBoard(gameBoardPosition, gameBoardSize, gameBoardRowByColumn, gameBoardColour, gameBoardBorder);

//Initialise game objects
var player = new GameObject('player', 'white');
player.addKeyListener(new GameListener(GameKeys.RIGHT, function() {
    console.log('ere');
    playerPositions.push(new Position(playerPositions[playerPositions.length-1].x - 1, playerPositions[playerPositions.length-1].y - 1));
    gameCanvas.render();
}));

//Initialise game object positions
var playerPositions = [
    new Position(30, 30),
]

//Add game objects to gameboard with positions
gameBoard.addGameObject(player, playerPositions);

//Initialise game canvas with gameboard
var gameCanvas = new GameCanvas(gameBoard);

//Render game canvas 
gameCanvas.render();


