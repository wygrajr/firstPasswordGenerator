// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var generatePassword="";
  

  var howManyChars=prompt("How many characters would you like to use in the password?");
  if (8<=howManyChars<=128){
    passwordLength=howManyChars
  }

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
    characters.concat(randomCharSpecial);
  }
  if (wantUpperChars===true){
    characters.concat(randomCharUpper);
  }
  if (wantLowerChars===true){
    characters.concat(randomCharLower);
  }
  if (wantNumbersChars===true){
    characters.concat(randomCharLower);
  }

  var password = "";
  for (var i=0;i<passwordLength;i++){
    password+=characters[Math.floor(Math.random() + addNumbersChars)]
  }

  return generatePassword;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
