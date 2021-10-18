function scrollToBottom() {
    document.body.scrollTo(0, document.body.scrollHeight);

}

$(window).ready(function() {
    history.scrollRestoration = "manual";
    window.onload = scrollToBottom;
    var divscroll = document.body;
    // Function to imitate draggable scroll function
    $("#scrollimage").draggable({
        axis: "y",
        cursor: "s-resize",
        containment: "window",
        start: function () {
            elDrag = $(this);     
           elDrag.css({'left': 'auto', 'right': '0' });
            $('.scrollbutton').css('animation-play-state', 'running');
        },         
        drag: function() {
            var offset = elDrag.position();
           
            var yPos = offset.top/window.innerHeight*divscroll.scrollHeight;
            console.log(yPos);
            divscroll.scrollTo({
                top: yPos,
                left: 0,
                behavior: 'auto'
              });
              elDrag.css({'left': 'auto', 'right': '0' });
        },
        stop: function(){
            
           elDrag.css({'left': 'auto', 'right': '0' });
            $('.scrollbutton').css('animation-play-state', 'pause');
        }
    });
    function scrollFunction() {

        var ratio = divscroll.scrollTop / divscroll.scrollHeight * 95;
        console.log(divscroll.scrollTop);
        var directionsc = "bottom";
    
        // $('.scrollbutton').each(function (index, element) {
        //     directionsc = $(this).attr("data-scroll");
    
        //     if (ratio > 1) {
        //         if (directionsc === "right" || directionsc === "left") {
        //             var wratio = ratio * window.outerWidth / 1225;
        //             console.log(wratio);
        //             $(this).css(directionsc, 100 - 7.5 - wratio + '%');
        //         } else {
        //             $(this).css(directionsc, 100 - 12 - ratio + '%');
        //         }
        //     } else {
        //         if (directionsc === "right" || directionsc === "left") {
        //             $(this).css(directionsc, '92.5vw');
        //         } else {
        //             $(this).css(directionsc, '85vh');
        //         }
        //     }
        // });
         $('.scrollbutton').css({'top': ratio + '%'});
         console.log(ratio);
    
    }


var isScrolling;

$('body').bind('wheel', function () {

    $('.scrollbutton').css('animation-play-state', 'running');
    scrollFunction();
    // Clear our timeout throughout the scroll          https://gomakethings.com/detecting-when-a-visitor-has-stopped-scrolling-with-vanilla-javascript/
    window.clearTimeout(isScrolling);

    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(function () {

        // Run the callback
        $('.scrollbutton').css('animation-play-state', 'paused');

    }, 66);
});});
