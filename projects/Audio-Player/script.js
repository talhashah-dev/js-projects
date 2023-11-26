let music = document.getElementById("song");
let image = document.getElementById("image");

image.onclick = function(){
    if(music.paused){
        music.play();
        image.src="./images/pause.jpg"
    }else{
        music.pause();
        image.src="./images/play.jpg"
    }
}