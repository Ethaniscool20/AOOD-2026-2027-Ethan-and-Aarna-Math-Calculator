const equation = "";


let oneButt=document.getElementById("1");
let twoButt=document.getElementById("2");
let threeButt=document.getElementById("3");
let fourButt=document.getElementById("4");
let fiveButt=document.getElementById("5");
let sixButt=document.getElementById("6");
let sevenButt=document.getElementById("7");
let eightButt=document.getElementById("8");
let nineButt=document.getElementById("9");
let zeroButt=document.getElementById("0");
let negativeButt=document.getElementById("-");


document.getElementById("oneButt").addEventListener("click", updateValue(1));
function updateValue(character) {
let equation = equation + toString(character);
}

