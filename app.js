function speakText(text) {
    console.log(text);
    let speech = new SpeechSynthesisUtterance();
    let voices = window.speechSynthesis.getVoices();
    speech.text = text;
    speech.lang = "en";
    speech.voice = voices[2];
    // Start Speaking
    window.speechSynthesis.speak(speech);
}