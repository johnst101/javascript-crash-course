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

let bool = '1' == 1;
let bool2 = '1' === 1;

console.log(bool);
console.log(bool2);

// Conditions

let subscribed = false
let loggedIn = true

if (subscribed === true) {
  console.log('show the video')
}
else if (loggedIn === true) {
  console.log('tell the user to upgrade their subscription')
}
else {
  console.log('tell user to log into account')
}

// Practice Conditions

let cash = 100;
let price = 200;
let change = cash - price;

if (change > 0) {
  console.log(`you paid extra - here's ${change} dollars change`)
}
else if (cash === price) {
  console.log("you paid the exact amount, have a nice day!")
}
else {
  console.log(`not enough money - you still owe ${change * -1} dollars`)
}


// Ternary Operators

let hot = true

hot ? console.log('weather is hot outside') : console.log('weather is cold outside')

let subscribe = false;
let logIn = true;

let str = subscribe || logIn ? 'show the video' : 'hide the video';
console.log(str);

let money = 50;
let cost = 40;
let isStoreOpen = true;

let stri = isStoreOpen && money >= cost ? 'give receipt' : 'do not give receipt';
console.log(stri);