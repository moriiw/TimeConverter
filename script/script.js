let $ = document;
//////// Dom Elemnt Select /////////
let box1 = $.querySelector("#box-1");
let box2 = $.querySelector("#box-2");
let inputBox = $.querySelector("#input-Box");
let converBtn = $.querySelector("#convertButton");
let resetBtn = $.querySelector("#resetButton");
let resultBox = $.querySelector(".result");

let helperAlert = $.querySelector("#helperBox");
let headerElem = $.querySelector("header");
let divElem = $.querySelector("#input-div");
let buttonBox = $.querySelector("#buttons");
let CloseBox = $.querySelector("#time");

let box1Value,
    box2Value,
    inputValue,
    convertInput,
    showAlert,
    timer = null;

let flagConvert = false;    
let i = 3;

function countTimer() {
    i--;
    CloseBox.innerHTML = i;
    if (i <= 0) {
        clearInterval(timer);
    }
}

function showPage() {
    headerElem.style.display = "block";
    divElem.style.display = "block";
    buttonBox.style.display = "flex";
    helperAlert.style.display = "none";
}

function defaultValue() {
    headerElem.style.display = "none";
    divElem.style.display = "none";
    buttonBox.style.display = "none";
    helperAlert.style.display = "block";
    timer = setInterval(countTimer, 1000);
    setTimeout(showPage, 3000);
    inputBox.setAttribute("placeholder", "Choose an option");
    inputBox.toggleAttribute("disabled");
}
window.addEventListener("load", defaultValue);

function swap() {
    box1Value = box1.value;
    box2Value = box2.value;
    if (box1Value === "Second") {
        box2.value = "Minute";
        $.title = "Convert Second To Minute";
        inputBox.setAttribute("placeholder", "Enter The Second");
        resultBox.innerHTML = "";
        inputBox.value = ""
        inputBox.removeAttribute("disabled");
    } else {
        box2.value = "Second";
        $.title = "Convert Minute To Second";
        inputBox.setAttribute("placeholder", "Enter The Minute");
        resultBox.innerHTML = "";    
        inputBox.value = ""
        inputBox.removeAttribute("disabled");
    }
}

function convert() {
    if (inputBox.value === "" || isNaN(inputBox.value)) {
        resultBox.innerHTML = "Your input cannot be processed";
        resultBox.style.color = "red";
        setTimeout(function (){
            resultBox.innerHTML = ""
        },5000)
    } else {

        if(box1Value === "Second"){
            inputValue = inputBox.value;
            convertInput = inputValue / 60;
            resultBox.innerHTML = "result: " + inputValue + " seconds is " +  convertInput + " minute";
        } else {
            inputValue = inputBox.value;
            convertInput = inputValue * 60;
            resultBox.innerHTML = "result: " + inputValue + " minute is " +  convertInput + " seconds";
        }
    }
}

function reset() {
    inputBox.toggleAttribute("disabled");
    inputBox.value = "";
    inputBox.placeholder = "Choose an option";
    resultBox.innerHTML = "";
    box1.value = "Ch";
    box2.value = "Ch";
    $.title = "Convertr Minutes To Second And Reverse";
}

box1.addEventListener("change", swap);
converBtn.addEventListener("click", convert);
resetBtn.addEventListener("click", reset);
