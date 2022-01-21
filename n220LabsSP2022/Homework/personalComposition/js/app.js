function setup(){
    var orange = "#e87e00"
    var backColor = "#bccff5"

    createCanvas(800,600);

    background(backColor);

    fill(orange);
    circle(300,50,50);

    fill(178, 192, 219);
    strokeWeight(10);
    rect(400,50,175, 120);

    noFill();
    strokeWeight(3);
    stroke("white")
    rect(457,90,60,50)

    stroke(232, 54, 0);
    noFill();
    ellipse(487,144,75,7);

    stroke(0);
    fill(0);
    rect(475,170,25,400)

    fill(120, 120, 120);
    rect(-10,570,900,50)
}