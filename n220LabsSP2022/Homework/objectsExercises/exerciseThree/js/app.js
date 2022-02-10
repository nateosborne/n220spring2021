function setup(){
    createCanvas(800,600)
}

let ball = {xPos:0, yPos:300, color:"blue", velocity: 5}

// let xPos = 0;
// let yPos = 300;

function draw(){
    background("lightgray");
    fill(ball.color);
    ball.xPos = ball.xPos + ball.velocity;
    if(ball.xPos>=800){
        ball.xPos = 0;  
    }
    circle(ball.xPos,ball.yPos,50);
}