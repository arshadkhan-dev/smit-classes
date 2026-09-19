// loop:
// it execute a same block of code repeatedly based on a condition

// while loop

// while(condition) {
//     // code
//     // increment
// }

// let i = 1;

// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// let password = false;
// let attempts = 3;
// let i = 1;
// while (!password && i <= attempts) {
//   console.log("Try again");
//   i++;
// }

// do while loop

// let i = 1;
// let j = 1;
// do {
//   console.log(`5 * ${j} = ${i * 5}`);
//   i++;
//   j++;
// } while (i <= 10);

let i = 5;
let j = 1;
do {
  console.log("5 * " + j + " = " + i);
  i += 5;
  j++;
} while (i <= 50 && j <= 10);
