// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Function to prompt user for password options
  
  // variables for this function
  let bigArray = [];
  let passwordLength = 0;
  let lowerCaseOption;
  let upperCaseOption;
  let numericOption;
  let specialCharOptions;

function getPasswordOptions() {

  // codes for password length
    // to collect the password length
    function getPasswordLength() {
      passwordLength = parseInt(prompt("Please enter the length of password. The password should be between 10 to 64 characters."));
      return passwordLength;
    }
    getPasswordLength();

    // to validate the password length
    while (passwordLength < 10 || passwordLength > 64 || Number.isNaN(passwordLength)) {
      alert("Invalid value! Please enter a number between 10 to 64.");
      getPasswordLength();
    }

  // codes for character types
    // allows user to select character types
    function chooseCharacterTypes() {
      lowerCaseOption = confirm("Include lowercase characters? ('Ok' = yes, 'Cancel' = no)");
      upperCaseOption = confirm("Include uppercase characters? ('Ok' = yes, 'Cancel' = no)");
      numericOption = confirm("Include numeric characters? ('Ok' = yes, 'Cancel' = no)");
      specialCharOptions = confirm("Include special characters? ('Ok' = yes, 'Cancel' = no)");
    }
    chooseCharacterTypes();

    // to ensure at least one character type is selected
    while (!lowerCaseOption && !upperCaseOption && !numericOption && !specialCharOptions) {
      alert("Error! Please include at least one character type.")
      chooseCharacterTypes();
    }

    // for concatenating character types with user input
    if (lowerCaseOption) {
      bigArray = bigArray.concat(lowerCasedCharacters);
    } if (upperCaseOption) {
      bigArray = bigArray.concat(upperCasedCharacters);
    } if (numericOption) {
      bigArray = bigArray.concat(numericCharacters);
    } if (specialCharOptions) {
      bigArray = bigArray.concat(specialCharacters);
    }
}


// Function for getting a random element from an array
let builtArray = [];

function getRandom(arr) {
  
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    let randomCharacter = arr[randomIndex];
    builtArray = builtArray.concat(randomCharacter);
  }
  
  return builtArray;
}


// Function to generate password with user input

let passwordOutput = "";

function generatePassword() {

  getPasswordOptions();
  getRandom(bigArray);

  for (let i = 0; i < passwordLength; i++) {
    passwordOutput += builtArray[i]
  }

  return passwordOutput;
}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);