export class GridGameObjectMappings {
    constructor() {
        this.mappings = [];
    }

    addMapping(gameObject, position) {
        var name = gameObject.name;
        this.mappings[name] = position;
    }

    getMapping(gameObject) {
        return this.mappings[gameObject.name];
    }

    setMapping(gameObject, position) {
        if(this.mappings[gameObject.name]) {
            this.mappings[gameObject.name] = position;
        }
    }
    
}