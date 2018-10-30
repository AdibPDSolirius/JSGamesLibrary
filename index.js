import { GameCanvas } from './gameCanvas.js';
import { GameObject } from './gameObject.js';
import { Position } from './position.js';
import { Size } from './size.js';
import { GameBoard } from './gameBoard.js';
import { RowColumn } from './rowColumn.js';

var gameBoardSize = new Size(700, 700);
var gameBoardRowByColumn = new RowColumn(70, 70);
var gameBoardPosition = new Position(100, 100);
var gameBoardColour = 'black';
var gameBoard = new GameBoard(gameBoardPosition, gameBoardSize, gameBoardRowByColumn, gameBoardColour);

var gameObject = new GameObject('yellow');
var positions = [
    new Position(50,50), 
    new Position(49,50), 
    new Position(48,50),
    new Position(47,50), 
    new Position(46,50),
]
gameBoard.addGameObject(gameObject, positions);
var gameCanvas = new GameCanvas(gameBoard);
gameCanvas.renderGameBoard(gameBoard);

