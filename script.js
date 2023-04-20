// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var generatePassword="";

  var howManyChars=prompt("How many characters would you like to use in the password?");
  var wantSpecialChars=confirm("Would you like to include special characters?");
  var wantUpperChars=confirm("Would you like to include upper case characters?");
  var wantLowerChars=confirm("Would you like to include lower case characters?");
  var wantNumbersChars=confirm("Would you like to include numbers?");

  var charSpecial=[" ","!","@","#","$","%","^","&","*","(",")","-","_","=","+"];
  var randomCharSpecial=getRandomValueFromArray(charSpecial);

  var charUpper=["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  var randomCharUpper=getRandomValueFromArray(charUpper);

  var charLower=["abcdefghijklmnopqrstuvwxyz"];
  var randomCharLower=getRandomValueFromArray(charLower);

  var charNumbers=[0,1,2,3,4,5,6,7,8,9];
  var randomCharNumbers=getRandomValueFromArray(charNumbers);

  return generatePassword;
}

function charLength(){
  var min=math.min(8);
  var max=math.max(128);

  if (min<=howManyChars<=max){

  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
