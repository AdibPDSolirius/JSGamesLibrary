export class GameListener {
    addKeyDownListener(key, motion) {
        window.addEventListener('keydown', function(e){
            let keyCode = e.keyCode ? e.keyCode : e.which;
            if(keyCode === key) {
                motion();
            }
        })
    }
}