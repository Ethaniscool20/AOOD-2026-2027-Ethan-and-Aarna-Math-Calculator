let equation = "";


// let oneButt=document.getElementById("1");
// let twoButt=document.getElementById("2");
// let threeButt=document.getElementById("3");
// let fourButt=document.getElementById("4");
// let fiveButt=document.getElementById("5");
// let sixButt=document.getElementById("6");
// let sevenButt=document.getElementById("7");
// let eightButt=document.getElementById("8");
// let nineButt=document.getElementById("9");
// let zeroButt=document.getElementById("0");
// let negativeButt=document.getElementById("-");
// let runButt=document.getElementById("run");

document.getElementById("1").addEventListener("click", updateValue(1));
document.getElementById("2").addEventListener("click", updateValue(2));
document.getElementById("3").addEventListener("click", updateValue(3));
document.getElementById("4").addEventListener("click", updateValue(4));
document.getElementById("5").addEventListener("click", updateValue(5));
document.getElementById("6").addEventListener("click", updateValue(6));
document.getElementById("7").addEventListener("click", updateValue(7));
document.getElementById("8").addEventListener("click", updateValue(8));
document.getElementById("9").addEventListener("click", updateValue(9));
document.getElementById("0").addEventListener("click", updateValue(0));
document.getElementById("-").addEventListener("click", updateValue("-"));
document.getElementById("run").addEventListener("click", updateValues);





// <button id="+">+</button>
// <button id="/">/</button>
// <button id="*">*</button>

// <button id="sin">sin</button>
// <button id="cos">cos</button>
// <button id="tan">tan</button>
// <button id="mean">mean</button>
// <button id="mode">mode</button>
function updateValues(){
document.getElementById("hellothere").innerHTML = equation;
}

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



