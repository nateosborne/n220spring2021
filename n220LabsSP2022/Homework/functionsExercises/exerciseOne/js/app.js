function setup(){
    createCanvas(500,500);
}

function draw(){
    drawTruck(200,200);
    drawTruck(100,100);
    drawTruck(300,300);
}

function drawTruck(x,y){
    circle(x,y,20);
    circle(x+80,y,20);
    rect(x-20,y-60,110,50);
    rect(x+90,y-40,30,30);
}