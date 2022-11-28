let startButton;
let pauseButton;
let resetButton;

function initDocumentObjects () {
    startButton = document.getElementById('play-button');
    pauseButton = document.getElementById('pause-button');
    resetButton = document.getElementById('reload-button');


    startButton.onclick = function () {
        console.log("play button clicked");
        reset();
        playClicked = true;
    }

    pauseButton.onclick = function () {
        console.log("pause button clicked");
        //TODO: flag to pause animation
    }

    resetButton.onclick = function () {
        console.log("reload button clicked");
        reset();
    }
    
}

