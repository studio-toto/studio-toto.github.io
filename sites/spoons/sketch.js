let spoon;
let meltShader;

function preload() {
	spoon = loadImage('assets/spoon.png');
	meltShader = loadShader('assets/meltShader.frag');
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    frameRate(60);
}

function draw() {
    background(255);
	image(spoon, -windowWidth/2, -windowHeight/2, windowWidth, windowHeight);
}