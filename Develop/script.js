// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_+-=[]{};':`~,./<>?|";
var passwordLength;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

//Function that determines type of password
function determineLength(){
  passwordLength = prompt("Choose number of characters to use for password (between 8-128 characters): ");
  if (passwordLength<8){
    alert("Not enough characters for password, needs to be at least 8 characters and no more than 128");
    determineLength();
  }else if (passwordLength>128){
    alert("Too many characters for password, needs to be at least 8 characters and no more than 128");
    determineLength();
  }else if (isNaN(passwordLength)){
    alert("Password must be between 8-128 characters");
    determineLength();
  }else{
    alert("What types of characters you would like to be included in your password.");
  }
  return passwordLength;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
