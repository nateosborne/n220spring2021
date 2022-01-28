var pos1 = 50;
pos1 = pos1+50;

var pos2 = 50;
pos2 = pos2*2;

var hello = "Hello World";

function setup(){
    createCanvas(400, 400);
    text(hello+"d",pos1,pos2);
}

function draw(){
    background(200)
    fill("orange");
    circle(400-mouseX, 400-mouseY, 30);
}