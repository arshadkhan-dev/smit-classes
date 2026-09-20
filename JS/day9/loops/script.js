// for loop in JS
// used for range
// for (let i = 1; i <= 10; i++) {
//   console.log("Arshad Khan");
// }

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// let count = 0;
// let evenNums = [];
// for (let i = 15; i < 45; i++) {
//   if (i % 2 == 0) {
//     evenNums.push(i);
//   }
// }

// console.log(evenNums);
// console.log(evenNums.length);

// for of loop: helpful when working with arrays.

// let fruits = ["mango", "Apple", "banana", "grapes"];

// let input = prompt("enter fruit name: ");
// let index;
// for (const fruit of fruits) {
//   if (input === fruit) {
//     console.log("Yes Available: " + fruit);
//   }
// }

// for in loop
// The JavaScript for...in loop is used to iterate over the keys (property names) of an object.

// const user = {
//   name: "Alex",
//   age: 28,
//   role: "Developer",
// };

// for (const key in user) {
//   //   console.log(`${key}: ${user[key]}`);
//   console.log(user[key]);
// }

let students = {
  name: "Test",
  id: 123,
  age: 20,
  grade: 8,
};

for (let key in students) {
  console.log(key + ": " + students[key]);
}
