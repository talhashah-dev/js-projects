

// function changeEmoje(){
//     let image = document.getElementById("emoje").src="./images/2.png";
// };


let arr = [
    "Smiling Face",
    "Grinning Squinting Face",
    "Thinking Face",
    "Kissing Face",
    "Pleading Face",
    "Unamused Face",
    "Angry Face",
    "Loudly Crying Face"
];

let counter = 1;
let ourImage = document.querySelector("#image");

ourImage.addEventListener("click", function() {
  ourImage.src = `./images/${counter}.png`;
  counter++;
  if (counter > 8) {
    counter = 1;
  }
});