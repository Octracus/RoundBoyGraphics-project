let userInput = prompt("Enter a value ");

alert(userInput);

//Read on confirm in Javascript

// Condition statements
//if Statement
//open a prompt asking How much the person has//
let userPrice = prompt("How much do you have?");
//If userPrice is greater than or equal to 1000, give an alert//
if (userPrice >= 1000) {
  alert("Have a nice purchase, baby");
}
//if user price is less than or equal to 1000, print nrew Price which is the difference and print the message//
if (userPrice < 1000) {
  let newPrice = 1000 - userPrice;
  alert("Go and bring more money or just top up with " + newPrice);
  console.log(newPrice);
}

//if else//
let UserInput = prompt("Do you want to pay with 1. Momo 2. PayPal 3. Cash");
if (userInput == 1) {
  alert("Pay with with Momo");
} else if (userInput == 2) {
  alert("Pay with PayPal");
} else {
  alert("How else do you want to pay?");
}

//Array
let name = ["Kofi", "John"];
console.log(name[1]);

let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(digits);

let userAge = prompt("How old are you?");
console.log(userAge);
if (userAge >= 0 && userAge <= 17) {
  alert("You are too young");
} else if (userAge >= 18 && userAge < 61) {
  alert("Working class");
} else if (userAge == null || userAge == " ") {
  alert("null");
} else {
  alert("Try again");
}

//for loop//
for (let number = 1; number < 26; number++) {
  console.log(number);
}
for (let number = 25; number > 0; --number) {
  console.log(number);
}
///Password check
let password = "";
console.log(passsword.length);
let userPass = prompt("Enter your password");

for (let pass = 0; pass < password.length; pass++) {
  if (password == userPass) {
    break;
  } else {
    console.log(userPass);
    userPass = propmt("Wrong password. Try again");
  }
}

//Functions
//Function to add two numbers
function addnumbers(a, b) {
  return a + b;
}
let addnumbers = (2, 3);
console.log(addnumbers);

//or
function addnumbers(a, b) {
  alert(a + b);
}
addnumbers(2, 3);

let userName = prompt("What is your name?")
function nameDisplay(firstname, lastname){
  alert(firstname, lastname, "This is your computer")
}
nameDisplay(userName)