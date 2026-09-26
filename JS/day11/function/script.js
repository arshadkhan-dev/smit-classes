// function welcome(name) {
//   console.log(`Welcome to ${name}`);
// }
// // let name = prompt("Enter your name: ");
// // welcome(name);

// function add(a, b) {
//   let result = a + b;
//   console.log(result);
// }

// add(4, 5);

// function introduce(name, age, city) {
//   console.log(`My name is ${name}`);
//   console.log(`I am  ${age} years old.`);
//   console.log(`I am from ${city}`);
// }

// // default parameter

// function introduce(name, age, city = "Peshawar", address) {
//   console.log(`My name is ${name}`);
//   console.log(`I am  ${age} years old.`);
//   console.log(`I am from ${city}`);
//   console.log(`I live in ${address}`);
// }

// introduce("Arshad", 20, "lahore", "kohat road");

// function login(email, password, role = "buyer") {
//   console.log(`Email: ${email}`);
//   console.log(`Password: ${password}`);
//   console.log(`Role: ${role}`);
// }

// login("abc@gmail.com", 1234, "seller");

// // return statement in function

// function addNums(a, b) {
//   return a + b;
// }

// console.log(addNums(4, 6));

function addition(a, b, c) {
  let result = a + b + c;
  console.log(result);
  return result;
}

let value = addition(4, 6, 9);
console.log(value);

// function with conditions

function findResult(percent) {
  if (percent >= 50 && percent <= 100) {
    return "Pass";
  } else if (percent < 50 && percent > 0) {
    return "Fail";
  } else {
    return "Invalid Result";
  }
}

let result = findResult(56);

console.log(result);
