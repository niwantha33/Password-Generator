# Password-Generator

## Description 

Link to project : [Password Generator](https://niwantha33.github.io/Password-Generator/)

![page](./assets/images/front-page.png)



```Javascript
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');



function writePassword() {
  console.time();
  let password_types = getPasswordOptions();
  let password_array = getRandom(password_types);
  var password = generatePassword(password_array);

  var passwordText = document.querySelector('#password');

  passwordText.value = password;
  console.timeEnd();

}
```

```html
<button id="generate" class="btn">Generate Password</button>
```
When a user clicks on the button with the id "generate", 

```JavaScript
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
```
it triggers the writePassword() function which will execute the following steps:


- It calls the getPasswordOptions() function which prompts the user to enter the desired length of their          password   and returns an array of numbers representing the number of characters for each type of characters.

-   It calls the getRandom(password_types) function which takes in password_types array and returns an array of randomly selected characters based on the number of characters for each type of characters.

-   It calls the generatePassword(password_array) function which takes in the password_array of randomly selected characters, shuffles them and join them back to a string and returns the generated password.

-   It assigns the generated password to the value of the element with the id "password",

```html
<textarea
            readonly
            id="password"
            placeholder="Your Secure Password"
            aria-label="Generated Password"
          ></textarea>
```
```JavaScript
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
```

### Regular Expressions 


## Credits 
[ECMA262 Specifications](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.random) : Math.floor()function & Math.random()

[sorting an array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) sorting and comparing numbers

[reduce function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) adding array elements and return the total of elements -  reduce()

[Array.from](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#specifications)