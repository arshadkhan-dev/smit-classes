const products = [
  {
    id: 1,
    name: "laptop",
    price: 12000,
    category: "electronics",
    inStock: true,
  },
  {
    id: 2,
    name: "Mouse",
    price: 1500,
    category: "accessories",
    inStock: true,
  },
  {
    id: 3,
    name: "Keyboard",
    price: 3500,
    category: "accessories",
    inStock: false,
  },
  {
    id: 4,
    name: "Monitor",
    price: 45000,
    category: "electronics",
    inStock: true,
  },
  {
    id: 5,
    name: "HeadPhones",
    price: 5000,
    category: "accessories",
    inStock: true,
  },
];

// forEach()

// products.forEach((product) => {
//   console.log(product.name);
// });

// Map()

let productNames = products.map((product) => {
  return product.name;
});

// let productNames = products.map((product) => product.name);
// console.log(productNames);

// filter()

let unexpensiveProduct = products.filter((product) => {
  return product.price < 5000;
});

// console.log(unexpensiveProduct);

// find()

let targetItem = products.find((product) => {
  return product.id === 3;
});

// console.log(targetItem);

// some()

let hasOutofStock = products.some((product) => {
  return product.inStock === false;
});

// console.log(hasOutofStock);

let expensiveProductExists = products.some((product) => {
  return product.price > 300000;
});

// console.log(expensiveProductExists);

// every()

const allProductAvailable = products.every((product) => {
  return product.inStock === true;
});

// console.log(allProductAvailable);

// reduce()

let totalPrice = products.reduce((total, product) => {
  return total + product.price;
}, 0);

// console.log(totalPrice);

// sort()

const numbers = [5, 1, 7, 3, 8, 9];

// asscending

numbers.sort((firstNum, secNum) => {
  return firstNum - secNum;
});

// console.log(numbers);

// descending

let descendingNums = numbers.sort((firstNum, secNum) => {
  return secNum - firstNum;
});

// console.log(descendingNums);

let sortedPrice = [...products].sort((a, b) => {
  return a.price - b.price;
});

// sortedPrice.map((product) => {
//   console.log(product.price);
// });

// Home Work

// products
//   .filter((product) => {
//     return product.inStock === true;
//   })
//   .forEach((product) => {
//     console.log(product.name);
//   });

// inStockProduct.forEach((product) => {
//   console.log(product.name);
// });

let newProductArray = products.map((product) => {
  return { item: product.name, price: product.price };
});

// console.log(newProductArray);

let targetItemthroughFind = products.find((product) => {
  return product.id === 4;
});

// console.log(targetItemthroughFind);

let itemOutofStock = products.some((product) => {
  return product.inStock === false;
});

// console.log(itemOutofStock);

let isPricePositive = products.every((product) => {
  return product.price > 0;
});

console.log(isPricePositive);

let totalProductPrice = products.reduce((price, product) => {
  return price + product.price;
}, 0);

// console.log(totalProductPrice);

let arrangedProduct = products.sort((a, b) => {
  return a.price - b.price;
});

console.log(arrangedProduct);
