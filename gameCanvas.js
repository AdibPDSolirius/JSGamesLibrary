import { Position } from './position.js';

export class GameCanvas {
    constructor(gameBoard) {
        this.gameBoard = gameBoard;
        this.id = 'gameCanvas';
        this.createCanvasInDOM(gameBoard, this.id);
    }

    createCanvasInDOM(gameBoard, id) {
        var canvas = document.createElement('canvas');
        canvas.id = id;
        this.setCanvasProperties(canvas, gameBoard.position, gameBoard.size, gameBoard.border);
        document.body.appendChild(canvas);
    }

    setCanvasProperties(canvas, position, size, border) {
        canvas.style.left = position.x;
        canvas.style.top =  position.y;
        canvas.style.position = 'absolute';
        canvas.width = size.width;
        canvas.height = size.height
        canvas.style.border = border;
    }

    render() {
        this.renderBackGround();
        //this.renderGrid();
        this.renderGameObjects();
    }

    renderBackGround() {
        this.fillCanvasSpace(new Position(0,0), this.gameBoard.size, this.gameBoard.colour);
    }

    renderGrid() {
        let grid = this.gameBoard.grid;
        for(let row = 0; row < grid.rowByColumn.row; row++) {
            for(let column = 0; column < grid.rowByColumn.column; column++) {
                let curPosition = grid.grid[row][column];
                this.fillCanvasSpace(curPosition, grid.blockSize, 'red');
            }
        }
    } 

    renderGameObjects() {
        for(let curGameObject of this.gameBoard.gameObjects) {
            this.fillCanvasSpace(this.gameBoard.getPositionOf(curGameObject), this.gameBoard.grid.blockSize, curGameObject.colour);
        }
    }

    fillCanvasSpace(position, size, colour) {
        var ctx = this.getCanvasElement().getContext('2d');
        ctx.fillStyle = colour;
        ctx.fillRect(position.x, position.y, size.width, size.height);
    }

    getCanvasElement() {
        return document.getElementById(this.id);
    }
}
