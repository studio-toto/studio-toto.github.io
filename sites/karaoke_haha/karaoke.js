
//i was just followinng the tutorial how tf it worked for them but not for me
var audio = document.querySelector("audio");
var mouth = document.querySelector("#mouth");
var sentences = [
  { sentence: "There is a house in New Orleans", start: 9.6 , end: 14.7 },
  { sentence: "They call the Rising Sun", start: 15 , end: 20 },
  { sentence: "And it's been the ruin of many a poor boy", start: 21.2 , end: 27 },
  { sentence: "And God, I know I'm one", start: 27.3 , end: 31.8 },
  { sentence: "My mother was a tailor", start: 42 , end: 46.7 },
  { sentence: "She sewed my new bluejeans", start: 47.6 , end: 52.5 },
  { sentence: "My father was a gambling man", start: 53.7 , end: 59.44 },
  { sentence: "Down in New Orleans", start: 60 , end: 64 },
  { sentence: "Now the only thing a gambler needs", start: 74 , end: 80 },
  { sentence: "Is a suitcase and a truck", start: 80.2 , end: 84.3 },
  { sentence: "And the only time he's satisfied", start: 86.0 , end: 91.5 },
  { sentence: "Is when he's on a drunk", start: 91.9 , end: 95.9 },
  { sentence: "Oh mother tell your children", start: 137.5, end: 141.9 },
  { sentence: "Not to do what I have done", start: 143.4, end: 148.0 },
  { sentence: "Spend your lives in sin and misery", start: 149.5 , end: 154.9 },
  { sentence: "In the House of the Rising Sun", start: 155.3 , end: 159.4 }, 
  { sentence: "Well. I got one foot on the platform", start: 169.0 , end: 174.3 },
  { sentence: "The other foot on the train", start: 175.3 , end: 179.8 },
  { sentence: "I'm going back to New Orleans", start: 181.0 , end: 186.0 },
  { sentence: "To wear that ball and chain", start: 186.5 , end: 190.7 },
  { sentence: "Well. there is a house in New Orleans", start: 199.7 , end: 205.9 },
  { sentence: "They call the Rising Sun", start: 125.8, end: 206.2 , end: 210.7 },
  { sentence: "And it's been the ruin of many a poor boy", start: 211.8 , end: 217.5 },
  { sentence: "And God. I know I'm one", start: 217.6 , end: 221.9 },

];
//check the audio currentTime with the lists start and end time

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

setInterval(function () {
  console.log("audio.isPaused", audio.paused)
  if(isHappy()){
    if (audio.paused == true) {
      // play !
      play()
    }
  } else {
    if (audio.paused == false) {
      // pause !
      pause()
    }
  }
}, 100)

function play () {
  audio.play()
  $('.playing_title').show()
  $('.paused_title').hide()
}

function pause () {
  audio.pause()
  $('.playing_title').hide()
  $('.paused_title').show()
}
/*
mouth.addEventListener("click", function () {
    console.log("ASDASDASD")
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});
*/
