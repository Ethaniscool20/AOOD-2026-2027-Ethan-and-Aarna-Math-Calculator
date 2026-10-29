let equation = "";


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
document.getElementById("twoButt").addEventListener("click", updateValue(2));
document.getElementById("threeButt").addEventListener("click", updateValue(3));
document.getElementById("fourButt").addEventListener("click", updateValue(4));
document.getElementById("fiveButt").addEventListener("click", updateValue(5));
document.getElementById("sixButt").addEventListener("click", updateValue(6));
document.getElementById("sevenButt").addEventListener("click", updateValue(7));
document.getElementById("eightButt").addEventListener("click", updateValue(8));
document.getElementById("nineButt").addEventListener("click", updateValue(9));
document.getElementById("zeroButt").addEventListener("click", updateValue(0));
document.getElementById("negativeButt").addEventListener("click", updateValue("-"));




// <button id="+">+</button>
// <button id="/">/</button>
// <button id="*">*</button>

// <button id="sin">sin</button>
// <button id="cos">cos</button>
// <button id="tan">tan</button>
// <button id="mean">mean</button>
// <button id="mode">mode</button>

function updateValue(character) {
 equation = equation + toString(character);
console.log(equation);
}
function updateValueSpecial(characterz){
    let temporary = "";
    if(characterz == "tan"){temporary = "e";}
    if(characterz == "cos"){temporary = "w";}
    if(characterz == "sin"){temporary = "q";}
    if(characterz == "mean"){temporary = "r";}
    if(characterz == "mode"){temporary = "t";}
     equation = equation + temporary;
    console.log(equation);
}
document.getElementById("hellothere").innerHTML = equation;

