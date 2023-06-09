// Assignment Code
var generateBtn = document.querySelector("#generate");

function getRandomValueFromArray(array){
  var randomNum=Math.floor(Math.random() * array.length);
  return array[randomNum];
}

function generatePassword(){

  var howManyChars=prompt("How many characters would you like to use in the password?");
  var wantSpecialChars=confirm("Would you like to include special characters?");
  var wantUpperChars=confirm("Would you like to include upper case characters?");
  var wantLowerChars=confirm("Would you like to include lower case characters?");
  var wantNumbersChars=confirm("Would you like to include numbers?");


  var charSpecial=[" ","!","@","#","$","%","^","&","*","(",")","-","_","=","+"];

  var charUpper=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  var charLower=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; 

  var charNumbers=[0,1,2,3,4,5,6,7,8,9];


  var characters=[];

  if (wantSpecialChars) {
    characters=characters.concat(charSpecial);
  }
  if (wantUpperChars){
    characters=characters.concat(charUpper);
  }
  if (wantLowerChars){
    characters=characters.concat(charLower);
  }
  if (wantNumbersChars){
    characters=characters.concat(charNumbers);
  }

  var generatePassword="";
  var passwordLength=howManyChars

  for (var i=generatePassword.length;i<passwordLength;i++){
    generatePassword+=getRandomValueFromArray(characters);
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
