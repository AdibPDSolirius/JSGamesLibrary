import { GameCanvas } from './gameCanvas.js';
import { GameObject } from './gameObject.js';
import { Position } from './position.js';
import { Size } from './size.js';
import { GameBoard } from './gameBoard.js';

var gameBoardSize = new Size(400, 200);
var gameBoardRowByColumn = new Size(2, 4);
var gameBoardPosition = new Position(100, 100);
var gameBoardColour = 'black';

var gameBoard = new GameBoard(gameBoardPosition, gameBoardSize, gameBoardRowByColumn, gameBoardColour);
var gameCanvas = new GameCanvas(gameBoard);
gameCanvas.renderGameBoard(gameBoard);

