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

  var characters=[];
  if (wantSpecialChars === true) {
    addSpecialChars=characters.concat(randomCharSpecial);
  }

  if (wantUpperChars===true/*&&wantSpecialChars===true*/){
    addUpperChars=addSpecialChars.concat(randomCharUpper);
  } else if (wantUpperChars===true&&wantSpecialChars===false){
    addUpperChars=characters.concat(randomCharUpper);
  }

  if (wantLowerChars===true/*&&wantUpperChars===true&&wantSpecialChars===true*/){
    addLowerChars=addUpperChars.concat(randomCharLower);
  } /*else if (wantLowerChars===true&&wantUpperChars===true&&wantSpecialChars===false){
    addLowerChars=addUpperChars.concat(randomCharLower);
  } else if (wantLowerChars===true&&wantUpperChars===false&&wantSpecialChars===true){
    addLowerChars=addSpecialChars.concat(randomCharLower);
  }*/ else if (wantLowerChars===true&&wantUpperChars===false&&wantSpecialChars===false){
    addLowerChars=characters.concat(randomCharLower);
  }

  if (wantNumbersChars===true/*&&wantLowerChars===true&&wantUpperChars===true&&wantSpecialChars===true*/){
    addNumbersChars=addLowerChars.concat(randomCharNumbers);
  } /*else if (wantNumbersChars===true&&wantLowerChars===true&&wantUpperChars===true&&wantSpecialChars===false){
    addNumbersChars=addLowerChars.concat(randomCharLower);
  } else if (wantNumbersChars===true&&wantLowerChars===true&&wantUpperChars===false&&wantSpecialChars===true){
    addNumbersChars=addLowerChars.concat(randomCharLower);
  } else if (wantNumbersChars===true&&wantLowerChars===false&&wantUpperChars===true&&wantSpecialChars===false){
    addNumbersChars=addUpperChars.concat(randomCharLower);
  } else if (wantNumbersChars===true&&wantLowerChars===false&&wantUpperChars===true&&wantSpecialChars===true){
    addNumbersChars=addUpperChars.concat(randomCharLower);
  } else if (wantNumbersChars===true&&wantLowerChars===false&&wantUpperChars===false&&wantSpecialChars===true){
    addNumbersChars=addSpecialChars.concat(randomCharLower);
  }*/ else if (wantNumbersChars===true&&wantLowerChars===false&&wantUpperChars===false&&wantSpecialChars===false){
    addNumbersChars=characters.concat(randomCharLower);
  }

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
