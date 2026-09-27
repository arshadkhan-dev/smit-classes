//Level 1:  Function Fundementals

// Q No.1

function welcomeUser(name) {
  return name;
}

let student = welcomeUser("Abdul");
console.log(`Welcome, ${student}!`);

// Q No. 2

function addNumbers(a, b) {
  return a + b;
}

let sum = addNumbers(10, 20);
console.log(sum);

// Q No. 3

function calculateTotal(price, quantity) {
  return price * quantity;
}

let total = calculateTotal(500, 3);
console.log(total);

// Q No. 4

function welcomeUser(name = "Guest") {
  return name;
}

let user = welcomeUser("Ali");
console.log("welcome" + user);
console.log(welcomeUser());

// Level 2
// Q No.5

function checkAge(age) {
  if (age >= 18) {
    return "You are an adult";
  } else if (age > 1 && age < 18) {
    return "you are a minor";
  } else {
    return "Wrong age entered";
  }
}

let checkage = checkAge(20);
console.log(checkage);

console.log(checkAge(15));
console.log(checkAge(-1));

// Q No.6

function checkResult(marks) {
  if (marks >= 50 && marks <= 100) {
    console.log("Pass");
  } else if (marks >= 1 && marks < 50) {
    console.log("Fail");
  } else {
    console.log("wrong number entered!");
  }
}

checkResult(80);
checkResult(40);
checkResult(101);
checkResult(-10);

// Q No.7

function checkNumber(number) {
  if (number % 2 == 0) {
    return "Even";
  } else if (number % 2 != 0) {
    return "Odd";
  }
}

let CheckNumber = checkNumber(7);
console.log(CheckNumber);
console.log(checkNumber(10));

// Q No. 8

function checkLogin(isLoggedIn) {
  if (isLoggedIn === true) {
    return "Welcome back!";
  } else {
    return "Please Login First";
  }
}

console.log(checkLogin(true));
console.log(checkLogin(false));

// Level 3

// Q No. 9

function calculateDiscount(price) {
  if (price >= 10000) {
    return price * (20 / 100);
  } else if (price >= 5000 && price <= 9999) {
    return price * (10 / 100);
  } else if (price < 5000 && price > 0) {
    return price;
  }
}

let discount = calculateDiscount(1000);
console.log(discount);

// Q No. 10

function calculateGrade(marks) {
  if (marks >= 90 && marks <= 100) {
    console.log("A");
  } else if (marks >= 80 && marks < 90) {
    console.log("B");
  } else if (marks >= 70 && marks < 80) {
    console.log("C");
  } else if (marks >= 60 && marks < 70) {
    console.log("D");
  } else if (marks >= 1 && marks < 60) {
    console.log("Fail");
  } else {
    console.log("Wrong marks entered");
  }
}

calculateGrade(100);
calculateGrade(80);
calculateGrade(101);
calculateGrade(30);
calculateGrade(-10);

// Q No. 11
function checkTemerature(temperature) {
  if (temperature >= 35) {
    console.log("It's Hot");
  } else if (temperature >= 25 && temperature < 35) {
    console.log("Weather is Normal");
  } else {
    console.log("It's Cold");
  }
}

checkTemerature(40);
checkTemerature(30);
checkTemerature(20);
checkTemerature(-10);

// Level 4

// Q No. 12

// let products = [
//   { productName: "laptop", price: 30000, quantity: 12 },
//   { productName: "keyboard", price: 1000, quantity: 4 },
// ];

function checkStock(productName, quantity) {
  if (quantity > 0) {
    return "Laptop is Available";
  } else {
    return `${productName} is out of stock`;
  }
}

// let checkProduct = checkStock("laptop", 3);
let checkProduct = checkStock("keyboard", 0);
console.log(checkProduct);

// Q No. 13

function calculateShipping(orderAmount) {
  if (orderAmount >= 5000) {
    return "Free Shipping";
  } else if (orderAmount < 5000 && orderAmount > 0) {
    return "250 Fee";
  }
}

// let shippingCost = calculateShipping(7000);
let shippingCost = calculateShipping(3000);
console.log(shippingCost);
