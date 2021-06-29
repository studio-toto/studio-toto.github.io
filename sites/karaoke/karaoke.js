var audio = document.querySelector("audio");
var scroll = document.querySelector(".scroll");
var mouth = document.querySelector("#mouth");
var sentences = [
  { sentence: "when I look back upon my life", start: 43.9, end: 47.9 },
  { sentence: "it's always with a sense of shame", start: 48.0, end: 41.3 },
  { sentence: "it's always with a sense of shame", start: 51.5, end: 55.7 },
  { sentence: "for everything I long to do", start: 61, end: 65.1 },
  { sentence: "no matter when or where or who", start: 65.1, end: 68.5 },
  { sentence: "has one thing in common too", start: 68.8, end: 72.5 },
  { sentence: "it's a", start: 72.7, end: 76.2 },
  { sentence: "it's a sin", start: 76.2, end: 78.3 },
  { sentence: "it's a sin", start: 80.0, end: 81.8 },
  { sentence: "everything I've ever done", start: 84.4, end: 86.5 },
  { sentence: "everything I ever do", start: 86.5, end: 88.6 },
  { sentence: "every place I've ever been", start: 88.6, end: 90.2 },
  { sentence: "everywhere I'm going to", start: 90.2, end: 92.7 },
  { sentence: "it's a sin", start: 92.9, end: 94.8 },
  { sentence: "at school they taught me how to be", start: 94.9, end: 98.7 },
  { sentence: "so pure in thought and word and deed", start: 99.0, end: 102.7 },
  { sentence: "they didn't quite succeed", start: 103.0, end: 106.5 },
  { sentence: "for everything I long to do", start: 110.0, end: 114.0 },
  { sentence: "no matter when or where or who", start: 114.2, end: 117.8 },
  { sentence: "has one thing in common too", start: 118.0, end: 121.7 },
  { sentence: "it's a", start: 122.0, end: 125.6 },
  { sentence: "it's a sin", start: 125.8, end: 127.2 },
  { sentence: "it's a sin", start: 129.0, end: 130.9 },
  { sentence: "everything I've ever done", start: 133.4, end: 135.2 },
  { sentence: "everything I ever do", start: 135.3, end: 137.2 },
  { sentence: "every place I've ever been", start: 137.4, end: 139.3 },
  { sentence: "everywhere I'm going to", start: 139.4, end: 141.6 },
  { sentence: "it's a sin", start: 141.8, end: 144.1 },
  { sentence: "father forgive me", start: 144.3, end: 146.7 },
  { sentence: "I tried not to do it", start: 147.2, end: 149.8 },
  { sentence: "turned over a new leaf", start: 151.0, end: 153.7 },
  { sentence: "then tore right through it", start: 155.2, end: 157.8 },
  { sentence: "Whatever you taught me", start: 158.5, end: 161.4 },
  { sentence: "I didn't believe it", start: 163.0, end: 165.0 },
  { sentence: "father you fought me", start: 166.5, end: 168.6 },
  {
    sentence: "cause I didn't  care and I still don't understand",
    start: 168.8,
    end: 174.4,
  },
  { sentence: "so I look back upon my life", start: 178.2, end: 182.0 },
  { sentence: "forever with a sense of shame", start: 182.2, end: 185.4 },
  { sentence: "I've always been the one to blame", start: 185.7, end: 189.8 },
  { sentence: "for everything I long to do", start: 195.0, end: 199.0 },
  { sentence: "no matter when or where or who", start: 199.2, end: 202.4 },
  { sentence: "has one thing in common too", start: 202.6, end: 206.7 },
  { sentence: "it's a ", start: 206.8, end: 210.5 },
  { sentence: "it's a sin", start: 210.5, end: 211.7 },
  { sentence: "it's a sin", start: 213.8, end: 215.7 },
  {
    sentence: "everything I've ever done, everything I ever do",
    start: 218.1,
    end: 222.4,
  },
  { sentence: "every place I've ever been", start: 222.4, end: 224.2 },
  { sentence: "everywhere I'm going to ..", start: 224.2, end: 226.4 },
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
