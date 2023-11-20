
let colors = [
    "#3F51B5",
    "#512DA8",
    "#4FC3F7",
    "#8BC34A",
    "#FFD54F"
];


function switchColor(){
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    // let randomBtnColor = colors[Math.floor(Math.random() * colors.length)];
    // let button = document.getElementById("switch-btn")
    // button.style.backgroundColor = randomBtnColor
    document.body.style.backgroundColor = randomColor;  
};