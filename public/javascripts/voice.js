// the code uses the speechSynthesis API to read out the text content of elements with IDs "temp"
//  and "plc" using speech synthesis. It first checks if the API is supported, then retrieves 
// the available voices, and finally, it speaks the provided text with specific voice settings.
//  The code also includes a timeout function to update the voice settings and speak a different text after 
// a 2-second delay.

function getVoices() {
     let voices = speechSynthesis.getVoices();
     if (!voices.length) {
          //  This line creates a new instance of SpeechSynthesisUtterance with an empty string as the text.
          //  This is used to trigger the loading of voices by making a dummy speech synthesis request
          let utterance = new SpeechSynthesisUtterance("");

          //  This line uses the speechSynthesis API to speak the empty utterance. 
          // This will trigger the loading of voices if they are not yet available.

          speechSynthesis.speak(utterance);

          // This line retrieves the available voices again after the dummy speech 
          // synthesis request to ensure that the voices array is populated with the loaded voices.
          voices = speechSynthesis.getVoices();

     }
     return voices;
}
// This function is defined to speak the provided text using the specified voice, rate, pitch, and volume parameters.
function speak(text, voice, rate, pitch, volume) {
     let speakData = new SpeechSynthesisUtterance();
     speakData.volume = volume;
     speakData.rate = rate;
     speakData.pitch = pitch;
     speakData.text = text;
     // speakData.lang = 'en-IN';


     // This line sets the language of the speech synthesis to British English (en-GB).
     //  The language code represents the region-specific accent and pronunciation used for speech.

     speakData.lang = 'en-GB';
     speakData.voice = voice;

     // This line uses the speechSynthesis API to speak the speakData utterance, 
     // which will read out the provided text using the specified voice, rate, pitch, and volume.
     speechSynthesis.speak(speakData);

}

var a = document.querySelector("#temp").textContent;
var b = document.querySelector("#plc").textContent;

        //  This condition checks if the speechSynthesis API is supported in the browser. 
       // If supported, the code inside the first block will be executed; otherwise,
      //  the code inside the else block will be executed.
if ('speechSynthesis' in window) {
     let voices = getVoices();
     let rate = 1, pitch = 2, volume = 1;
     let text = b + "Today Temperature" + a + "celsius";

     // This line calls the speak() function to speak the text using the voice at index 5 from the voices array.
     //  It also sets the rate to 1, pitch to 0.5, and volume to 2.

     speak(text, voices[5], rate, pitch = .5, volume);
     setTimeout(() => {
          //   let text = b + "Today Temperature" + a + "centigrade";
          //   speak(text, voices[10], rate, pitch, volume );

          rate = 0.5; pitch = 1.5, volume = 2;

         // in This line sets up a timeout function that will be executed after a delay of 2000 milliseconds
     //  (2 seconds). 

     }, 2000);
     
} else {
     // If the speechSynthesis API is not supported in the browser, this line will log a message to the console 
     // indicating that speech synthesis is not supported.
     console.log(' Speech Synthesis Not Supported 😞');
}


