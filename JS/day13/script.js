// String in JS

// There are three ways to define a string. '', "", ``
// strings are immutable
// name[3] = "S"; wrong

let name = "Arshad";
let city = "Peshawar";
let message = `Welcome to JavaScript`;

let detail_1 = 'i learn "javascript"';
let detail_2 = "i learn 'javaScript'";
let detail_3 = `i learn "javaScript"`;

// length
console.log(name.length);

// index
console.log(name[3]);

// slice
console.log(detail_1.slice(2, 7));
console.log(detail_1.slice(-3));
// support negative indexing

// substring
console.log(detail_1.substring(2, 7));
console.log(detail_1.substring(-5));
// does not support negative indexing

// trim: remove start and last free space
let word = " Ahmad is     a nice student ";
console.log(word);
console.log(word.trim());

// practice

// let username = prompt("Enter username: ").trim();
// if (username === "Abdul") {
//   console.log(true);
// } else {
//   console.log("false");
// }

// let username = prompt("Enter username: ").trimStart();
// if (username === "Abdul") {
//   console.log(true);
// } else {
//   console.log("false");
// }

// let username = prompt("Enter username: ").trimEnd();
// if (username === "Abdul") {
//   console.log(true);
// } else {
//   console.log("false");
// }

// includes

let email = "abc@gmail.com";
if (email.includes("@")) {
  console.log("Correct Email");
} else {
  console.log("Incorrect Email");
}

// startWith():

const url = "https://example.com";
console.log(url.startsWith("https"));

// endsWith

const file = "profile.png";
console.log(file.endsWith(".png"));

// indexOf

let message_2 = "Hello JavaScript";
console.log(message_2.indexOf("JavaScript"));

// if string does not finds, it return -1
console.log(message_2.indexOf("phyton"));

// lastIndexOf

let message_3 = "hello hello";
console.log(message_3.lastIndexOf("hello"));

// replace()

let oldWord = "I like JavaScript";
let newWord = message.replace("JavaScript", "React");
console.log(newWord);

// replaceAll()

let message_4 = "JS is a computer language. I like JS.";

console.log(message_4.replaceAll("JS", "Java"));
