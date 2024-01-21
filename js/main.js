let audio = new Audio("sounds/shop.mp3");
let isPlaying = false;

function play() {
    if (!isPlaying) {
        audio.play();
    } else {
        audio.pause();
    }
    isPlaying = !isPlaying;
}