

let height = document.getElementById("height-input");
let weight = document.getElementById("weight-input");
let finalResult = document.getElementById("result");
let clear = document.getElementById("reset-btn");
let warning = document.getElementById("warn");


function calculate(){
    let a = height.value;
    let b = weight.value;
    let result = b / (a*a);
    finalResult.textContent = "Your BMI is " + result.toFixed(1);

    if(result < 18.5 ){
        warning.style.visibility = "visible";
        warning.textContent = "You are Underweight";
    }else if(result > 18.5 && result < 24.9){
         warning.textContent = "You are Healthy";
    }else if(result > 25 && result < 29.9){
         warning.textContent = "You are Overweight";
    }else if(result > 30 && result < 34.9){
         warning.textContent = "Obese Class 1";
    }else if(result > 35 && result < 39.9){
         warning.textContent = "Obese Class 2";
    }else if(result > 40){
         warning.textContent = "Obese Class 3";
    };
};

function reset(){
    height.value = "";
    weight.value = "";
    warning.style.visibility = "hidden";
    finalResult.textContent = "Press Calculate Button for Result!";
};