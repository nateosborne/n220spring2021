let inputNum = document.getElementById("input");
let sum = document.getElementById("sum");
let avg = document.getElementById("avg");

function average(){
var num = inputNum.value;
var split = num.split(",");

let total = 0;

//converts string into numbers
for(i=0; i<=split.length-1; i++){
    total += Number(split[i]);
}

var average = total / split.length;

sum.innerHTML += total;
avg.innerHTML += average;
}