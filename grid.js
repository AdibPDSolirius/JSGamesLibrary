import { Position } from './position.js';
import { Size } from './size.js';

export class Grid {
    constructor(position, size, rowByColumn, blockSpacing){
        this.size = size;
        this.rowByColumn = rowByColumn;
        this.blockSpacing = blockSpacing;
        this.position = position;
        this.grid = [];
        this.blockSize = this.calculateBlockSize();
        this.createGridOfPositions();
    }

    calculateBlockSize() {
        let totalWidthAfterReducingSpacing = this.size.width - (this.blockSpacing*(this.rowByColumn.column - 1))
        let blockWidth = Math.round(totalWidthAfterReducingSpacing / this.rowByColumn.column);

        let totalHeightAfterReducingSpacing = this.size.height - (this.blockSpacing*(this.rowByColumn.row - 1))
        let blockHeight = Math.round(totalHeightAfterReducingSpacing / this.rowByColumn.row);

        return new Size(blockWidth, blockHeight);
    }

    createGridOfPositions() {
        let gridArray = [];
        let currrentYPosition = 0;
        for(let curRow = 0; curRow < this.rowByColumn.row; curRow++) {
            let currentXPosition = 0;
            let curRowPositions = [];
            for(let curColumn = 0; curColumn < this.rowByColumn.column; curColumn++) {
                curRowPositions.push(new Position(currentXPosition, currrentYPosition));
                currentXPosition += this.blockSize.width + this.blockSpacing;
            }
            gridArray.push(curRowPositions);
            currrentYPosition += this.blockSize.height + this.blockSpacing;
        }
        this.grid = gridArray;
    }

    getGridRowSize() {
        return this.rowByColumn.row;
    }

    getGridColumnSize() {
        return this.rowByColumn.column;
    }

    getScreenPosition(gridPosition){
        return this.grid[gridPosition.y][gridPosition.x];
    }
    
}