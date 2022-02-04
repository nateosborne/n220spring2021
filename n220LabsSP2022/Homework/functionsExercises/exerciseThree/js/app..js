function setup(){
    createCanvas(400, 400);
}

translate(100,100);

function draw(){
    let res = polarPoint();
    circle(res.x, res.y, 10);
}

function polarPoint(r){
    let x = r * Math.sin(mouseX);
    let y = Math.cos(mouseX);
    createVector(x,y);
}