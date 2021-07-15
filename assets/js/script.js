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
var optionsAlphabetLowerCase = "abcdefghijklmnopqrstuvwxyz".split("");//26 length
var optionsAlphabetUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");//26 length
var optionsSpecialCharacters = "!#$%&()*+-<=>?@[]^_{|}~".split(""); //my set has 23 items/length, 10 less than site leveraged due to removals
var optionsNumbers = "0123456789".split("");

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
var generateButton = document.querySelector("#generate");
generateButton.addEventListener("click", generatePasswordButtonClicked);


var characterLengthQuestionToUser = "How many characters would you like your password to contain?";
var informUserOnPasswordLength = "Password length must be at least 8 characters.";
var informUserOkOnSpecialCharacters = "Click OK to confirm including special characters.";
var informUserOkOnNumericCharacters = "Click OK to confirm including numeric characters.";
var informUserOkOnLowercaseCharacters = "Click OK to confirm including lowercase characters.";
var informUserOkOnUppercaseCharacters = "Click OK to confirm including uppercase characters.";

function showPasswordToUser() {
  console.log("showInfo");

  //selected password textarea and assigned it to a variable
  var passwordText = document.querySelector("#password");
  //used variable to target 
  passwordText.value = "jfjfjfieieio00999";
}



