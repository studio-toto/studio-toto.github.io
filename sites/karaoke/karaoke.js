var audio = document.querySelector("audio")
var scroll = document.querySelector(".scroll")
scroll.addEventListener("scroll", function (evt) {
    console.log("scroll", (scroll.scrollTop) / (scroll.scrollHeight - scroll.clientHeight))
    var val = (scroll.scrollTop) / (scroll.scrollHeight - scroll.clientHeight)
    audio.currentTime = audio.duration * val
})

var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
if (!isChrome){
    $('#iframeAudio').remove()
}
else {
    $('#playAudio').remove() 
}

