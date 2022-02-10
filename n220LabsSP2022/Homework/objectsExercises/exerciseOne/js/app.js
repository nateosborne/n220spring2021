let graphic = {
    width: 100,
    height: 50,
    color: "red",
    x: 100,
    y: 200,
};

function setup(){
    createCanvas(800, 800);
    background(100);
}

function draw(){
    drawSquare();
}

function drawSquare(){
    fill(graphic.color)
    rect(graphic.x, graphic.y, graphic.width, graphic.height);
}