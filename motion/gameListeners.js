export class GameListener {
    constructor(key, motion) {
        window.onkeydown = function(e) {
            let keyCode = e.keyCode ? e.keyCode : e.which;
            if(keyCode === key) {
                motion();
            }
        }
    }
}