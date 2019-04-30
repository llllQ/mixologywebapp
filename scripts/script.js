// chrome support
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

var test;

// Defining grammar
var drinks = [ 'margarita' , 'long island iced tea' , 'pina colada', 'woo woo', 'singapore sling', 'canada goose', 'sex on the beach', 'rumball', 'old fashioned', 'negroni'];
var grammar = '#JSGF V1.0; grammar drinks; public <drink> = ' + drinks.join(' | ') + ' ;'

// recongition controls
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();

speechRecognitionList.addFromString(grammar, 1);

recognition.grammars = speechRecognitionList;
//recognition.continuous = false;
// Set language of voice detection
recognition.lang = 'en-US'; 
// Define type of results, final or interim
recognition.interimResults = false;
// Number of potential matches that should be returned per result
recognition.maxAlternatives = 1;

// document.body.onclick = function(){
//   console.log("SPEAK!");
//     recognition.start();
// }

function runSpeech(){
  console.log("SPEAK!");
    recognition.start();
}

/**
 *Function fires when a successful voice recognition result is received
 *
 * @param {*} event
 */
recognition.onresult = function(event) {
    var last = event.results.length - 1;
    var drink = event.results[last][0].transcript;
    console.log('Result received: ' + drink + '.');
    console.log('Confidence: ' + event.results[0][0].confidence);
    drinkRequest(drink);
    
  }

  recognition.onspeechend = function() {
    recognition.stop();
  }

  recognition.onnomatch = function(event) {
    console.log('I didnt recognise that color.');
  }

  recognition.onerror = function(event) {
    console.log('Error occurred in recognition: ' + event.error);
  }

  function drinkRequest(drink){
    const Http = new XMLHttpRequest();
    var parameters = drink;
    const url ="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + parameters;

    console.log("request url: "+ url);
    Http.open("GET", url);
    Http.send();

      Http.onreadystatechange = function() {
        if (this.status == 200){
            const data = JSON.parse(Http.responseText);
            console.log(data);
            test = data.drinks;
            document.write(test[0].strDrink);



        }
      }
      


  }

  // Get the input field
var input = document.getElementById("myInput");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    drinkRequest(input.value)
  }
});