import { GameCanvas } from './gameCanvas.js';
import { GameObject } from './gameObject.js';
import { Position } from './position.js';
import { Size } from './size.js';
import { GameBoard } from './gameBoard.js';
import { RowColumn } from './rowColumn.js';

//SNAKE EXAMPLE
var gameBoardSize = new Size(500, 500);
var gameBoardRowByColumn = new RowColumn(70, 70);
var gameBoardPosition = new Position(1000, 1000);
var gameBoardColour = 'black';
var gameBoard = new GameBoard(gameBoardPosition, gameBoardSize, gameBoardRowByColumn, gameBoardColour);

var snake = new GameObject('yellow');
var positions = [
    new Position(50,50), 
    new Position(49,50), 
    new Position(48,50),
    new Position(47,50), 
    new Position(46,50),
]

var apple = new GameObject('red');
var applePosition = [
    new Position(10, 10)
]
gameBoard.addGameObject(snake, positions);
gameBoard.addGameObject(apple, applePosition);
var gameCanvas = new GameCanvas(gameBoard);
gameCanvas.renderGameBoard(gameBoard);

//CHESS EXAMPLE
// var gameBoardSize = new Size(101, 101);
// var gameBoardRowByColumn = new RowColumn(8, 8);
// var gameBoardPosition = new Position(100, 100);
// var gameBoardColour = 'black';
// var gameBoard = new GameBoard(gameBoardPosition, gameBoardSize, gameBoardRowByColumn, gameBoardColour);
// var snake = new GameObject('yellow');
// var positions = [
//     new Position(50,50), 
//     new Position(49,50), 
//     new Position(48,50),
//     new Position(47,50), 
//     new Position(46,50),
// ]

// var apple = new GameObject('red');
// var applePosition = [
//     new Position(10, 10)
// ]
// gameBoard.addGameObject(snake, positions);
// gameBoard.addGameObject(apple, applePosition);
// var gameCanvas = new GameCanvas(gameBoard);
// gameCanvas.renderGameBoard(gameBoard);

