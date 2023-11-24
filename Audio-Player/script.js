let music = document.getElementById("song");
let images = document.querySelectorAll("image");


let play = function() {
    if(music.paused){
        music.play();
    }else if(music.played) {
        music.pause();
    }
};