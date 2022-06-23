// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numeric = "1234567890"
var specialCharacters = "!#$%^&*(),_=+"
var finalPassword = "";


//generate password function
function generatePassword(){
 
 length = prompt("How long would you like your password to be?");
 console.log(length);

//password length
if (length < 8 || length > 128){
 length = alert("Password must be between 8 and 128 characters!");
    return generatePassword();
}
  //random lowercase
  else {
    var isLowercase = window.confirm("Would you like to include lowercase in your password?");
    console.log(isLowercase);
    
    

    //random uppercase
    var isUppercase = window.confirm("Would you like to include uppercase in your password?")
    console.log(isUppercase);
    
    
    //random numeric
   var isNumeric = window.confirm("Would you like to include numeric values in your password?")
    console.log(isNumeric);
    
    
    //random special character
    var isSpecialCharacters = window.confirm("would you like to include special characters?")
    console.log(isSpecialCharacters);
    
    }

 
// no selection
if (!isLowercase && !isUppercase && !isNumeric && !isSpecialCharacters) {
alert("You must choose atleast one parameter!");
}
// all selected
if (isLowercase && isUppercase && isNumeric && isSpecialCharacters){
  finalPassword = finalPassword + lowercase + uppercase + numeric + specialCharacters;
}
// lower, upper, numeric selected
if (isLowercase && isUppercase && isNumeric){
  finalPassword = finalPassword + lowercase + uppercase + numeric;
}
if (isLowercase && isUppercase && isSpecialCharacters){
  finalPassword = finalPassword + lowercase + uppercase + numeric;
}
if (isSpecialCharacters && isUppercase && isNumeric){
  finalPassword = finalPassword + specialCharacters + uppercase + numeric;
}
if (isLowercase && specialCharacters && isNumeric){
  finalPassword = finalPassword + lowercase + specialCharacters + numeric;
}
if (isLowercase && isUppercase ){
  finalPassword = finalPassword + lowercase + uppercase;
}
if (isNumeric && isUppercase ){
  finalPassword = finalPassword + numeric + uppercase;
}
if (isSpecialCharacters && isUppercase ){
  finalPassword = finalPassword + specialCharacters + uppercase;
}
if (isLowercase && isNumeric ){
  finalPassword = finalPassword + lowercase + numeric;
}
if (isLowercase && isSpecialCharacters ){
  finalPassword = finalPassword + lowercase + specialCharacters;
}
if (isNumeric && isSpecialCharacters ){
  finalPassword = finalPassword + numeric + specialCharacters;
}
if (isLowercase){
  finalPassword = finalPassword + lowercase;
}
if (isUppercase){
  finalPassword = finalPassword + uppercase;
}
if (isNumeric){
  finalPassword = finalPassword + numeric;
}
if (isSpecialCharacters){
  finalPassword = finalPassword + specialCharacters;
}

var choices = ""
for (var i = 0; i < length; i++){
  choices += finalPassword[Math.floor(Math.random() * finalPassword.length)];
  console.log(choices);
};
  return choices;

};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

