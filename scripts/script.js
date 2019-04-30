// chrome support
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

var test;

// Defining grammar
var drinks = [ 'margarita' , 'long island iced tea' , 'pina colada', 'dry martini' , 'cosmopolitan', 'candy cloud', 'vodka martini' ,'singapore sling', 'canada goose', 'sex on the beach', 'rumball', 'old fashioned', 'negroni'];
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

  function writeIngredients(test){
    console.log("!!");
    console.log(test);
    console.log("!!");
    
    document.getElementById('result').innerHTML = "<div id='drink'><img class='drinkImg' src='"+test.strDrinkThumb+"'><h1>"+test.strDrink+"</h1><div id='ingredients'></div><div id='method'></div></div>";
    var element = document.getElementById('ingredients');
    if (test.strIngredient1 != ""){
      element.innerHTML += " <li>"+test.strMeasure1+" "+ test.strIngredient1+"</li>";
    } else{
      return;
    }
    if (test.strIngredient2 != ""){
       element.innerHTML+= "<li>"+test.strMeasure2+" "+test.strIngredient2+"</li>";
    }else{
       
      return;
    }
    if (test.strIngredient3 != ""){
      element.innerHTML += "<li>" +test.strMeasure3+" "+ test.strIngredient3 + "</li>";
    }else{
       
      return;
    }
    if (test.strIngredient4 != ""){
      element.innerHTML += "<li>" +test.strMeasure4+" "+ test.strIngredient4 + "</li>";
    }else{
       
      return;
    }
    if (test.strIngredient5 != ""){
      element.innerHTML += "<li>" +test.strMeasure5+" "+ test.strIngredient5 + "</li>";
    }else{
       
      return;
    }
    if (test.strIngredient6 != ""){
      element.innerHTML += "<li>" +test.strMeasure6+" "+ test.strIngredient6 + "</li>";
    }else{
       
      return;
    }
    if (test.strIngredient7 != ""){
      element.innerHTML += "<li>" +test.strMeasure7+" "+ test.strIngredient7 + "</li>";
    }else{
       
      return;
    }
    if (test.strIngredient8 != ""){
      element.innerHTML += "<li>" +test.strMeasure8+" "+ test.strIngredient8 + "</li>";
    }else{
       
      return;
    }
    if (test.strIngredient9 != ""){
      element.innerHTML += "<li>" +test.strMeasure9+" "+ test.strIngredient9 + "</li>";
    }else{
       
      return;
    }
    if (test.strIngredient10 != ""){
      element.innerHTML += "<li>" +test.strMeasure10+" "+ test.strIngredient10 + "</li>";
    }else{
       
      return;
    }
    if (test.strIngredient11 != ""){
      element.innerHTML += "<li>" +test.strMeasure11+" "+ test.strIngredient11 + "</li>";
    }else{
       
      return;
    }
    if (test.strIngredient12 != ""){
      element.innerHTML += "<li>" +test.strMeasure12+" "+ test.strIngredient12 + "</li>";
    }else{
       
      return;
    }
    if (test.strIngredient13 != ""){
      element.innerHTML += "<li>" +test.strMeasure13+" "+ test.strIngredient13 + "</li>";
    }else{
       
      return;
    }
    if (test.strIngredient14 != ""){
      element.innerHTML += "<li>" +test.strMeasure14+" "+ test.strIngredient14 + "</li>";
    }else{
       
      return;
    }
    if (test.strIngredient15 != ""){
      element.innerHTML += "<li>" +test.strMeasure15+" "+ test.strIngredient15 + "</li>";
    }else{
       
      return;
    }
    
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
            tests = data.drinks;
            writeIngredients(tests[0]);
            
            
            
            document.querySelector('#result').scrollIntoView({
              behavior: 'smooth'
            });
            // document.write(test[0].strDrink);



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