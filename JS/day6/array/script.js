// Array in JS
// Non-primitive data type

// let student1 = "ahmad";
// let student2 = "ali";
// let student3 = "kamran";
// let student4 = "amjid";
// let student5 = "farooq";

// Index (positions of elements)
// Element (values in array)

let students = ["ali", "kamran", "ahmad"];
console.log(students);

console.log(students.length);
console.log(students[0]);
console.log(students[students.length - 1]);

// adding Element in an array(End)
students.push("Arshad");
console.log(students);

// removing element from an array (End)
students.pop();
console.log(students);

// adding Element in an array(Start)
students.unshift("Arshad");
console.log(students);

// removing element from an array ( from Start)
students.shift();
console.log(students);

// slice() (it returns a new array)
// array-name.slice(start-indexedDB,ending-index)
// starting-index : included
// ending-index :  excluded

// console.log(students.slice(0, 2));

// replace in an array
students[2] = "Kamran";
console.log(students);

students[10] = "Hello";
console.log(students);

// Splice method in an array
// students.splice(starting_index, delete_count, add_element|replace_element)
students.splice(3, 7);
console.log(students);

students.splice(2, 1, "Afridi");
console.log(students);
