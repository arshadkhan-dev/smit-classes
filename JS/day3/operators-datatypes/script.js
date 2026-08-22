// Operators (operator, operand)
// Operators (+,-,*,/ etc)
// operand (data on which we perform operations)
// Expressions (operators plus operand e.g 2+5)

// = (assignment operator)
// == (equility operator(don't check data type))
// === (equility operator (check data type))

// Comperison operators
// >
// <
// >=
// <=
// !=
// !== (check datatype)

let a = 10;
let b = 20;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// BODMAS (bracket, order, div, mul, add, sub)

let result = 2 * 4 + 5 / 7;
console.log(result);

// ++ increment
// -- decrement

//  postfix (2++)
//  prefix (++2)

let value = 3;
value++;
console.log(value);
console.log(++value);

let x = 5;
x = value + 2;
console.log(x);

value += 2;
console.log(value);

// javascript is a dynamic type language

// datatypes in JS

// Number datatypes

// let v = 40;
// let v = -3;
let v = 5.6;
// typeof() is a method used to check the datatype of a value
console.log(v);
console.log(typeof v);

// let name = "TEST";
let name = "TEST";
console.log(name);

console.log(typeof name);

// When to use single and double quotes
let sentence = "My name is 'TEST' ";
let sentence2 = 'My name is "Test" ';
console.log(sentence);
console.log(sentence2);

let firstName = "Arshad ";
let lastName = "Khan";

// String Concatination
let fullName = firstName + lastName;
console.log(fullName);

// String Concatination (+)
console.log("my full name is " + fullName);

// Template Literals
// Syntax: ${my name is ${firstName} ${lastName}

console.log(`my name is ${firstName} ${lastName}`);
