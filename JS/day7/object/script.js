// In JavaScript, an object is a standalone data structure that stores collections of data as key-value pairs. Unlike primitive data types (like strings or numbers) which hold a single value, objects can group together related data and behaviors.

// You can access object properties in two ways:

// Dot notation
// Bracket notation

// student details
// name "test"
// age 22
// address peshawar

// let student_details = {
//   // key :value
//   name: "arshad",
//   age: 22,
//   marks: 95,
//   grade: 14,
//   skills: ["html", "css", "js"],
//   address: {
//     city: "peshawar",
//     street: "12344",
//     country: "Pakistan",
//   },
// };

// console.log(student_details);
// console.log(student_details.name);
// console.log(student_details["addrss"]);

// // adding key value in an object
// student_details.id = 123;
// console.log(student_details);

// // changing value of a key
// student_details.age = 21;
// console.log(student_details);

// console.log(student_details.skills[1]);
// delete student_details.age;

// console.log(student_details);

// console.log(student_details.address.country);

// class Task

let Product = {
  product_name: "RealMe Mobile",
  max_price: 100000,
  min_price: 30000,
  categories: ["A Version", "B Version", "C version"],
  discount: "10%",
  Warrenty: [
    {
      Version: "Version A",
      warrenty: "2 years",
    },
    {
      Version: "Version B",
      warrenty: "3 years",
    },
    {
      Version: "Version C",
      warrenty: "4 years",
    },
  ],
};

console.log(Product);

console.log(Product.product_name);
console.log(Product.Warrenty[0].warrenty);
console.log(Product.categories[2]);

delete Product.Warrenty;
console.log(Product);

const person = new Object({
  name: "Kamran",
  age: 20,
  addrss: "Peshawar",
  job: function () {
    console.log("He is a student");
    return this.name;
  },
});

console.log(person.job());
