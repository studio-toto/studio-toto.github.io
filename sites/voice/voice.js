var speech= new SpeechSynthesisUtterance();
speech.pitch = 0;
speech.rate = 0.5;

$('body').not('#container').click(function (event){
  var x = event.clientX;    
  var y = event.clientY; 
  var text = document.createElement('textarea');
  text.style.top = y + "px";
  text.style.left= x + "px";
  text.style.position = "absolute";
  text.style.animationDelay = Math.random()*10+5;
  text.focus();
  document.body.appendChild(text);
})

function reverseString(str) {
    return str.toLowerCase().split("").reverse().join("");
}
function populateVoiceList() {
    if(typeof speechSynthesis === 'undefined') {
      return;
    }
  
    var voices = speechSynthesis.getVoices();
//   console.log(voices);
    // speech.voice = voices[1];
    for(var i = 0; i < voices.length; i++) {
      var option = document.createElement('option');
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
  
      if(voices[i].default) {
        option.textContent += ' -- DEFAULT';
      }
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
    //   document.getElementById("voiceSelect").appendChild(option);
    }
  }
  
  populateVoiceList();
  if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

function speak() {
  $('#container').css('animation-play-state', 'running');
    var voice = ["Microsoft David - English (United States)"];
    const foundVoice = speechSynthesis.getVoices().find(({ name }) => voice.includes(name));
    // console.log('speaking');

    if (foundVoice) speech.voice = foundVoice;
    var text = "";
    $('textarea').each(function(){
      text += this.value + " ";
    })
    speech.text = reverseString(text);
    // console.log(speech.text);
    window.speechSynthesis.speak(speech);
    speech.onend = function(event) {
  $('#container').css('animation-play-state', 'paused'); }
  }
  
  function toggleSpeech() {
    if(speech.speaking) {
      speech.pause();
    $('#container').css('animation-play-state', 'paused');
    } else { speak();}
  }