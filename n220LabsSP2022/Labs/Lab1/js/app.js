let size = 10;

function setup() {

    createCanvas(800, 600);

    circle(150,50,30);
    circle(300,50,30);

    arc(200,200,200,150,150,0 PI + QUARTER_PI, CHORD);

}

function draw(){
    fill(255,99,99);
    circle(150,150,size);
    size = size + 1;
}