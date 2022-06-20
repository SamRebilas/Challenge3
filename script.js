// Assignment Code
var generateBtn = document.querySelector("#generate");


var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialcharacters = ["!", "#", "$", "%","^", "&", "*", "(", ")", "-", "_", "=", "+"];
    


  


function generatePassword(){
  var length = prompt("How long would you like your password to be?");
  console.log(length);
  if (length < 8 || length > 128){
    alert("Password must be between 8 and 128 characters!");
   
    return generatePassword();
  }
var islowercase = window.confirm("Would you like to include lowercase in your password?");{
    
}
var random = Math.floor(Math.random() * lowercase.length)

console.log(random, lowercase[random]);


var isuppercase = window.confirm("Would you like to include uppercase in your password?")

var random = Math.floor(Math.random() * uppercase.length)

console.log(random, uppercase[random]);


var isnumeric = window.confirm("Would you like to include numeric values in your password?")

var random = Math.floor(Math.random() * numeric.length)

console.log(random, numeric[random]);


var isspecialcharacters = window.confirm("would you like to include special characters?")

var random = Math.floor(Math.random() * specialcharacters.length)

console.log(random, specialcharacters[random]);

for(var i = 0; i < length; i++){
    
}

  return lowercase, uppercase, numeric, length;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
