function setup(){
    createCanvas(400, 300);
}

function draw(){
    background("lightgray");
    fill("blue");
    if(mouseX>=200){
        fill("red");
    }
    circle(mouseX, mouseY, 30);
}