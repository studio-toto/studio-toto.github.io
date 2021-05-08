function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("logoPic").src = images[x];
}

function displayPreviousImage() {
    x = (x <= 0) ? images.length - 1 : x - 1;
    document.getElementById("logoPic").src = images[x];
}

function startTimer() {
    setInterval(displayNextImage, 3000);
}

var images = [], x = -1;

images[0] = "media/cat1.png";
images[1] = "media/cat2.png";
images[2] = "media/cat3.png";
images[3] = "media/cat4.png";
images[4] = "media/cat5.png";
images[5] = "media/cat6.png";

startTimer();