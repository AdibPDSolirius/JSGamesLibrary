import { GameCanvas } from './gameCanvas.js';
import { GameObject } from './gameObject.js';
import { Position } from './position.js';
import { Size } from './size.js';
import { GameBoard } from './gameBoard.js';
import { RowColumn } from './rowColumn.js';

//SNAKE EXAMPLE
//Initialise gameboard
var gameBoardSize = new Size(1000, 1000);
var gameBoardRowByColumn = new RowColumn(60, 60);
var gameBoardPosition = new Position(100, 100);
var gameBoardColour = 'black';
var gameBoard = new GameBoard(gameBoardPosition, gameBoardSize, gameBoardRowByColumn, gameBoardColour);

//Initialise game objects
var snake = new GameObject('yellow');
var apple = new GameObject('red');

//Initialise game object positions
var snakePositions = [
    new Position(50,50), 
    new Position(49,50), 
    new Position(48,50),
    new Position(47,50), 
    new Position(46,50),
]
var applePositions = [
    new Position(3, 3)
]

//Add game objects to gameboard with positions
gameBoard.addGameObject(snake, snakePositions);
gameBoard.addGameObject(apple, applePositions);

//Initialise game canvas with gameboard
var gameCanvas = new GameCanvas(gameBoard);

//Render game canvas 
gameCanvas.render();


