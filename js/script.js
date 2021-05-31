//show list elements and adjust canvas size
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

//exchange the css file for individual style
function cssChange(version) {
    if (document.getElementById('csschange').href!=version) {
        document.getElementById('csschange').href=version;
    }    
}

//styles
var styles = ['css/nilya.css', 'css/lucca.css', 'css/julia.css'];

//choose a random file out of the three style files
window.onload = function randomStyle() {
    var randomise = Math.floor(Math.random() * 3);
    cssChange(styles[randomise]);
}
