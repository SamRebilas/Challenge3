// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialcharacters = ["!", "#", "$", "%","^", "&", "*", "(", ")", "-", "_", "=", "+"];
    
function calllowercase(lowercase){
    return lowercase;
}
  


function generatePassword(){
  var length = prompt("How long would you like your password to be?");
  console.log(length);
  if (length < 8 || length > 128){
    alert("Password must be between 8 and 128 characters!");
    return generatePassword();
  }
var islowercase = window.confirm("Would you like to include lowercase in your password?");{
    calllowercase();
}


console.log(islowercase)


var isuppercase = window.confirm("Would you like to include uppercase in your password?")

console.log(isuppercase)

var isnumeric = window.confirm("Would you like to include numeric values in your password?")

console.log(isnumeric)


var isspecialcharacters = window.confirm("would you like to include special characters?")

console.log(isspecialcharacters)



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
