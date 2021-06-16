var audio = document.querySelector("audio")
var scroll = document.querySelector(".scroll")
var sentences = [{"sentence": "when I look back upon my life", "start": 43.900, "end": 47.900},
{"sentence": "it's always with a sense of shame", "start": 48, "end": 41.300}];


//check the audio currentTime with the lists start and end time

scroll.addEventListener("scroll", function (evt) {
    // console.log("scroll", (scroll.scrollTop) / (scroll.scrollHeight - scroll.clientHeight))
    var val = (scroll.scrollTop) / (scroll.scrollHeight - scroll.clientHeight)
    audio.currentTime = audio.duration * val

})

var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
if (!isChrome) {
    $('#iframeAudio').remove()
} else {
    $('#playAudio').remove()
}

audio.addEventListener('playing',function() {  for (i = 0; i < sentences.length; i++) { //for all sentences
    if (sentences[i].start <= audio.currentTime && audio.currentTime <= sentences[i].end){
        console.log(sentences[i].sentence);
    }
  } },false);

//1. approach

//store the sentences in some list, array or object
// var sentences = [{"sentence": "when I look back upon my life", "start": 43.900, "end": 47.900},
// {"sentence": "it's always with a sense of shame", "start": 48, "end": 41.300}];


// //check the audio currentTime with the lists start and end time
// for (i = 0; i < sentences.length; i++) { //for all sentences
//     console.log(sentences[i].sentence);
//     if (sentences[i].start <= audio.currentTime && audio.currentTime <= sentences[i].end){
//         console.log(sentences[i].sentence);
//     }
//   }

//   //2.approach
// var start, end;

// //add the sentences in the html file with the same class and give them the data attributes data-start and data-end, etc.

//   $('.lyrics').each(function(element) {
//     start = $(this).attr("data-start");
//     end = $(this).attr("data-end");
//     if (start <= audio.currentTime && audio.currentTime <= end){
//         //when audio time is same as subtitle do this
//     }
//   });