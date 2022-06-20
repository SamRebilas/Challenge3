// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var length = prompt("How long would you like your password to be?");
  console.log(length);
  if (length < 8 || length > 128){
    alert("Password must be between 8 and 128 characters!");
    return generatePassword();
  }
var lowercase = prompt("Would you like to include lowercase in your password? type YES or NO");
if(lowercase === "YES")
console.log(lowercase);
else(lowercase === "NO");

var uppercase = prompt("Would you like to include uppercase in your password? type YES or NO")
if (uppercase === "YES")
console.log(uppercase);
else(lowercase === "NO");


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
