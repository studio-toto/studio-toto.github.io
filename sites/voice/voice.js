var speech= new SpeechSynthesisUtterance();

function speak() {
    
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
  }