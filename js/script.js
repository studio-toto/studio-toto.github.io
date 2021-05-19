// show list elements and adjust canvas size
function expand(selection) {
    var item = $("#"+selection)
    if (item.css('visibility') == 'visible'){
        item.css({'visibility': 'hidden'});
        item.css({'opacity': '0'});
    } else {
        item.css({'visibility': 'visible'});
        item.css({'opacity': '1'});
    }
}