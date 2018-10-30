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
var gameBoardRowByColumn = new RowColumn(11, 11);
var gameBoardPosition = new Position(100, 100);
var gameBoardColour = 'black';
var gameBoardBorder = '0px solid';
var gameBoard = new GameBoard(gameBoardPosition, gameBoardSize, gameBoardRowByColumn, gameBoardColour, gameBoardBorder);

//Initialise game objects
var player = new GameObject('player', 'white');
var gameListener = new GameListener();
gameListener.addKeyDownListener(GameKeys.UP, function() {
    gameBoard.moveGameObjectUp(player);
    gameCanvas.render();
});
gameListener.addKeyDownListener(GameKeys.DOWN, function() {
    gameBoard.moveGameObjectDown(player);
    gameCanvas.render();
});

gameListener.addKeyDownListener(GameKeys.RIGHT, function() {
    gameBoard.moveGameObjectRight(player);
    gameCanvas.render();
});

gameListener.addKeyDownListener(GameKeys.LEFT, function() {
    gameBoard.moveGameObjectLeft(player);
    gameCanvas.render();
});

var notPlayer = new GameObject('Not player', 'green');

//Add game objects to gameboard with positions
gameBoard.addGameObject(player, new Position(0, 10));
gameBoard.addGameObject(notPlayer, new Position(5, 5));

//Initialise game canvas with gameboard
var gameCanvas = new GameCanvas(gameBoard);

//Render game canvas 
gameCanvas.render();


