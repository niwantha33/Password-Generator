// Array of special characters to be included in password

debugger;
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
function getPasswordOptions() {
  // debugger;
  //  define local variables 
  let flag = true; // prompt repeat flag, in case user gives wrong input 

  let length_of_password = 0; // default set to 0

  let auto_flag = -1; // in case user gives 0, then random(10 -64) length will replace the length_of_password 

  let arr = [];
  do {
    length_of_password = prompt("Enter password length between 10 - 64 length (Auto :0)", 0);

    // validate the user input
    if (!isFinite(Number(length_of_password))) {

      window.alert(`You Entered Wrong Length: (${length_of_password})\nre-enter number, between 10 - 64\nExample : 12 `);

      flag = false;

    } else {

      flag = true; // validation success 

    }

  } while (!flag);

  if ((Number(length_of_password) >= 10 && Number(length_of_password <= 64)) || Number(length_of_password) === 0) {

    // let lowercase_ = 3;
    // let uppercase_ = 3;
    // let number_ = 2;
    // let special_characters = 2;
    character_types = 4;


    let remain_value = 0;
    // Auto option 
    if (Number(length_of_password) === 0) {

      remain_value = Math.floor(Math.random() * 54 + 10); // range: 54 and minimum : 10 
    }
    else {
      // user selected value
      remain_value = Number(length_of_password);
    }
    for (let i = 0; i < character_types; i++) {


    }

    arr = [lowercase_, uppercase_, number_, special_characters];
  }
  else {
    window.alert("Something Wrong!\nPlease Refresh the Webpage");
    // reload the browser 
    location.reload();
  }

  return arr;

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  getPasswordOptions();
  console.log("after load.");
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);