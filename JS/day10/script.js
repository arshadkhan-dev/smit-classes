// break and continue in loop

// break : break the loop after finding the exact element.

// let students = ["Ali", "Ahmad", "Kamran", "Jalil"];
// let input = prompt("Enter Student Name: ");
// for (let student of students) {
//   if (input === student) {
//     console.log(student);
//     break;
//   }
//   console.log(student);
// }

// continue: skip the element.

for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    continue;
  }
  console.log(i);
}
