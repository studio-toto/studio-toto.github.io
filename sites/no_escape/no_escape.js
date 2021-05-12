$("#box").on('mouseover', function(){
    var offset = $(this).offset();
    var goX = Math.random() < 0.5 ? -1 : 1;
    var goY = Math.random() < 0.5 ? -1 : 1;
    $(this).animate({'top': offset.top + 100 * goY,
    'left': offset.left + 100 * goX
}, 200);
    // $(this).animate({}, 200);
    if (!checkInside(this)){
        $('#message').css({'visibility': 'visible'});
    } else {
        console.log('inside');
        $('#message').css({'visibility': 'hidden'});
   
    }
});

function checkInside(el){
    var rect = el.getBoundingClientRect();
    console.log(rect.top);
    return (
        rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
var list = ['exit1', 'exit2'];
var randomise = Math.floor(Math.random() * 2);
$('#' + list[randomise]).css({'visibility': 'visible'});