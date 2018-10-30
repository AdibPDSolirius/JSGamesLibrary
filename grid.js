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
        let totalWidthAfterReducingSpacing = this.size.width - (this.blockSpacing*(this.rowByColumn.height - 1))
        let blockWidth = totalWidthAfterReducingSpacing / this.rowByColumn.height;

        let totalHeightAfterReducingSpacing = this.size.height - (this.blockSpacing*(this.rowByColumn.width - 1))
        let blockHeight = totalHeightAfterReducingSpacing / this.rowByColumn.width;
        return new Size(blockWidth, blockHeight);
    }

    createGridOfPositions() {
        let gridArray = [];
        let currrentYPosition = this.position.y;
        for(let curRow = 0; curRow < this.rowByColumn.width; curRow++) {
            let currentXPosition = this.position.x;
            let curRowPositions = [];
            for(let curColumn = 0; curColumn < this.rowByColumn.height; curColumn++) {
                curRowPositions.push(new Position(currentXPosition, currrentYPosition));
                currentXPosition += this.blockSize.width + this.blockSpacing;
            }
            gridArray.push(curRowPositions);
            currrentYPosition += this.blockSize.height + this.blockSpacing;
        }
        this.grid = gridArray;
    }

    getGridRowSize() {
        return this.rowByColumn.width;
    }

    getGridColumnSize() {
        return this.rowByColumn.height;
    }

    // getScreenSize(blockCount) {
    //     return blockCount * this.sizeOfBlocks;
    // }

    getScreenPosition(gridPosition){
        return this.grid[gridPosition.y][gridPosition.x];
    }
    
}