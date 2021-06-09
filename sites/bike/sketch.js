let a, b, c, d;
let drops = [];
let clouds = [];

var rain;
var howlingWind;
var thunderSound;
var t;

function preload() {
	soundFormats = ('mp3');
	this.rain = loadSound('media/rainForest.mp3');
	this.howlingWind = loadSound('media/howlingWind.mp3');
	this.thunderSound = loadSound('media/thunder.mp3');
}

function setup() {
    //general settings
    createCanvas(windowWidth, windowHeight);
    frameRate(60);

    //sound
    this.rain.setVolume(.5);
	this.howlingWind.setVolume(.6);
	this.rain.loop();
	this.howlingWind.loop();

    //initiate mountainRanges
	a = new MountainRange(0.25, '#699783', 90, -30);
	b = new MountainRange(.5, '#477983', 70, 0);
	c = new MountainRange(.75, '#345964', 50, 30);
	d = new MountainRange(1, '#2d4d56', 30, 80);

    //initiate thunder
  	t = new Thunder();

    //initiate rain
	for (var i = 0; i < 300; i++) {
		drops[i] = new Drop();
	}

    //initiate clouds
	for (var i = 0; i < 14; i++) {
		clouds.push(new Cloud(random(width), random(30, height/2), random(1, 4), random(-2, -0.4)));
	}
}

function draw() {
    background('#cff1c9');

    t.thunder();

    //display mountainRanges
	a.display();
	b.display();
	c.display();
	d.display();

    //display clouds and move them over to the right side again when they go out of left bound
	for (var i = 0; i < clouds.length; i++) {
		clouds[i].display();
		if (clouds[i].x < -60) {
			clouds[i].x = 1040;
			clouds[i].y = random(30, 111);
			clouds[i].size = random(0.7, 1.1);
			clouds[i].speed = random(-2, -0.4);
		}
	}

	//display raindrops
	for (var i = 0; i < drops.length; i++) {
		drops[i].fall();
		drops[i].display();
	}
}

function MountainRange(speed, c, w, h) {

    this.n = 0.01;                                      //perlin noise function
	this.inc = speed;                                   //increment perlin noise function

	this.wideVar = w * 4;
	this.heightVar = h;

	this.color = color(c);

	this.display = function () {
		for (var x = 0; x < width; x++) {
			var p = (this.n + x) / this.wideVar;        //increase 
			var nv = noise(p);                          //generate noise value
			var y = ((nv * height/2 + height/3) + this.heightVar);   //get y position for ends of lines

            strokeWeight(1);
			stroke(this.color);
			line(x, height, x, y);                      //draw a line at x that goes from bottom of screen to y value
		}
		this.n += this.inc;                             //increase noise variable
	}
}

function Thunder(){
  
    var randInterval = int(random(1000));

    this.thunder = function() {
        if (frameCount % randInterval == 0) {
        thunderSound.play();
        randInterval = int(random(500));
            if (thunderSound.isPlaying()) {
                for (var i = 0; i < 50; i++) {
                background(255);
                background('#cff1c9');
                background(255);
                background(255);
                background(255);
                background(255);
                background(255);
                background('#cff1c9');
                background('#cff1c9');
                background('#cff1c9');
                background(255);
                background(255);
                background(255);
            }
        } else {
                background('#cff1c9');
        }
        }
    }
}

function Cloud(x, y, size, speed) {

	this.x = x; //xPos
	this.y = y; //yPos
	this.size = size;

	this.display = function () {

		this.x += speed;

		//cloudShape
		fill(255, 255, 255);
		noStroke();
		arc(this.x, y, 25 * size, 20 * size, PI + TWO_PI, TWO_PI);
		arc(this.x + 10, y, 25 * size, 45 * size, PI + TWO_PI, TWO_PI);
		arc(this.x + 25, y, 25 * size, 35 * size, PI + TWO_PI, TWO_PI);
		arc(this.x + 40, y, 30 * size, 20 * size, PI + TWO_PI, TWO_PI);
	}
}

function Drop() {
	this.x = random(width);                             //initial xPos
	this.y = -500;                                      //initial yPos
	this.z = random(-10, 20);                           //initial "zPos"
	this.len = map(this.z, 0, 10, 5, 10);               //length
	this.yspeed = map(this.z, 0, 30, 1, 30);            //speed in y direction

	this.fall = function () {
		this.y = this.y + this.yspeed;                  //update y for falling
		this.x = this.x - 5;                            //update x for the illusion of wind
		var grav = map(this.z, 0, 20, 0, 0.2);          //gravity
		this.yspeed = this.yspeed + grav;

		//bottom bound
		if (this.y > height) {
			this.y = -500;
			this.yspeed = map(this.z, 0, 20, 4, 10);
		}
		//left bound
		if (this.x < -10) {
			this.x = random(width + 30, width + 70);
		}
	}

	this.display = function () {
		var thick = map(this.z, 0, 20, .5, 2);
		strokeWeight(thick);
		stroke(255, 102, 102);
		push();
		rotate(1 / 12 * PI);
		line(this.x, this.y, this.x, this.y + this.len);
		pop();
	}
}
