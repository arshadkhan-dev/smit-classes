// // Destructuring: Allows us to extract value from arrays or properties from objects and assign them to variables.

// // Array Destructring
// let colors = ["red", "green", "blue"];

// let [first, second, third] = colors;
// // console.log(first);
// // console.log(second);
// // console.log(third);

// // object destructring

// const userDetails = {
//   name: "arshad",
//   age: 20,
//   id: 123,
//   gender: "male",
// };

// const { name, age } = userDetails;

// // console.log(name);
// // console.log(age);

// // Allias
// const { name: firstName, age: userAge } = {
//   name: "ali",
//   age: 20,
//   id: 123,
//   gender: "male",
// };

// // console.log(firstName);
// // console.log(userAge);

// // nested Destructuring

// // const student = {
// //   studentName: "sara",
// //   address: { city: "peshawar", country: "Pakistan" },
// // };

// // const {
// //   studentName,
// //   address: { city, country },
// // } = student;

// // console.log(studentName);
// // console.log(city);

// // spread operator

// // spread operator Array

// const frontend = ["HTML", "CSS", "JS"];
// const backend = ["Node.js", "Express"];

// const fullstack = [...frontend, ...backend];

// // console.log(fullstack);
// const original = [1, 3, 4, 5, 6];
// // console.log(original);

// // let copy = original;

// // console.log(copy);

// // copy.push(40);
// // console.log(original);
// // console.log(copy);

// const copy = [...original];
// // console.log(copy);
// // copy.push(50);
// // console.log(original);
// // console.log(copy);

// // Copy and update object
// const user = {
//   name: "ahmad",
//   role: "student",
// };

// const updatedUser = {
//   ...user,
//   role: "developer",
// };

// // console.log(updatedUser);

// // Rest Parameters(...): collect multiple function arguements into a single array

// function calculateTotal(...prices) {
//   console.log(prices);
//   let totalPrice = 0;
//   for (let price of prices) {
//     totalPrice = totalPrice + price;
//   }
//   console.log(totalPrice);
// }

// calculateTotal(10, 50, 470, 310, 80);

// // Homework

const student = {
  name: "Ali",
  age: 21,
  city: "Peshawar",
  skills: ["HTML", "CSS", "JavaScript"],
};

let { name, age, city } = student;
console.log(name);
console.log(age);
console.log(city);

let [firstSkill] = student.skills;
console.log(firstSkill);

let newSkills = [...student.skills, "react"];
console.log(newSkills);
