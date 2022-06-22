// Assignment Code
var generateBtn = document.querySelector("#generate");


var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacters = ["!", "#", "$", "%","^", "&", "*", "(", ")", "-", "_", "=", "+"];
    

var isLowercase;
var isUppercase;
var isNumeric;
var isLowercase;
var isSpecialCharacters;

//generate password function
function generatePassword(){
  var length = prompt("How long would you like your password to be?");
  console.log(length);

//password length
  if (length < 8 || length > 128){
     alert("Password must be between 8 and 128 characters!");
   
    return generatePassword();
  }
  //random lowercase
  else {isLowercase = window.confirm("Would you like to include lowercase in your password?");

  for (var i = 0; i < length; i++) {
    var random = Math.floor(Math.random() * lowercase.length)

    console.log(lowercase[random]);
}

//random uppercase
isUppercase = window.confirm("Would you like to include uppercase in your password?")
for (var i = 0; i < length; i++) {
var random = Math.floor(Math.random() * uppercase.length)

console.log(uppercase[random]);
}

//random numeric
isNumeric = window.confirm("Would you like to include numeric values in your password?")
for (var i = 0; i < length; i++) {
var random = Math.floor(Math.random() * numeric.length)

console.log(numeric[random]);
}
//random special character
isSpecialCharacters = window.confirm("would you like to include special characters?")
for (var i = 0; i < length; i++) {
var random = Math.floor(Math.random() * specialCharacters.length)

console.log(specialCharacters[random]);
}


  return (lowercase[random]);
  
  
    
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

