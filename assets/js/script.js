// Assignment Code - Password Generator

//building arrays of options user has avaiable to select from:
var optionsSpecialCharacters = "!#$%&()*+-<=>?@[]^_{|}~".split(""); //my set has 23 items/length, 10 less than site leveraged due to removals
var optionsNumbers = "0123456789".split("");
var optionsAlphabetLowerCase = "abcdefghijklmnopqrstuvwxyz".split("");//26 length
var optionsAlphabetUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");//26 length

var pswd = "";

var noSetsPickedMessage = "You must select at least 1 set of characters."

//Generate Password button on HTML page was clicked!
function generatePasswordButtonClicked() {
  pswd = ""; //reset pswd to empty (else click to gen again, next pswd concat to last pswd)
  showPasswordToUser();
}

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

  //how long/how many characters/length of password? (number)
  //Cancel button returns empty string, so it too will inform user of length
  //cast the string returned to number
  var passwordCharacterLength = Number(window.prompt(characterLengthQuestionToUser));
  

  //only allow 8-128 characters (validation)
  if (passwordCharacterLength >= 8 && passwordCharacterLength <= 128) {

    //for these next checks, use window.confirm since no text input required by user, 
    //just cancel/no/false or Ok buttons/responses/true, returns boolean

    //handle special characters
    var isSpecialCharacters = window.confirm(informUserOkOnSpecialCharacters); //boolean
    
    //handle numeric characters
    var isNumericCharacters = window.confirm(informUserOkOnNumericCharacters); //boolean
    
    //handle lowercase characters
    var isLowerCaseCharacters = window.confirm(informUserOkOnLowercaseCharacters); //boolean
    
    //handle uppercase characters
    var isUpperCaseCharacters = window.confirm(informUserOkOnUppercaseCharacters); //boolean
    
    //check that at least one character type was selected
    if (isSpecialCharacters || isNumericCharacters || isLowerCaseCharacters || isUpperCaseCharacters) {
      
      //this will hold characters from the different types that the user said yes to
      var charactersCombo = [];

      //check if special characters selected, add them to combo
      if (isSpecialCharacters) {
        charactersCombo = charactersCombo.concat(optionsSpecialCharacters);
      }

      //check if numeric selected, add them to combo
      if (isNumericCharacters) {
        charactersCombo = charactersCombo.concat(optionsNumbers);
      }

      //check if lower case letters selected, add them to combo
      if (isLowerCaseCharacters) {
        charactersCombo = charactersCombo.concat(optionsAlphabetLowerCase);
      }

      //check if upper case letters selected, add them to combo
      if (isUpperCaseCharacters) {
        charactersCombo = charactersCombo.concat(optionsAlphabetUpperCase);
      }

      //generate password, 
      //passing in charactersCombo array of all chars user selected
      //and the passwordCharacterLength user provided
      var password = generatePassword(charactersCombo, passwordCharacterLength);

      //selected password textarea and assigned it to a variable
      var passwordText = document.querySelector("#password");
      //used variable to target element's value property and assigned password
      passwordText.value = password;

    } else {
        //User did not pick any of the different character set options
        alert(noSetsPickedMessage);
        pswd = ""; //reset pswd to empty
        showPasswordToUser(); //restart flow automatically for user who may have made a mistake with clicking buttons
    }

  } else {

    //didn't use prompt here because need to be just informative to user, so used window.alert
    //this informs user they didn't enter a proper value in the 
    //range (or even a number) or if they canceled trying to bypass
    window.alert(informUserOnPasswordLength);

  }
}

/*
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


  for (var i=1; i <= pswdCharacterLength; i++) {

    //select randomly
    //Returns a random integer from 0 to combo's range
    //& stores it into randomIndexValueWithinRange variable:
    var randomIndexValueWithinRange = Math.floor(Math.random() * charComboArray.length);

    //use randomIndexValueWithinRange as index to use to extract out of charComboArray
    //& store the value of that index into variable:
    var pswdCharacter = charComboArray[randomIndexValueWithinRange];

    //add that pswdCharacter randomly picked to a string
    pswd = pswd.concat(pswdCharacter);

  }
  
  return pswd;

}



