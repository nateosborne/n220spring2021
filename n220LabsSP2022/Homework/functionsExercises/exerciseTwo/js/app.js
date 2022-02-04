let noRed = removeRed(color(170,200,150));

function setup(){
    createCanvas(500,500);
}

function draw(){
    removeRed(170,200,150);
    drawCircle();
}

function removeRed(color){
    color.setRed(0);
    return color;
}

function drawCircle(){
    fill(noRed);
    circle(200,200,50);
}