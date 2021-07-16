// Assignment Code - Password Generator

//Used following MDN API docs pages to understand methods usage
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
//String.prototype.split()
//The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.

//Pulled starting set of special characters from here:
//https://owasp.org/www-community/password-special-characters 
//That site had: The same list as string (between double quotes): " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
//But I removed space , double quote ", single quote ', comma ,, period ., forward slash /, backslash \, semi-colon :, colon ;, tickmark `, not allowing them to be a special character here.

//building arrays of options user has avaiable to select from:
var optionsSpecialCharacters = "!#$%&()*+-<=>?@[]^_{|}~".split(""); //my set has 23 items/length, 10 less than site leveraged due to removals
var optionsNumbers = "0123456789".split("");
var optionsAlphabetLowerCase = "abcdefghijklmnopqrstuvwxyz".split("");//26 length
var optionsAlphabetUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");//26 length

var pswd = "";

//echoing out confirming my options arrays indicies and their values and length:
//console.log(optionsAlphabetLowerCase);
//console.log(optionsAlphabetUpperCase);
//console.log(optionsSpecialCharacters);
//console.log(optionsNumbers);


//Used this page to understand how to know when button on page was clicked:
//https://www.w3schools.com/jsref/event_onclick.asp
//for this to work have to add onclick="generatePasswordButtonClicked()" to <button id="generate"
function generatePasswordButtonClicked() {
  console.log("Generate Password button on HTML page was clicked!");
  pswd = ""; //reset pswd to empty (else click to gen again, next pswd concat to last pswd)
  showPasswordToUser();
}

//Also used same page for info on addEventListener with listening for "click" event
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onclick_addeventlistener
//removed onclick="generatePasswordButtonClicked()" to <button id="generate"
//this worked too but commented out as Ben showed us a different, better way
//document.getElementById("generate").addEventListener("click", generatePasswordButtonClicked);

//Ben showed us using querySelector
//MDN page:
//https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
//The Document method querySelector() returns the first Element within the document that matches the specified selector, 
//or group of selectors. 
//If no matches are found, null is returned.
//This also helped:
//https://www.w3schools.com/jsref/met_document_queryselector.asp
//this returns button element, which has an id of #generate and assigns it to a variable called generateButton
var generateButton = document.querySelector("#generate");
//this adds a listener to variable generateButton, listening for "click" event 
//and will trigger/call generatePasswordButtonClicked() function when button is clicked
generateButton.addEventListener("click", generatePasswordButtonClicked);

//setup interactions/questions/info to user
var characterLengthQuestionToUser = "How many characters would you like your password to contain?";
var informUserOnPasswordLength = "Password length must be from 8-128 characters.";
var informUserOkOnSpecialCharacters = "Click OK to confirm including special characters.";
var informUserOkOnNumericCharacters = "Click OK to confirm including numeric characters.";
var informUserOkOnLowercaseCharacters = "Click OK to confirm including lowercase characters.";
var informUserOkOnUppercaseCharacters = "Click OK to confirm including uppercase characters.";

function showPasswordToUser() {
  console.log("showPasswordToUser function called");

  /*
  pseudo code:
  before generating password must do the following:
  a) do series of prompts to user for password criteria
    i) -how long/how many characters/length of password? (number)
    i) --only allow 8-128 characters (validation)
    i) --lower than 8 or higher than 128
    i) ----message: the number has to be from 8-128 characters
  b) does user want to use special characters? (boolean)
  c) does user want to use numeric characters? (boolean)
  d) does user want to use lowercase? (boolean)
  e) does user want to use uppercase? (boolean)
  f) check that at least one character type was selected
    i) -if not? restart the prompts
    */

  //a) i) -how long/how many characters/length of password? (number)
  //MDN Window for .prompt
  //https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt
  //Cancel button returns empty string, so it too will inform user of length
  //cast the string returned to number
  var passwordCharacterLength = Number(window.prompt(characterLengthQuestionToUser));
  console.log("passwordCharacterLength: " + passwordCharacterLength);
  //console.log("passwordCharacterLength.length: " + passwordCharacterLength.length);

  //a) i) --only allow 8-128 characters (validation)
  if (passwordCharacterLength >= 8 && passwordCharacterLength <= 128) {

    //for these next checks, use window.confirm since no text input required by user, 
    //just cancel/no or Ok buttons/responses, returns boolean
    //https://www.w3schools.com/jsref/met_win_confirm.asp
    //"A confirm box is often used if you want the user to verify or accept something."
    //The confirm() method returns true if the user clicked "OK", and false otherwise.

    //handle special characters
    var isSpecialCharacters = window.confirm(informUserOkOnSpecialCharacters); //boolean
    console.log("isSpecialCharacters: " + isSpecialCharacters);

    //handle numeric characters
    var isNumericCharacters = window.confirm(informUserOkOnNumericCharacters); //boolean
    console.log("isNumericCharacters: " + isNumericCharacters);

    //handle lowercase characters
    var isLowerCaseCharacters = window.confirm(informUserOkOnLowercaseCharacters); //boolean
    console.log("isLowerCaseCharacters: " + isLowerCaseCharacters);

    //handle uppercase characters
    var isUpperCaseCharacters = window.confirm(informUserOkOnUppercaseCharacters); //boolean
    console.log("isUpperCaseCharacters: " + isUpperCaseCharacters);

    //check that at least one character type was selected
    if (isSpecialCharacters || isNumericCharacters || isLowerCaseCharacters || isUpperCaseCharacters) {
      console.log("at least 1 char type was selected!!");

      //this will hold characters from the different types that the user said yes to
      var charactersCombo = [];

      //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
      
      if (isSpecialCharacters) {
        //https://www.codegrepper.com/code-examples/javascript/copy+from+one+array+to+another+empty+array+in+javascript
        //charactersCombo = Array.from(optionsSpecialCharacters);
        charactersCombo = charactersCombo.concat(optionsSpecialCharacters);
        console.log(charactersCombo);
      }

      if (isNumericCharacters) {
        charactersCombo = charactersCombo.concat(optionsNumbers);
        console.log(charactersCombo);
      }

      if (isLowerCaseCharacters) {
        charactersCombo = charactersCombo.concat(optionsAlphabetLowerCase);
        console.log(charactersCombo);
      }

      if (isUpperCaseCharacters) {
        charactersCombo = charactersCombo.concat(optionsAlphabetUpperCase);
        console.log(charactersCombo);
      }

      //generate password, 
      //passing in charactersCombo array of all chars user selected
      //and the passwordCharacterLength user provided
      var password = generatePassword(charactersCombo, passwordCharacterLength);

      //selected password textarea and assigned it to a variable
      var passwordText = document.querySelector("#password");
      //used variable to target element's value property and assigned password
      //passwordText.value = "jfjfjfieieio00999";
      passwordText.value = password;

    }

  } else {

    //didn't use prompt here because need to be just informative to user, so used window.alert
    //https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
    //this informs user they didn't enter a proper value in the 
    //range (or even a number) or if they canceled trying to bypass
    window.alert(informUserOnPasswordLength);

  }
}

/*
pseudo code:
combine the selected lists into a big list
randomly select however many characters the user told us to use
place those randomly selected into a new string
return this new string
*/
function generatePassword(charComboArray, pswdCharacterLength) {

  //I started thinking about out of bounds error in Javascript
  //but found:
  //"JavaScript arrays don't really have a concept of size. 
  //You can try to retrieve an element from any position in the array, 
  //and if no element exists it will return undefined . 
  //There is no such thing as an out of bounds error."
  //But for my purposes here, only up to length-1 index value can be 
  //randomly selected, so I need a range to work with.

  console.log(charComboArray.length);

  for (var i=1; i <= pswdCharacterLength; i++) {
    console.log("counter num user input: " + pswdCharacterLength);
    //select randomly:
    //https://www.w3schools.com/js/js_random.asp
    //Example, Returns a random integer from 0 to 100:
    //var randomIndexValueWithinRange = Math.floor(Math.random() * 101);
    //Returns a random integer from 0 to my/combo's range
    //& stores it into randomIndexValueWithinRange variable:
    var randomIndexValueWithinRange = Math.floor(Math.random() * charComboArray.length);

    //use randomIndexValueWithinRange as index to use to extract out of charComboArray
    //& store the value of that index into variable:
    var pswdCharacter = charComboArray[randomIndexValueWithinRange];
    console.log("randomIndexValueWithinRange: " + randomIndexValueWithinRange);
    console.log("using randomIndexValueWithinRange, extracted from charComboArray: " + pswdCharacter);
    console.log("pswdCharacter is typeof: " + typeof pswdCharacter);

    //add that pswdCharacter randomly picked to a string
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat
    pswd = pswd.concat(pswdCharacter);
    console.log("pswd: " + pswd);
    //console.log(pswd + pswdCharacter);

  }
  
  return pswd;

}



