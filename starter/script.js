// Array of special characters to be included in password

// debugger;
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


//comparing number for sort 

function compare_number(a, b) {
  return a - b;
}

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


  // console.log("pass: "+length_of_password);
  if ((Number(length_of_password) >= 10 && Number(length_of_password <= 64)) || Number(length_of_password) === 0) {
    // arr = [lowercase_, uppercase_, number_, special_characters];

    character_types = 4;

    let remaining_value = 0;
    // Auto option 
    if (Number(length_of_password) === 0) {

      remaining_value = Math.floor(Math.random() * 54 + 10); // range: 54 and minimum : 10 
      // set new password length to remaining_value
      length_of_password = remaining_value;
      console.log("Auto generated random no: ", length_of_password);

    }
    else {
      // user selected value
      remaining_value = Number(length_of_password);
    }
    // generate random 3 random numbers 
    // length_of_password = rdm_1 + rdm_2 + rdm_3 + ( length_of_password - sum(rdm_1 + rdm_2 + rdm_3))
    for (let i = 0; i < character_types - 1; i++) {

      // remaining_value/3 : in order to keep the total < length_of_password
      let random_value = Math.floor(Math.random() * remaining_value / 3) + 1;

      // console.log("random_value :", random_value);
      // console.log("remaining_value :", remaining_value);

      remaining_value -= random_value;
      //  update the array 
      arr.push(random_value);
    }
  }
  else {
    window.alert("Something Wrong!\nPlease Refresh the Webpage");
    // reload the browser 
    location.reload();
  }

  //  sort lowest to highest 
  arr.sort(compare_number);

  console.log("sort the array:", arr);
  // sum all three element 
  let random_num_total = arr.reduce(function (a, b) { return a + b; });

  arr.push((Number(length_of_password) - random_num_total));

  // revers the array
  console.log(arr.reverse())

  return arr;
}

// Function for getting a random element from an array
function getRandom(arr) {
  // generate array elements
  let error_detect = true;
  let password = "";
  types_array = [lowerCasedCharacters, upperCasedCharacters, numericCharacters, specialCharacters]

  let tmp_password = [];
  for (let i = 0; i < types_array.length; i++) {
    let tmp_array = Array.from({ length: types_array[i].length }, (v, index) => index);
    // shuffle array elements 
    tmp_array.sort(() => Math.random() - 0.5);

    for (let j = 0; j < arr[i]; j++) {
      if (types_array[tmp_array[j]] != 'undefine') {
        tmp_password.push(types_array[i][tmp_array[j]]);

      }
      else {
        error_detect = false;
      }

    }
  }

  // do {
  //   let lowercase_ = Array.from({ length: lowerCasedCharacters.length }, (v, index) => index);
  //   // shuffle array elements 
  //   lowercase_.sort(() => Math.random() - 0.5);

  //   let tmp_lower_case = "";
  //   for (let i = 0; i < arr[0]; i++) {
  //     if(lowerCasedCharacters[lowercase_[i]] != 'undefine')
  //     {
  //       tmp_lower_case += lowerCasedCharacters[lowercase_[i]];

  //     }
  //     else{
  //       error_detect = true;
  //     }

  //   }

  //   let uppercase_ = Array.from({ length: upperCasedCharacters.length }, (v, index) => index);
  //   uppercase_.sort(() => Math.random() - 0.5);

  //   let tmp_upper_case = "";
  //   for (let i = 0; i < arr[1]; i++) {
  //     tmp_upper_case += upperCasedCharacters[uppercase_[i]];
  //   }
  //   console.log(tmp_upper_case);

  //   let number_ = Array.from({ length: numericCharacters.length }, (v, index) => index);
  //   console.log(number_)
  //   number_.sort(() => Math.random() - 0.5);
  //   console.log(number_)

  //   let tmp_number = "";
  //   for (let i = 0; i < arr[2]; i++) {
  //     console.log(numericCharacters[number_[i]]);
  //     tmp_number += numericCharacters[number_[i]];
  //   }
  //   console.log(tmp_number);

  //   let special_characters = Array.from({ length: specialCharacters.length }, (v, index) => index);
  //   console.log("special char:", special_characters);

  //   special_characters.sort(() => Math.random() - 0.5);

  //   console.log("special char:", special_characters);

  //   let tmp_char = "";

  //   for (let i = 0; i < arr[3]; i++) {
  //     console.log(specialCharacters[special_characters[i]])
  //     debugger;
  //     tmp_char += specialCharacters[special_characters[i]];
  //   }

  //   password = tmp_lower_case + tmp_upper_case + tmp_number + tmp_char;


  // } while (!error_detect);



  // let pass_split = password.split("");
  tmp_password.sort(() => Math.random() - 0.5)
  // let pass_join = pass_split.join('');
  console.log(tmp_password);
  // console.log(pass_join);

  return password

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password_types = getPasswordOptions();
  let password_array = getRandom(password_types);

  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);