// Q No. 1

for (let i = 1; i <= 20; i++) {
  console.log(i);
}

// Q No. 2

for (let i = 1; i <= 50; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// Q No. 3

for (let i = 10; i > 0; i--) {
  console.log(i);
}
console.log("Happy New Year");

// Q No. 4

let number = prompt("Enter a number");
for (let i = 1; i <= 10; i++) {
  console.log(`${number} * ${i} = ${number * i}`);
}

// Q No. 5

let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}

console.log("The Sum is: " + sum);

// Q No. 6

let password = "1234";
let InputPassword = prompt("Enter Password");
while (true) {
  if (password != InputPassword) {
    InputPassword = prompt("Enter Password");
  } else {
    console.log("Correct Passward Entered.");
    break;
  }
}

// Q No. 7

let positiveNumber = prompt("Enter a Number");

while (true) {
  if (positiveNumber < 1) {
    positiveNumber = prompt("Enter a Number");
  } else {
    console.log("Postive Number Entered: Thank You");
    break;
  }
}
