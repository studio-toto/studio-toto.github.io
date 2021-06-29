var audio = document.querySelector("audio");
var scroll = document.querySelector(".scroll");
var mouth = document.querySelector("#mouth");
var sentences = [
  { sentence: "when I look back upon my life", start: 45  , end: 48.3 },
  { sentence: "it's always with a sense of shame", start: 48.5, end: 51.3 },
  { sentence: "I've always been the one to blame", start: 51.9, end: 59 },
  { sentence: "for everything I long to do", start: 62, end: 66},
  { sentence: "no matter when or where or who", start: 66, end: 70 },
  { sentence: "has one thing in common too", start: 70, end: 74 },
  { sentence: "it's a", start: 74, end: 77 },
  { sentence: "it's a sin", start: 77, end: 81},
  { sentence: "it's a sin...", start: 81.2, end: 85},
  { sentence: "everything I've ever done", start: 85.7, end: 87.2},
  { sentence: "everything I ever do", start: 87.2, end: 89},
  { sentence: "every place I've ever been", start: 89, end: 91},
  { sentence: "everywhere I'm going to", start: 91, end: 93.9},
  { sentence: "it's a sin", start: 93.9, end: 95.3 },
  { sentence: "at school they taught me how to be", start: 95.3 , end: 98.7 },
  { sentence: "so pure in thought and word and deed", start: 99.0, end: 102.7 },
  { sentence: "they didn't quite succeed", start: 103.3, end: 109 },
  { sentence: "for everything I long to do", start: 110.5, end: 114.0 },
  { sentence: "no matter when or where or who", start: 114.2, end: 117.8 },
  { sentence: "has one thing in common too", start: 118.0, end: 121.7 },
  { sentence: "it's a", start: 122.0, end: 125.6 },
  { sentence: "it's a sin", start: 125.8, end: 128.5},
  { sentence: "it's a sin...", start: 130.0, end: 132 },
  { sentence: "everything I've ever done", start: 133.4, end: 135.2 },
  { sentence: "everything I ever do", start: 135.3, end: 137.2 },
  { sentence: "every place I've ever been", start: 137.4, end: 139.3 },
  { sentence: "everywhere I'm going to", start: 139.4, end: 142 },
  { sentence: "it's a sin", start: 142, end: 144.5},
  { sentence: "father forgive me", start: 144.5, end: 148},
  { sentence: "I tried not to do it", start: 148, end: 151.5 },
  { sentence: "turned over a new leaf", start: 152.0, end: 155.5 },
  { sentence: "then tore right through it", start: 156, end: 158.5 },
  { sentence: "Whatever you taught me", start: 160, end: 163},
  { sentence: "I didn't believe it", start: 163.0, end: 166},
  { sentence: "father you fought me", start: 167, end: 170 },
  { sentence: "cause I didn't  care and I still don't understand", start: 170, end: 177,},
  { sentence: "so I look back upon my life", start: 178.2, end: 182.0 },
  { sentence: "forever with a sense of shame", start: 182.2, end: 185.4 },
  { sentence: "I've always been the one to blame", start: 185.7, end: 189.8 },
  { sentence: "for everything I long to do", start: 195.0, end: 199.0 },
  { sentence: "no matter when or where or who", start: 199.2, end: 202.4 },
  { sentence: "has one thing in common too", start: 202.6, end: 206.7 },
  { sentence: "it's a ", start: 206.8, end: 210.5 },
  { sentence: "it's a sin", start: 210.5, end: 212.3 },
  { sentence: "it's a sin...", start: 213.8, end: 216.5},
  {sentence: "everything I've ever done, everything I ever do", start: 218.1,end: 222.4,},
  { sentence: "every place I've ever been", start: 222.4, end: 224.2 },
  { sentence: "everywhere I'm going to...", start: 224.2, end: 226.4 },
  { sentence: "it's a sin", start: 226.5, end: 228.9 },
  { sentence: "it's a", start: 240.5, end: 244.4 },
  { sentence: "it's a sin", start: 244.4, end: 246.0 },
  { sentence: "it's a", start: 257.6, end: 261.6 },
  { sentence: "it's a sin", start: 261.6, end: 263.1 },
];
//check the audio currentTime with the lists start and end time

scroll.addEventListener("scroll", function (evt) {
  // console.log("scroll", (scroll.scrollTop) / (scroll.scrollHeight - scroll.clientHeight))
  var val = scroll.scrollTop / (scroll.scrollHeight - scroll.clientHeight);
  audio.currentTime = audio.duration * val;
  getSentence();
});
var isChrome =
  /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
if (!isChrome) {
  $("#iframeAudio").remove();
} else {
  $("#playAudio").remove();
}

audio.addEventListener(
  "playing",
  function () {
    for (i = 0; i < sentences.length; i++) {
      //for all sentences
      if (
        sentences[i].start <= audio.currentTime &&
        audio.currentTime <= sentences[i].end
      ) {
        console.log(sentences[i].sentence);
      }
    }
  },
  false
);
var currentSentence = ""
function getSentence() {
  let hasLyrics = false; //check if no sentence should be displayed
  for (i = 0; i < sentences.length; i++) {
    //for all sentences
    if (
      sentences[i].start <= audio.currentTime &&
      audio.currentTime <= sentences[i].end
    ) {
        if (currentSentence !== sentences[i].sentence) {
          console.log(sentences[i].sentence);
          currentSentence = sentences[i].sentence
          
          let ar = currentSentence.split("")
          var s = ar.map((c, i) => {
            let style = `animation-delay: ${0.1 + i / 20}s;`
            return `<span style="${style}">${c}</span>`
          }).join("")
          console.log("ar", ar, s)
          document.getElementById("lyrics").innerHTML = s;
      }
      hasLyrics = true;
    }
  }
  if (hasLyrics == false) {
    document.getElementById("lyrics").innerHTML = "";
  }
}
setInterval(getSentence, 100);

mouth.addEventListener("click", function () {
    console.log("ASDASDASD")
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});
