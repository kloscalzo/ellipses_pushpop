//Katharine LoScalzo
//6 October 2016

//series of ellipses rotated at different angles using transform functions

function setup() {

    createCanvas(500, 500);

}

function draw() {
    background(190, 0, 80);

    push();
    fill(255);
    ellipse(50, 350, 50, 100);
    pop();

    push();
    fill(255);
    translate(250, 0);
    rotate(PI / 7);
    ellipse(150, 50, 50, 100);
    pop();

    push();
    fill(255);
    translate(200, 250);
    rotate(PI / 4);
    ellipse(90, 50, 50, 100);
    pop();

    push();
    fill(255);
    translate(200, 250);
    rotate(PI / 2);
    ellipse(20, 10, 50, 100);
    pop();

    push();
    fill(255);
    translate(200, 250);
    rotate(PI / 8);
    ellipse(210, 80, 50, 100);
    pop();

}
