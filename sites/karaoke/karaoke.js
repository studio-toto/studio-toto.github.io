var audio = document.querySelector("audio")
var scroll = document.querySelector(".scroll")
var sentences = [{"sentence": "when I look back upon my life", "start": 43.900, "end": 47.900},
{"sentence": "it's always with a sense of shame", "start": 48.000, "end": 41.300},
{"sentence": "it's always with a sense of shame", "start": 51.500, "end": 55.700},
{"sentence": "for everything I long to do", "start": 61, "end": 65.100},
{"sentence": "no matter when or where or who", "start": 65.100, "end": 68.500},
{"sentence": "has one thing in common too", "start": 68.800, "end": 72.500},
{"sentence": "it's a", "start": 72.700, "end": 76.200},
{"sentence": "it's a sin", "start": 76.200, "end": 78.300},
{"sentence": "it's a sin", "start": 80.000, "end": 81.800},
{"sentence": "everything I've ever done", "start": 84.400, "end": 86.500},
{"sentence": "everything I ever do", "start": 86.500, "end": 88.600},
{"sentence": "every place I've ever been", "start": 88.600, "end": 90.200},
{"sentence": "everywhere I'm going to", "start": 90.200, "end": 92.700},
{"sentence": "it's a sin", "start": 92.900, "end": 94.800},
{"sentence": "at school they taught me how to be", "start": 94.900, "end": 98.700},
{"sentence": "so pure in thought and word and deed", "start": 99.000, "end": 102.700},
{"sentence": "they didn't quite succeed", "start": 103.000, "end": 106.500},
{"sentence": "for everything I long to do", "start": 110.000, "end": 114.000},
{"sentence": "no matter when or where or who", "start": 114.200, "end": 117.800},
{"sentence": "has one thing in common too", "start": 118.000, "end": 121.700},
{"sentence": "it's a", "start": 122.000, "end": 125.600},
{"sentence": "it's a sin", "start": 125.800, "end": 127.200},
{"sentence": "it's a sin", "start": 129.000, "end": 130.900},
{"sentence": "everything I've ever done", "start": 133.400, "end": 135.200},
{"sentence": "everything I ever do", "start": 135.300, "end": 137.200},
{"sentence": "every place I've ever been", "start": 137.400, "end": 139.300},
{"sentence": "everywhere I'm going to", "start": 139.400, "end": 141.600},
{"sentence": "it's a sin", "start": 141.800, "end": 144.100},
{"sentence": "father forgive me", "start": 144.300, "end": 146.700},
{"sentence": "I tried not to do it", "start": 147.200, "end": 149.800},
{"sentence": "turned over a new leaf", "start": 151.000, "end": 153.700},
{"sentence": "then tore right through it", "start": 155.200, "end": 157.800},
{"sentence": "Whatever you taught me", "start": 158.500, "end": 161.400},
{"sentence": "I didn't believe it", "start": 163.000, "end": 165.000},
{"sentence": "father you fought me", "start": 166.500, "end": 168.600},
{"sentence": "cause I didn't  care and I still don't understand", "start": 168.800, "end": 174.400},
{"sentence": "so I look back upon my life", "start": 178.200, "end": 182.000},
{"sentence": "forever with a sense of shame", "start": 182.200, "end": 185.400},
{"sentence": "I've always been the one to blame", "start": 185.700, "end": 189.800},
{"sentence": "for everything I long to do", "start": 195.000, "end": 199.000},
{"sentence": "no matter when or where or who", "start": 199.200, "end": 202.400},
{"sentence": "has one thing in common too", "start": 202.600, "end": 206.700},
{"sentence": "it's a ", "start": 206.800, "end": 210.500},
{"sentence": "it's a sin", "start": 210.500, "end": 211.700},
{"sentence": "it's a sin", "start": 213.800, "end": 215.700},
{"sentence": "everything I've ever done, everything I ever do", "start": 218.100, "end": 222.400},
{"sentence": "every place I've ever been", "start": 222.400, "end": 224.200},
{"sentence": "everywhere I'm going to ..", "start": 224.200, "end": 226.400},
{"sentence": "it's a sin", "start": 226.500, "end": 228.900},
{"sentence": "it's a", "start": 240.500, "end": 244.400},
{"sentence": "it's a sin", "start": 244.400, "end": 246.000},
{"sentence": "it's a", "start": 257.600, "end": 261.600},
{"sentence": "it's a sin", "start": 261.600, "end": 263.100}, ];
//check the audio currentTime with the lists start and end time


scroll.addEventListener("scroll", function (evt) {
    // console.log("scroll", (scroll.scrollTop) / (scroll.scrollHeight - scroll.clientHeight))
    var val = (scroll.scrollTop) / (scroll.scrollHeight - scroll.clientHeight)
    audio.currentTime = audio.duration * val
    getSentence();
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
 
  function getSentence() {
    for (i = 0; i < sentences.length; i++) { //for all sentences
        if (sentences[i].start <= audio.currentTime && audio.currentTime <= sentences[i].end){
            console.log(sentences[i].sentence);
            document.getElementById("lyrics").innerHTML = sentences[i].sentence;
        }
      }
  }
  setInterval(getSentence, 100);

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
