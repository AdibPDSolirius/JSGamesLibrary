import { GameCanvas } from './gameCanvas.js';
import { GameObject } from './gameObject.js';
import { Position } from './position.js';
import { Size } from './size.js';
import { GameBoard } from './gameBoard.js';
import { RowColumn } from './rowColumn.js';

var gameBoardSize = new Size(400, 200);
var gameBoardRowByColumn = new RowColumn(2, 4);
var gameBoardPosition = new Position(100, 100);
var gameBoardColour = 'black';
var gameBoard = new GameBoard(gameBoardPosition, gameBoardSize, gameBoardRowByColumn, gameBoardColour);

var gameObject = new GameObject(new Position(0,0), 'yellow');
gameBoard.addGameObject(gameObject, [new Position(0,0), new Position(1, 0), new Position(0, 1)]);
var gameCanvas = new GameCanvas(gameBoard);
gameCanvas.renderGameBoard(gameBoard);
//gameCanvas.renderGameObject(gameObject);

