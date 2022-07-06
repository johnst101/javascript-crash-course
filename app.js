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