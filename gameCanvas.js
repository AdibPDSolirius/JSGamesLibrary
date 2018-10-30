import { Position } from './position.js';

export class GameCanvas {
    constructor(gameBoard) {
        this.id = 'gameBoard';
        this.createCanvasInDOM(gameBoard, this.id);
    }

    createCanvasInDOM(gameBoard, id) {
        var canvas = document.createElement('canvas');
        canvas.id = id;
        this.setCanvasProperties(canvas, gameBoard.size.width, gameBoard.size.height, '0px solid');
        document.body.appendChild(canvas);
    }

    setCanvasProperties(canvas, width, height, border) {
        canvas.width = width;
        canvas.height = height
        canvas.style.border = border;
    }

    renderGameBoard(gameBoard) {
        this.renderBackGround(gameBoard);
        //this.renderGrid(gameBoard);
        this.renderGameObjectsIn(gameBoard);
    }

    renderGrid(gameBoard) {
        let grid = gameBoard.grid;
        console.log(grid);
        for(let row = 0; row < grid.rowByColumn.row; row++) {
            for(let column = 0; column < grid.rowByColumn.column; column++) {
                let curPosition = grid.grid[row][column];
                let obj = {
                    position: curPosition,
                    size: grid.blockSize,
                    colour: 'red'
                }
                this.fillCanvasSpace(obj)
            }
        }
    } 

    renderBackGround(gameBoard) {
        this.fillCanvasSpace(gameBoard);
    }

    renderGameObjectsIn(gameBoard) {
        for(let curGameObject of gameBoard.gameObjects) {
            var newObj = curGameObject;
            newObj.position = gameBoard.getGameObjectPosition(curGameObject);
            this.renderGameObject(newObj, gameBoard.grid.blockSize);
        }
    }

    // renderGameObject(gameObject) {
    //     this.fillCanvasSpace(gameObject);
    // }

    renderGameObject(gameObject, size) {
        var ctx = this.getCanvasElement().getContext('2d');
        ctx.fillStyle = gameObject.colour;
        for(let pos of gameObject.position) {
            console.log(pos);
            ctx.fillRect(pos.x, pos.y, size.width , size.height);
        }
       // this.fillCanvasSpace(gameObject);
    }

    fillCanvasSpace(objectToRender) {
        var ctx = this.getCanvasElement().getContext('2d');
        ctx.fillStyle = objectToRender.colour;
        ctx.fillRect(objectToRender.position.x, objectToRender.position.y, objectToRender.size.width , objectToRender.size.height);
    }

    getCanvasElement() {
        return document.getElementById(this.id);
    }
}
