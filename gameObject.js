export class GameObject {
    constructor(name, colour) {
        this.name = name;
        this.colour = colour;
    }

    addKeyListener(gameKeyListener) {
        this.gameKeyListener = gameKeyListener;
    }
}