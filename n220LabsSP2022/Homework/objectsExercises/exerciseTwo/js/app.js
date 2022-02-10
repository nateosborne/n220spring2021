let graphic = {
    width: 100,
    height: 100,
    color: "red",
    x: 100,
    y: 100,
    offSetX: 0,
};

function setup(){
    createCanvas(800, 800);
}

function draw(){
    background(100);
    fill(graphic.color);
    if(mouseIsPressed){
        graphic.offSetX-=1;
    }
    else{
        graphic.offSetX+=1;
    }
    if(graphic.offSetX<=0){
        graphic.offSetX = 0;
    }
    circle(mouseX+graphic.offSetX, mouseY, graphic.width, graphic.height);

}