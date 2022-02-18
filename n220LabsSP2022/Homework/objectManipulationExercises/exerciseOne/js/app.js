let stoplight = document.getElementById("box");

stoplight.innerHTML = "go";
stoplight.style.backgroundColor = "#25c425";
stoplight.style.width = "100px";
stoplight.style.height = "100px";
stoplight.style.position = "absolute";
stoplight.style.top = "100px";
stoplight.style.left = "100px";

let i = 0;

function change(){

    if(i==1){
        stoplight.style.backgroundColor = "#ff1919";
        stoplight.innerHTML = "stop";
    i =+ 1;
    }

    if(i==0){
    stoplight.style.backgroundColor = "#fffb2b";
    stoplight.innerHTML = "slow down";
    i =+ 1;
    }
}




// let box = document.getElementById("box");

// box.style.backgroundColor = "#25c425";
// box.style.width = "100px";
// box.style.height = "100px";

// // function increaseSize(){
// //     box.style.width += "10px";
// //     box.style.height += "10px";
// // }
