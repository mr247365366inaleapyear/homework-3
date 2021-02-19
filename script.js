var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_+-=[]{};':`~,./<>?|";
var passwordLength;

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function determineLength() {
  passwordLength = prompt(
    "Choose number of characters to use for password (between 8-128 characters): "
  );
  if (passwordLength < 8) {
    alert(
      "Not enough characters for password, needs to be at least 8 characters and no more than 128"
    );
    determineLength();
  } else if (passwordLength > 128) {
    alert(
      "Too many characters for password, needs to be at least 8 characters and no more than 128"
    );
    determineLength();
  } else if (isNaN(passwordLength)) {
    alert("Password must be between 8-128 characters");
    determineLength();
  } else {
    alert(
      "What types of characters you would like to be included in your password?"
    );
  }
  return passwordLength;
}
function determineUppercase() {
  uppercaseCheck = prompt(
    "Do you want to include uppercase letters in your password? \n(Yes or No)"
  );
  uppercaseCheck = uppercaseCheck.toLowerCase();

  if (uppercaseCheck === null || uppercaseCheck === "") {
    alert("Please answer Yes or No");
    determineUppercase();
  } else if (uppercaseCheck === "yes" || uppercaseCheck === "y") {
    uppercaseCheck = true;
    return uppercaseCheck;
  } else if (uppercaseCheck === "no" || uppercaseCheck === "n") {
    uppercaseCheck = false;
    return uppercaseCheck;
  } else {
    alert("Please answer, Yes or No");
    determineUppercase();
  }
  return uppercaseCheck;
}
function determineNumbers() {
  numberCheck = prompt(
    "Do you want to include numbers in your password? \n(Yes or No)"
  );
  numberCheck = numberCheck.toLowerCase();

  if (numberCheck === null || numberCheck === "") {
    alert("Please answer Yes or No");
    determineNumbers();
  } else if (numberCheck === "yes" || numberCheck === "y") {
    numberCheck = true;
    return numberCheck;
  } else if (numberCheck === "no" || numberCheck === "n") {
    numberCheck = false;
    return numberCheck;
  } else {
    alert("Please answer Yes or No");
    determineNumbers();
  }
  return numberCheck;
}
function determineSpecial() {
  specialCheck = prompt(
    "Do you want to include special characters in your password? \n(Yes or No)"
  );
  specialCheck = specialCheck.toLowerCase();

  if (specialCheck === null || specialCheck === "") {
    alert("Please answer Yes or No");
    determineSpecial();
  } else if (specialCheck === "yes" || specialCheck === "y") {
    specialCheck = true;
    return specialCheck;
  } else if (specialCheck === "no" || specialCheck === "n") {
    specialCheck = false;
    return specialCheck;
  } else {
    alert("Please answer Yes or No");
    determineSpecial();
  }
  return specialCheck;
}
function generatePassword() {
  determineLength();
  console.log(passwordLength);
  determineUppercase();
  console.log(uppercaseCheck);
  determineNumbers();
  console.log(numberCheck);
  determineSpecial();
  console.log(specialCheck);

  var characters = lowercaseChar;
  var password = "";
  if (uppercaseCheck && numberCheck && specialCheck) {
    characters += uppercaseChar + numberChar + specialChar;
  } else if (uppercaseCheck && numberCheck) {
    characters += uppercaseChar + numberChar;
  } else if (numberCheck && specialCheck) {
    characters += numberChar + specialChar;
  } else if (uppercaseCheck && specialCheck) {
    characters += uppercaseChar + specialChar;
  } else if (uppercaseCheck) {
    characters += uppercaseChar;
  } else if (numberCheck) {
    characters += numberChar;
  } else if (specialCheck) {
    characters += specialChar;
  } else {
    characters === lowercaseChar;
  }

  for (var i = 0; i < passwordLength; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
}

generateBtn.addEventListener("click", writePassword);
