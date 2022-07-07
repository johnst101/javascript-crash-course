/**
 * Converting Temperatures
 *
 * Celsius-to-Fahrenheit formula:
 *
 *  F = C x 1.8 + 32
 */

let celsius = 10;
let fahrenheit = celsius * 1.8 + 32;

console.log(fahrenheit);

// EQUALITY TEST

let bool = "1" == 1;
let bool2 = "1" === 1;

console.log(bool);
console.log(bool2);

// Conditions

let subscribed = false;
let loggedIn = true;

if (subscribed === true) {
  console.log("show the video");
} else if (loggedIn === true) {
  console.log("tell the user to upgrade their subscription");
} else {
  console.log("tell user to log into account");
}

// Practice Conditions

let cash = 100;
let price = 200;
let change = cash - price;

if (change > 0) {
  console.log(`you paid extra - here's ${change} dollars change`);
} else if (cash === price) {
  console.log("you paid the exact amount, have a nice day!");
} else {
  console.log(`not enough money - you still owe ${change * -1} dollars`);
}

// Ternary Operators

let hot = true;

hot
  ? console.log("weather is hot outside")
  : console.log("weather is cold outside");

let subscribe = false;
let logIn = true;

let str = subscribe || logIn ? "show the video" : "hide the video";
console.log(str);

let money = 50;
let cost = 40;
let isStoreOpen = true;

let stri =
  isStoreOpen && money >= cost ? "give receipt" : "do not give receipt";
console.log(stri);

// Loops

// let count = 1;

// while (count <= 100) {
//   console.log(count);
//   count = count + 1;
// }

// for (let i = 0; i < 3; i++) {
//   console.log(i)
// }

/**Wrire a for-loop that loops through  1 to 20
 * If the number is divisible by 3, print "Frontend"
 * If the number is divisible by 5, print "Simplified"
 * If the number is divisible by 3 and 5, print "Frontend Simplified"
 * If the number is *not* divisible by eithe 3 or 5, print the number
 */

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} -> Frontend Simplified`);
  } else if (i % 3 === 0) {
    console.log(`${i} -> Frontend`);
  } else if (i % 5 === 0) {
    console.log(`${i} -> Simplified`);
  } else {
    console.log(`${i} -> ${i}`);
  }
}

// Printout every character from the string: "Frontend Simplified"

const string = "Frontend Simplified";

for (let i = 0; i < string.length; i++) {
  console.log(string[i]);
}

// Functions

// Function definition
function welcomePersonTToFES(firstName, lastName) {
  console.log(`Welcome to FES, ${firstName} ${lastName}`);
}

// Call the function
welcomePersonTToFES("Tyler", "Johnson");
welcomePersonTToFES("David", "Bragg");
welcomePersonTToFES("Zen", "Doe");

/** Create a function that converts Celsius to Fahrenheit
 *
 * Celsius to Fahrenheit formula:
 *  F = C x  1.8 + 32
 *
 */

function celsiusToFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}

console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(10));
console.log(celsiusToFahrenheit(30));

// Arrow Function
const convertCelsiusToFahrenheit = (celsius) => {
  return celsius * 1.8 + 32;
};

console.log(convertCelsiusToFahrenheit(0));

// Arrays

let arr = [20, 30, 40, 50, 100];

// first element of array
console.log(arr[0]);

// last element of array
console.log(arr[arr.length - 1]);

arr.push(200);

// array filter method
let newArr = arr.filter((element) => {
  console.log(element);
  if (element < 50) {
    return true;
  }
});

console.log(newArr);

// same thing as the array filter method above just simpler
let newerArr = arr.filter((element) => element < 50);

console.log(newerArr);

console.log(arr);

/**
 * Filter out all the 'Fail' elements in an array
 */

let grades = ["A+", "A", "FAIL"];

let goodGrades = grades.filter((element) => {
  if (element !== "FAIL") {
    return true;
  }
});

console.log(goodGrades);

let passGrades = grades.filter((element) => element !== "FAIL");

console.log(passGrades);

// Loop over every element in an array

let loopGrades = ["A+", "A", "FAIL"];

let goodLoopGrades = [];

for (let i = 0; i < loopGrades.length; ++i) {
  if (loopGrades[i] !== "FAIL") {
    goodLoopGrades.push(loopGrades[i]);
  }
}

console.log(goodLoopGrades);

// .map method (accepts callback) used to turn the current element into whatever we return

let array = [1, 4, 9, 16];

let newArray = array.map((element) => undefined);

console.log(newArray);

/**
 * Turn each element in an array of dollars into cents
 */

let dollars = [1, 5, 10, 3];

let cents = dollars.map((element) => element * 100);

console.log(cents);

// Same question as above without using the map method

let newDollars = [1, 5, 10, 3];

let newCents = [];

for (let i = 0; i < newDollars.length; ++i) {
  newCents.push(newDollars[i] * 100);
}

console.log(newCents);

// Objects

let users = [
  {
    userFirst: "Tyler",
    email: "tyler@example.com",
    password: "test123",
    subscriptionStatus: "VIP",
    discordId: "Tyler Johnson#001",
    lessonsCompleted: [0, 1],
  },
  {
    userFirst: "David",
    email: "david@example.com",
    password: "test135",
    subscriptionStatus: "VIP",
    discordId: "David Bragg#001",
    lessonsCompleted: [0, 1, 2, 3, 4],
  },
];

function login(email, password) {
  for (let i = 0; i < users.length; ++i) {
    if (users[i].email === email) {
      console.log(users[i]);
      if (users[i].password === password) {
        console.log("log the user in - the deatils are correct");
      } else {
        console.log("password is incorrect - try again");
      }
      return;
    }
  }
  console.log("could not find an email that matches");
}

login("tyler@example.com", "test123");

/**
 * Create a register funciton that accepts:
 * - userFirst
 * - email
 * - password
 * - subscriptionStatus
 * - discordId
 * - lessonsCompleted
 *
 * Inside your register function:
 * 1. Create a user object
 * 2. Push this user object onto the 'users' array
 */

function register(user) {
  users.push(user);
}

register({
  userFirst: "John", 
  email: "johndoe@example.com", 
  password: "test", 
  subscriptionStatus: "Normal", 
  discordId: "John Doe#002", 
  lessonsCompleted: []
});

console.log(users);

// Document Object Model
// First way of accessing an element
// console.log(document.querySelector('#title'))

// // Second way of accessing an element (only if the element has an id)
// console.log(document.getElementById('title'))

// // how to change html with DOM (used for dynamically showing account details on a page)
// document.querySelector('#title').innerHTML = 'Frontend Simplified'
// document.querySelector('#title').innerHTML += ' Tyler Johnson'

// //Change CSS
// document.querySelector('#title').style.color = 'green'

// //Changing element style by clicking buttons
// function changeTitleToRed() {
//   document.querySelector('#title').style.color = 'red'
// }

function toggleDarkMode() {
  document.querySelector('body').classList.toggle("dark-theme")
}