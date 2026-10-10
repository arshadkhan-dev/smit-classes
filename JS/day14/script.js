// stirng in JS

// split() : convert string to array
let skills = "html, css, javaScript, react";
let result = skills.split(",");
console.log(result);

let skills_2 = "html | css | javaScript | react";
let result_2 = skills_2.split("|");
console.log(result_2);

// join() : convert array to string
let message = ["Welcome", "to", "SMIT"];
let welcomeMessage = message.join(" ");
console.log(typeof welcomeMessage);
console.log(welcomeMessage);

// interview Question
// let word = prompt("Enter a String");
// let convertIntoArray = word.split("");

// let reverseArray = convertIntoArray.reverse();
// let finalString = reverseArray.join("");
// console.log(finalString);

// if (word == finalString) {
//   console.log("This string is palendrom");
// } else {
//   console.log("This string is not a palendrom");
// }

// at() support negative value
let firstName = "Arshad";
console.log(firstName.at(-1));

// charAt() does not support negative value
console.log(firstName.charAt(-4));
