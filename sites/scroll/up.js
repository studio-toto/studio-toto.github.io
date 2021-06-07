function scrollToBottom() {
    document.body.scrollTo(0, document.body.scrollHeight);
}
history.scrollRestoration = "manual";
window.onload = scrollToBottom;
var divscroll = document.body;
$("#scrollimage").draggable({ axis: "y" });

function myFunction() {
    var ratio = divscroll.scrollTop/divscroll.scrollHeight*100;
    console.log(ratio);
    // if (divscroll.scrollTop > 4400) {
    //     $('#scrollimage').css({'bottom': '0'});
    // }
    // else 
    if (ratio > 3) {
        $('#scrollimage').css({'bottom': 100-12-ratio + '%'});
    } else {
        $('#scrollimage').css({'bottom': '85vh'});
    }
console.log(divscroll.scrollTop);
}

$('body').bind('scroll', function() {
    myFunction();
 }); 