let audio = new Audio("sounds/shop.mp3");
let isPlaying = false;
let timer;

function play() {
    let img = document.getElementById("image");
    if (!isPlaying) {
        audio.play();
        img.style.borderColor = "green";
        img.style.borderRadius = "10%";
        timer = setInterval(changeHeader, 1500);
    } else {
        audio.pause();
        img.style.borderColor = "white";
        img.style.borderRadius = "50%";
        clearInterval(timer);
    }
    isPlaying = !isPlaying;
}

function changeHeader() {
    let header = document.getElementById("header");
    if (header.innerHTML == "") {
        header.innerHTML = "Ocarina Of Time"
    } else {
        header.innerHTML = "";
    }
}