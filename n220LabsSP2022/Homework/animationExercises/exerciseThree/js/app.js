function setup(){
    createCanvas(800,600)
}

let xPos = 0;
let yPos = 300;

function draw(){
    background("lightgray");
    fill("blue");
    xPos = xPos + 5;
    if(xPos>=800){
        xPos = 0;  
    }
    circle(xPos,yPos,50);
}