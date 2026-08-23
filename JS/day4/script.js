// Data Types
// Types
// Premitive (it holds single value) and Non-premitive (it holds multiple values)

// Premitive Data Types
// Number
// String
// Boolean
// Undefined
// null
// Symbol

let a = 10;
console.log(typeof a);

let name = "Test";
console.log(typeof name);

let isLogin = true;
console.log(typeof isLogin);

let x;
console.log(typeof x);

let y = " ";
console.log(typeof y);

let s = null;
console.log(s);
console.log(typeof s);

// Symbol data type shows uniqueness, it generate unique values, can't change

let d = Symbol("hello");
console.log(d);
console.log(typeof d);

let e = Symbol("hello");
console.log(typeof e);

console.log(d == e);

// Comperison operators
// >
// <
// >=
// <=
// !=
// !== (check datatype)

// let value1 = 40;
// let value2 = 50;

// console.log(value1 == value2);

// let value1 = 40;
// let value2 = "40";
// console.log(value1 === value2);

// let value1 = 40;
// let value2 = "40";
// console.log(value1 === value2);

// let value1 = 40;
// let value2 = 50;
// console.log(value1 > value2);

// let value1 = 40;
// let value2 = 50;
// console.log(value1 >= value2);

// let value1 = 40;
// let value2 = 50;
// console.log(value1 < value2);

// let value1 = 40;
// let value2 = 50;
// console.log(value1 <= value2);

// let value1 = 40;
// let value2 = 50;
// console.log(value1 != value2);

// let value1 = 40;
// let value2 = 50;
// console.log(value1 !== value2);

// Logical Operators

// logical &&

// T T = T
// T F = F
// F T = F
// F F = F

let email = "abc@gmail.com";
let password = "asdf123";

console.log(email === "abc@gmail.com" && password === "asdf123");

// logical ||

// T T = T
// T F = T
// F T = T
// F F = F

let age = 20;
let position = "webDeveloper";
console.log(age > 18 || position === "appDeveloper");

// Logical NOT
// Inverts the boolean value (turns true to false and vice versa).
console.log(!(9 === 4));
console.log(!!(9 === 4));

// Falsy values: false, 0, -0, "" (empty string), null, undefined, and NaN.
// Truthy values: Everything else (including [], {}, "0", and true)
