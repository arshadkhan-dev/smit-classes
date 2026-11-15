// // Navigation between elements

// let card = document.getElementById("card");

// // Parent
// let title = document.getElementById("title");

// console.log(title.parentElement);
// title.parentElement.style.backgroundColor = "yellow";

// // Children -- accessing child elements

// console.log(card.children);
// console.log(card.children.length);
// console.log(card.children[0]);
// console.log(card.children[1]);
// console.log(card.children[2]);

// // firstElementChild and lastElementChild
// console.log(card.firstElementChild);
// console.log(card.lastElementChild);

// // nextElementSibling and previousElementSibling

// let para = document.getElementById("para");
// console.log(para.nextElementSibling);
// console.log(para.previousElementSibling);

// // closest() -- Finding the nearest matching ancestor

// console.log(title.closest("#card"));

// real world scenario question practice

let products = document.querySelector(".products");
let result = document.querySelector("#result");

products.addEventListener("click", function (event) {
  if (!event.target.matches(".buyBtn")) {
    return;
  }
  let card = event.target.closest(".product-card");
  console.log(card);
  if (!card) {
    return;
  }

  const name = card.querySelector("h2").textContent;
  const price = card.querySelector(".price").textContent;
  result.textContent = `Selected: ${name} ${price}`;
});

let price = document.querySelector(".price");

console.log(price.parentElement);
console.log(price.closest(".products"));
