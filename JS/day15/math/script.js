// // function that is wriiten inside a class, we call it method

// // Math Date, Time

// // Math Object: use for mathematical calculations

// // Math.round()
// console.log(Math.round(4.3));
// console.log(Math.round(4.8));
// console.log(Math.round(4.5));

// // Math.floor()  rounds a number down to the nearest intiger

// console.log(Math.floor(4.9));
// console.log(Math.floor(4.1));
// console.log(Math.floor(-4.1));

// // Math.ceil() rounds a number up to the nearest integer
// console.log(Math.ceil(4.1));
// console.log(Math.ceil(4.9));
// console.log(Math.ceil(-4.1));

// // Math.trunc() remove the decimal part
// console.log(Math.trunc(4.2));
// console.log(Math.trunc(4.8));
// console.log(Math.trunc(-4.2));

// // Math.max(): largest
// console.log(Math.max(1, 4, 7, 9));

// // Math.min(): smallest
// console.log(Math.min(1, 4, 7, 9));

// // Math.sqrt()
// console.log(Math.sqrt(25));
// console.log(Math.sqrt(10));

// // Math.pow()
// console.log(Math.pow(2, 3));

// // Modern alternative
// console.log(2 ** 3);

// // Math.abs()  make a number postive
// console.log(Math.abs(4.5));
// console.log(Math.abs(-4.5));
// console.log(Math.abs(-4));

// // Math.random()
// console.log(Math.random());
// console.log(Math.trunc(Math.random() * 10) + 1);

// function generateRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// console.log(generateRandomNumber(10, 20));

// // Math.PI()

// console.log(Math.PI);

// JavaScript Date Object

const now = new Date();
console.log(now);

console.log(now.getDate());
console.log(now.getDay());
console.log(now.getFullYear());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getMonth());
console.log(now.getTime());
console.log(`${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()}`);
console.log(now.getSeconds());
// create a specific date

let date1 = new Date("2026-08-08");
console.log(date1);
console.log(date1.getFullYear());

let date2 = "2026-08-08";
console.log(date2);

// format date and time
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString());

// Display a friendly date
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

console.log(now.toLocaleDateString("en-PK", options));

// compare two dates
let date3 = new Date("2025-10-11");
let date4 = new Date("2026-10-11");

console.log(date3 < date4);
console.log(date3 > date4);

// calculate the difference between dates
let startDate = new Date("2006-01-01");
let endDate = new Date("2026-10-11");

let differences = endDate - startDate;
console.log(differences);
console.log(1000 * 60 * 60 * 24);
const days = differences / (1000 * 60 * 60 * 24);
console.log(days);
console.log(Math.trunc(days / 365));
