//Canvas is initialized after the page loaded in order to get the screen size

function setCanvas() {
    var width = $(window).width();
    var height = document.documentElement.scrollHeight;
    var canvasDiv = document.getElementById('canvasplace');
    canvas = document.createElement('canvas');
    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);
    canvas.setAttribute('id', 'canvas');
    canvasDiv.appendChild(canvas);
    context = canvas.getContext("2d");
}

setTimeout(setCanvas, 1000);
//setCanvas();

//reset sets canvas size back and also hides the menu items
function reset() {
    clickX = new Array();
    clickY = new Array();
    clickDrag = new Array();
    canvas.setAttribute('height', height);
    context.clearRect(0, 0, canvas.width, canvas.height);
    $(".expand").css({'display': 'none'});
}

//draw functions
$('body').mousedown(function(e) {
    var mouseX = e.pageX - this.offsetLeft;
    var mouseY = e.pageY - this.offsetTop;

    paint = true;
    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
    redraw();
});

$('body').mousemove(function(e){
    if(paint){
        addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
        redraw();
    }
});

$('body').mouseup(function(e){
    paint = false;
});

$('body').mouseleave(function(e){
    paint = false;
});

var color = "black";
var curColor = color;

function changeColor(ncolor){
    curColor = ncolor;
}

var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var clickColor = new Array();
var paint;

function addClick(x, y, dragging) {
    clickX.push(x);
    clickY.push(y);
    clickDrag.push(dragging);
    clickColor.push(curColor);
}

function redraw() {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas

    // context.strokeStyle = "black";
    context.lineJoin = "round";
    context.lineWidth = 5;

    for(var i=0; i < clickX.length; i++) {
        context.beginPath();
        if(clickDrag[i] && i) {
            context.moveTo(clickX[i-1], clickY[i-1]);
        } else {
            context.moveTo(clickX[i]-1, clickY[i]);
        }
            context.lineTo(clickX[i], clickY[i]);
            context.closePath();
            context.strokeStyle = clickColor[i];
            context.stroke();
    }
}