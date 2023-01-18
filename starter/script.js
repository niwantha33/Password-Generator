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



/*
@note:    This function is used for sort()    
@brief:   This is used to sort an array of numbers in ascending order,
          if the difference between a and b is -ve, 
          so, a will come first in the sorted array.
          if a - b = +ve, so, b is come first  
@param:   Sort inputs 
@return:  Compare values 
*/
function compare_number(a, b) {
  return a - b;
}


/*
@brief:     
        prompt() to ask the user to enter a password length between 10 and 64 characters, or to enter 0 for an automatically generated password length.

        Then, regular expression and the match() method to validate that the user input is a number and does not contain any letters or special characters. If the input is invalid, the function uses alert() to notify the user and location.reload() to refresh the page.

        if the password length is between 10 and 64 characters or is 0 (Auto). Then, generates 3 random numbers using Math.random() and assigns them to elements of the arr array. Then, Using Math.random() to generate a fourth number.
        
        *length of the password = x1 + x2 + x3 + (length - sum(x1 + x2 + x3))[ 4th element]


@param   :   N/A 
@return :   array,  Example: [11, 9, 5, 2]
*/

// Function to prompt user for password options
function getPasswordOptions() {
  // debugger;
  //  define local variables 
  let flag = true; // prompt repeat flag, in case user gives wrong input 

  let length_of_password = 0; // default set to 0

  let arr = [];

  length_of_password = prompt("Enter password length between 10 - 64 length (Auto :0)", 0);

  // validate the user input
  // /[a-zA-Z\W - Regular Expressions 

 

  if (length_of_password.match(/[a-zA-Z\W]/g)) {

    window.alert(`You Entered Wrong Length: (${length_of_password})\nre-enter number, between 10 - 64\nExample : 12 `);

    flag = false;
    location.reload();

  } else {

    flag = true; // validation success 

  }

  if (flag) {
    // console.log("pass: "+length_of_password);
    if ((Number(length_of_password) >= 10 && Number(length_of_password <= 64)) || Number(length_of_password) === 0) {
      // arr = [lowercase_, uppercase_, number_, special_characters];
      const  character_types = 4;
      let remaining_value = 0;
      // Auto option 
      if (Number(length_of_password) === 0) {

        remaining_value = Math.floor(Math.random() * 54 + 10); // range: 54 and minimum : 10 
        // set new password length to remaining_value
        length_of_password = remaining_value;

        console.log("Auto-Mode password Length: ", length_of_password);

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

        remaining_value -= random_value;
        //  update the array 
        arr.push(random_value);
      }
    }
    else if ((Number(length_of_password) > 0) && (Number(length_of_password) < 10)) {

      window.alert("Password length to be 10 -64 !\nPlease Refresh the Webpage");
      location.reload();

    }
    else if ((Number(length_of_password) > 64)) {

      window.alert("Password length to be 10 -64 !\nPlease Refresh the Webpage");
      location.reload();

    }
    else {
      window.alert("Something Wrong with the password length!\nPlease Refresh the Webpage");
      // reload the browser 
      location.reload();
    }

    //  sort lowest to highest 
    arr.sort(compare_number);

    // sum all three element 
    let random_num_total = arr.reduce(function (a, b) { return a + b; });

    // 4th element 
    arr.push((Number(length_of_password) - random_num_total));

    // revers the array
    arr.reverse();
  }
  return arr;
}

/*
@brief:  
      This getRandom takes in one parameter, arr. Then, called types_array which contains 4 global arrays of characters, lowerCasedCharacters, upperCasedCharacters, numericCharacters, and specialCharacters. also, initializing empty array called tmp_password. Then,  loop through each element of types_array.

      For each loop, the function creates a new array, tmp_array, 0 to the types_array[i].length using the Array.from() method. Then,  shuffles the elements of tmp_array using the sort() and  Math.random().

      Then, another loop inside the main loop  for arr[i] elements  to select the char from types_array[i].
      If the tmp_array.length >= arr[i] , it will push the characters from types_array[i][tmp_array[j]] to tmp_password array.

      Otherwise, it will use Math.random() to generate random numbers for array, and it will push the characters from types_array[i][tmp_array[Math.floor(Math.random() * types_array[i].length)]] to tmp_password array.

      Finally, the function returns the tmp_password array which Use regular expressions to validate the user input for the password length. Instead of using isFinite() and checking for non-numeric characters, you could use a regular expression to check that the input is a number between 10 and 64.
@param: array  ()

@return:  tmp_password 

*/
function getRandom(arr) {

  types_array = [lowerCasedCharacters, upperCasedCharacters, numericCharacters, specialCharacters]
  let tmp_password = [];

  for (let i = 0; i < types_array.length; i++) {
    // generate array elements
    let tmp_array = Array.from({ length: types_array[i].length }, (v, index) => index);
    //  [14, 24, 22, 5, 10, 16, 11, 7, 4, 13, 19, 3, 20, 2, 1, 6, 25, 12, 0, 21, 18, 23, 15, 8, 9, 17]

    // shuffle array elements 
    tmp_array.sort(() => Math.random() - 0.5);

    // console.log(`tmp_array : ${i}: ${arr[i]}`, tmp_array);

 
    for (let j = 0; j < arr[i]; j++) {

      // this will check tmp_array.length and generated random number for each type 
      if (tmp_array.length >= arr[i]) {

        // console.log(types_array[tmp_array[j]])

        if (types_array[tmp_array[j]] !== 'undefined') {
          // console.log(`array list [${i}]:[${j}] `, types_array[i][tmp_array[j]])
          tmp_password.push(types_array[i][tmp_array[j]]);         
        }
        else {
          console.log("detected error: undefined");
          window.alert("Something Wrong!\nPlease refresh the page.")          
        }

      } else {
        // example arr[2] = 36 , lowercase.length  < 36 , then generates random numbers for array using random
        tmp_password.push(types_array[i][tmp_array[Math.floor(Math.random() * types_array[i].length)]]);

      }
    }
  }
  return tmp_password;
}
/*
@brief: 
        The function generatePassword takes in one parameter, tmp_password (array return from getRandom()). Then, randomly shuffling the characters in tmp_password using the sort() method and the Math.random() function. Then, it joins the characters of the shuffled array back into a string and assigns it to the variable generated_password. 
        
        Next, regular expressions to check if the generated_password string contains any numerical digits, lowercase letters, uppercase letters, or special characters. Then, results of these print to the console, Finally, the function returns the generated_password string.

@param: array  ()

@return:  string 
*/


function generatePassword(tmp_password) {
  // let pass_split = password.split("");
  tmp_password.sort(() => Math.random() - 0.5)
  // let pass_join = pass_split.join('');
  console.log(tmp_password);
  // console.log(pass_join);

  let generated_password = tmp_password.join(''); // join the array char to string 

  // check at least one digit included 

  let match_number = /[0-9]/g;// match character 0 through 9 , g: repeat 
  let match_lowercase = /[a-z]/g; // match character a through z , g: repeat 
  let match_uppercase = /[A-Z]/g; // match character A through Z , g: repeat 
  let match_special_char = /[\W]/g; // find special characters 

  console.log("is available \"Numeric\" in the generated password:", generated_password.match(match_number) !== null ? "Yes" : "No", "=> Length:", generated_password.match(match_number).length)

  console.log("is available \"Lowercase\" in the generated password:", generated_password.match(match_lowercase) !== null ? "Yes" : "No", "=> Length:", generated_password.match(match_lowercase).length)

  console.log("is available \"Uppercase\" in the generated password:", generated_password.match(match_uppercase) !== null ? "Yes" : "No", "=> Length:", generated_password.match(match_uppercase).length)

  console.log("is available \"Special Characters\" in the generated password:", generated_password.match(match_special_char) !== null ? "Yes" : "No", "=> Length:", generated_password.match(match_special_char).length)
  
  return generated_password;

}

var generateBtn = document.querySelector('#generate');

/*
 
@brief:   Write password to the #password input
@param:   N/A
@return:  N/A
*/


function writePassword() {
  console.time();
  let password_types = getPasswordOptions();
  let password_array = getRandom(password_types);
  var password = generatePassword(password_array);

  var passwordText = document.querySelector('#password');

  passwordText.value = password;
  console.timeEnd();

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
