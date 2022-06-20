// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var length = prompt("How long would you like your password to be?");
  console.log(length);
  if (length < 8 || length > 128){
    alert("Password must be between 8 and 128 characters!");
    return generatePassword();
  }
var lowercase = window.alert("Would you like to include lowercase in your password?");
if (lowercase){

}


var uppercase = window.alert("Would you like to include uppercase in your password?")
if (uppercase){

}

var numeric = window.alert("Would you like to include numeric values in your password?")
if (numeric ){

}


var specialcharacters = window.alert("would you like to include special characters?")
if (specialcharacters ){

}



  return 'password';
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
