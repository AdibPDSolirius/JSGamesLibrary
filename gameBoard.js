import { Position } from "./position.js";
import { Grid } from "./grid.js";
import { Size } from "./size.js";
import { GridGameObjectMappings } from "./gridGameObjectMappings.js";

export class GameBoard {
    constructor(position, size, rowByColumn, colour, border) {
        this.position = position;
        this.size = new Size(size.width, size.height );
        this.colour = colour;
        this.border = border;
        this.grid = new Grid(position, this.size, rowByColumn, 1);
        this.gridGameObjectMapping = new GridGameObjectMappings();
        this.gameObjects = [];
    }

    addGameObject(gameObject, position) {
        this.gridGameObjectMapping.addMapping(gameObject, position);
        this.gameObjects.push(gameObject);
        
    }

    getPositionOf(gameOject) {
        return this.grid.getScreenPosition(this.gridGameObjectMapping.getMapping(gameOject));
    }

    moveGameObjectUp(gameObject) {
        var currentPosition = this.gridGameObjectMapping.getMapping(gameObject);
        var movedUpPosition = new Position(currentPosition.x, currentPosition.y-1);
        this.gridGameObjectMapping.setMapping(gameObject, movedUpPosition);
    }

    moveGameObjectDown(gameObject) {
        var currentPosition = this.gridGameObjectMapping.getMapping(gameObject);
        var movedUpPosition = new Position(currentPosition.x, currentPosition.y+1);
        this.gridGameObjectMapping.setMapping(gameObject, movedUpPosition);
    }

    moveGameObjectLeft(gameObject) {
        var currentPosition = this.gridGameObjectMapping.getMapping(gameObject);
        var movedUpPosition = new Position(currentPosition.x-1, currentPosition.y);
        this.gridGameObjectMapping.setMapping(gameObject, movedUpPosition);
    }

    moveGameObjectRight(gameObject) {
        var currentPosition = this.gridGameObjectMapping.getMapping(gameObject);
        var movedUpPosition = new Position(currentPosition.x+1, currentPosition.y);
        this.gridGameObjectMapping.setMapping(gameObject, movedUpPosition);
    }

    // setPlayerStartingPosition() {
    //     let centrePosition = this.getCentrePosition();
    //     this.setStartingPlayerHeadPositionAt(centrePosition);
    //     this.addBodyToLeftOfHead();
    // }

    // getCentrePosition() {
    //     let xCentre = Math.round(this.grid.getGridRowSize()/2);
    //     let yCentre = Math.round(this.grid.getGridColumnSize()/2);
    //     return new Position(xCentre, yCentre);
    // }

    // setStartingPlayerHeadPositionAt(initialPosition) {
    //     this.player.setHead(initialPosition);
    // }

    // addBodyToLeftOfHead() {
    //     for(let lengthCounter = 1; lengthCounter < this.player.getInitialLength(); lengthCounter++) {
    //         this.player.addPosition(new Position(this.player.getHead().x - lengthCounter, this.player.getHead().y));
    //     }
    // }

    // generateFoodInRandomNonPlayerPosition() {
    //     let nonPlayerPositions = this.getNonPlayerPositions();
    //     let randomPositionIndex = Math.round(Math.random() * (nonPlayerPositions.length - 1));
    //     this.food.position = nonPlayerPositions[randomPositionIndex];
    // }

    // getNonPlayerPositions() {
    //     let possibleSpawnPositions = [];
    //     for(let curGridRow = 0; curGridRow < this.grid.getGridRowSize(); curGridRow++) {
    //         for(let curGridColumn = 0; curGridColumn < this.grid.getGridColumnSize(); curGridColumn++) {
    //             let curPosition = new Position(curGridRow, curGridColumn);
    //             if(!this.player.isAtPosition(curPosition)){
    //                 possibleSpawnPositions.push(curPosition);
    //             }
    //         }
    //     }
    //     return possibleSpawnPositions;
    // }

    // updatePlayerDirection(direction) {
    //     this.player.updateDirection(direction);
    // }

    // updatePlayerPosition() {
    //     let curHeadPosition = new Position(this.player.getHead().x, this.player.getHead().y);
    //     this.player.updatePlayerHead();
    //     this.player.updateBodyFrom(curHeadPosition);
    // }

    // updatePlayerCollision() {
    //     this.updatePlayerBoundaryCollision();
    //     this.updatePlayerSelfCollision();
    //     this.updatePlayerFoodCollision();
    // }

    // updatePlayerBoundaryCollision() {
    //     let topBoundaryViolation = this.player.getHead().y < 0;
    //     let bottomBoundaryViolation = this.player.getHead().y >= this.grid.getGridRowSize();
    //     let leftBoundaryViolation = this.player.getHead().x < 0;
    //     let rightBoundaryViolation = this.player.getHead().x >= this.grid.getGridColumnSize();

    //     if(topBoundaryViolation) {
    //         this.resolvePlayerTopBoundaryViolation();
    //     }else if(bottomBoundaryViolation) {
    //         this.resolvePlayerBottomBoundaryViolation();
    //     }else if(leftBoundaryViolation) {
    //         this.resolvePlayerLeftBoundaryViolation();
    //     }else if(rightBoundaryViolation) {
    //         this.resolvePlayerRightBoundaryViolation();
    //     }
    // }

    // resolvePlayerTopBoundaryViolation() {
    //     this.player.setHead(new Position(this.player.getHead().x, this.grid.getGridRowSize() -1));
    // }

    // resolvePlayerBottomBoundaryViolation() {
    //     this.player.setHead(new Position(this.player.getHead().x, 0));
    // }

    // resolvePlayerLeftBoundaryViolation() {
    //     this.player.setHead(new Position(this.grid.getGridColumnSize() - 1, this.player.getHead().y));
    // }

    // resolvePlayerRightBoundaryViolation() {
    //     this.player.setHead(new Position(0, this.player.getHead().y));
    // }

    // updatePlayerSelfCollision() {
    //     let isSelfCollision = this.player.isSelfCollided();
    //     if(isSelfCollision) {
    //         this.player.resetPlayerSize();
    //     }
    // }

    // updatePlayerFoodCollision() {
    //     let isPlayerOnFood = this.player.isAtPosition(this.food.position);
    //     if(isPlayerOnFood) {
    //         this.generateFoodInRandomNonPlayerPosition();
    //         this.increasePlayerLength();
    //     }
    // }

    // increasePlayerLength() {
    //     this.player.increaseLength();
    // }

    // getPlayerPositions() {
    //     let playerPixelPositions = [];
    //     for(let playerPosition of this.player.getPositionHistory()) {
    //         playerPixelPositions.push(this.grid.getScreenPosition(playerPosition));
    //     }
    //     return playerPixelPositions;
    // }

    // getPlayerSize() {
    //     return this.grid.getScreenSize(this.player.getBodySize());
    // }

    // getFoodPosition() {
    //     return this.grid.getScreenPosition(this.food.position);
    // }

    // getFoodSize() {
    //     return this.grid.getScreenSize(this.food.size);
    // }

    // getSize() {
    //     return this.size;
    // }
}