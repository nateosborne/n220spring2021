let txt = document.getElementById("txt");

let tip = 0;
let total = 0;

function bill(){
    let num = txt.value;
    num = parseFloat(num);
    tip = num*.2;
    total = num+tip;
    console.log("Tip: $"+tip+" Total: $"+total);
}