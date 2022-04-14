let box = document.getElementById("block");
let txt = document.getElementById("cc-text");

let r = 147;
let g = 145;
let b = 200;

box.style.backgroundColor = "rgb("+ r + "," + g + "," + b + ")";
txt.innerHTML = "current color: rgb("+ r + "," + g + "," + b + ")";

function changeColor(event){
    let color = event.target.getAttribute("data-color");
    let value = parseInt(event.target.getAttribute("data-value"));
    if(color=="red"){
        r += value;
        if(r>=255){
            r = 255;
        }
        box.style.backgroundColor = "rgb("+ r + "," + g + "," + b + ")";
        
    }
    if(color=="blue"){
        b += value;
        if(b>=255){
            b = 255;
        }
        box.style.backgroundColor = "rgb("+ r + "," + g + "," + b + ")";
    }
    if(color=="green"){
        g += value;
        if(g>=255){
            g = 255;
        }
        box.style.backgroundColor = "rgb("+ r + "," + g + "," + b + ")";
    }
    txt.innerHTML = "current color: rgb("+ r + "," + g + "," + b + ")";

}