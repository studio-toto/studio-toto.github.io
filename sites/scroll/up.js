function scrollToBottom() {
    document.body.scrollTo(0, document.body.scrollHeight);
}


history.scrollRestoration = "manual";
window.onload = scrollToBottom;
var divscroll = document.body;
$("#scrollimage").draggable({
    axis: "y"
});

function scrollFunction() {

    var ratio = divscroll.scrollTop / divscroll.scrollHeight * 100;
    var directionsc = "bottom";

    $('.scrollimage').each(function (element) {
        directionsc = $(this).attr("data-scroll");

        if (ratio > 1) {
            if (directionsc === "right" || directionsc === "left") {
                var wratio = ratio * window.outerWidth / 1225;
                console.log(wratio);
                $(this).css(directionsc, 100 - 7.5 - wratio + '%');
            } else {
                $(this).css(directionsc, 100 - 12 - ratio + '%');
            }
        } else {
            if (directionsc === "right" || directionsc === "left") {
                $(this).css(directionsc, '92.5vw');
            } else {
                $(this).css(directionsc, '85vh');
            }
        }
    });
    // $('.scrollimage').css({'bottom': 100-12-ratio + '%'});

}
var isScrolling;

$('body').bind('scroll', function () {

    $('.scrollimage').css('animation-play-state', 'running');
    scrollFunction();
    // Clear our timeout throughout the scroll          https://gomakethings.com/detecting-when-a-visitor-has-stopped-scrolling-with-vanilla-javascript/
    window.clearTimeout(isScrolling);

    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(function () {

        // Run the callback
        $('.scrollimage').css('animation-play-state', 'paused');

    }, 66);
});