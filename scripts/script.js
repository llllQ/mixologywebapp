// chrome support
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

var test;
var thirst;

// Defining grammar
var drinks = [ 'margarita' , 'long island iced tea' , 'pina colada', 'dry martini' , 'cosmopolitan', 'vodka martini' ,'singapore sling', 'canada goose', 'sex on the beach', 'rumball', 'old fashioned', 'negroni'];
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

var ingHints = 0;

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

  function giveHint(hintType){
    if (hintType == "ingredients"){
      switch(ingHints){
        case 0:
        document.getElementById('hintOutputIng').innerHTML+='<li>There are X Ingredients in This Drink</li>'
        break;
        case 1:
        if (thirst.strIngredient1 != ""){
          document.getElementById('hintOutputIng').innerHTML='<li>Ingredient 1 is: '+thirst.strMeasure1+" "+ thirst.strIngredient1+'</li>';
        }
        else{
          document.getElementById('hintOutputIng').innerHTML+='<li>And Thats It!</li>';
          document.getElementById('ingBtn').style.display = "none";
        }
        break;
        case 2:
        if (thirst.strIngredient2 != ""){
          document.getElementById('hintOutputIng').innerHTML+='<li>Ingredient 2 is: '+thirst.strMeasure2+" "+ thirst.strIngredient2+'</li>';
        }
        else{
          document.getElementById('hintOutputIng').innerHTML+='<li>And Thats It!</li>';
          document.getElementById('ingBtn').style.display = "none";
        }
        break;
        case 3:
        if (thirst.strIngredient3 != ""){
          document.getElementById('hintOutputIng').innerHTML+='<li>Ingredient 3 is: '+thirst.strMeasure3+" "+ thirst.strIngredient3+'</li>';
        }
        else{
          document.getElementById('hintOutputIng').innerHTML+='<li>And Thats It!</li>';
          document.getElementById('ingBtn').style.display = "none";
        }
        break;
        case 4:
        if (thirst.strIngredient4 != ""){
          document.getElementById('hintOutputIng').innerHTML+='<li>Ingredient 4 is: '+thirst.strMeasure4+" "+ thirst.strIngredient4+'</li>';
        }
        else{
          document.getElementById('hintOutputIng').innerHTML+='<li>And Thats It!</li>';
          document.getElementById('ingBtn').style.display = "none";
        }
        break;
        case 5:
        if (thirst.strIngredient5 != ""){
          document.getElementById('hintOutputIng').innerHTML+='<li>Ingredient 5 is: '+thirst.strMeasure5+" "+ thirst.strIngredient5+'</li>';
        }
        else{
          document.getElementById('hintOutputIng').innerHTML+='<li>And Thats It!</li>';
          document.getElementById('ingBtn').style.display = "none";
        }
        break;
        case 6:
        if (thirst.strIngredient6 != ""){
          document.getElementById('hintOutputIng').innerHTML+='<li>Ingredient 6 is: '+thirst.strMeasure6+" "+ thirst.strIngredient6+'</li>';
        }
        else{
          document.getElementById('hintOutputIng').innerHTML+='<li>And Thats It!</li>';
          document.getElementById('ingBtn').style.display = "none";
        }
        break;
      }
      ingHints++;
    } else{
      document.getElementById('hintOutputMet').innerHTML = '<li>'+thirst.strInstructions+'</li><li>And Thats It!</li>'
      document.getElementById('metBtn').style.display = "none";
    }

  }

  function writeMethod(drink){
    var element = document.getElementById('method');
    element.innerHTML += "<p>"+drink.strInstructions+"</p>";
  }

  function drinkRequest(drink){
    ingHints = 0;
    methHints = 0;
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
            thirst = tests[0];
            document.getElementById('result').innerHTML = "<div id='drink'><img class='drinkImg' src='"+tests[0].strDrinkThumb+"'><h1>"+tests[0].strDrink+"</h1><div id='ingredients'><p>In one "+tests[0].strGlass+":</p></div><div id='method'></div></div>";
            document.getElementById('container').style.display = "block";
            if (document.getElementById("defaultInline1").checked){
              writeIngredients(tests[0]);
              writeMethod(tests[0]);
            }else{
              // alert("learn");
              document.getElementById('ingredients').innerHTML = "<div><h5 class='card-title'>Ingredients</h5><div id='hintOutputIng'></div><button id='ingBtn' type='button' class='btn btn-primary' onclick=giveHint('ingredients')>hint</button></div>";
              document.getElementById('method').innerHTML ="<div><h5 class='card-title'>Method</h5><div id='hintOutputMet'></div><button id='metBtn' type='button' class='btn btn-primary' onclick=giveHint('method')>hint</button></div>";
            }
            document.getElementById('checkDrink').style.display="block";
            
            
            
            
            document.querySelector('#container').scrollIntoView({
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