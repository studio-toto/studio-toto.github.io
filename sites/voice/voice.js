var speech= new SpeechSynthesisUtterance();
speech.pitch = 0;
speech.rate = 0.5;


function reverseString(str) {
    return str.toLowerCase().split("").reverse().join("");
}
function populateVoiceList() {
    if(typeof speechSynthesis === 'undefined') {
      return;
    }
  
    var voices = speechSynthesis.getVoices();
  console.log(voices);
    // speech.voice = voices[1];
    for(var i = 0; i < voices.length; i++) {
      var option = document.createElement('option');
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
  
      if(voices[i].default) {
        option.textContent += ' -- DEFAULT';
      }
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      document.getElementById("voiceSelect").appendChild(option);
    }
  }
  
  populateVoiceList();
  if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

function speak() {
    var voice = document.getElementById('voiceSelect').value;
    const foundVoice = speechSynthesis.getVoices().find(({ name }) => voice.includes(name));
    console.log('speaking');

    if (foundVoice) speech.voice = foundVoice;

    speech.text = reverseString(document.querySelector("textarea").value);
    console.log(speech.text);
    window.speechSynthesis.speak(speech);
  }
  