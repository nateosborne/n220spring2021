let box = document.getElementById("box");

box.innerHTML = "text"
box.style.backgroundColor = "#25c425";
box.style.width = "25px";

let i = 0;

function mc(){
    box.innerHTML = "mc";
    i += 1;
    if (i>=3){
        box.innerHTML = "divdivdiv";
    }
}