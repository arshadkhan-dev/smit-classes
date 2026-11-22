// Event Bubbling

// let outerBox = document.querySelector("#outer");
// let innerBox = document.querySelector("#inner");

// outerBox.addEventListener("click", function () {
//   console.log("outer");
// });

// innerBox.addEventListener("click", function (event) {
//   event.stopPropagation();
//   console.log("inner");
// });

// Event Capturing
// let outerBox = document.querySelector("#outer");
// let innerBox = document.querySelector("#inner");

// outerBox.addEventListener(
//   "click",
//   function () {
//     console.log("outer");
//   },
//   true,
// );

// innerBox.addEventListener("click", function () {
//   console.log("inner");
// });

// event.target and event.currentTarget
// let outerBox = document.querySelector("#outer");

// outerBox.addEventListener("click", function (event) {
//   console.log(event.target);
//   console.log(event.currentTarget);
// });

// stop event Propagation: see in above example

// remove an event listener

let myBtn = document.getElementById("myBtn");
let removeEventLr = document.getElementById("removeBtn");

function handleClick() {
  console.log("click handle event");
}
myBtn.addEventListener("click", handleClick);

removeEventLr.addEventListener("click", function () {
  myBtn.removeEventListener("click", handleClick);
});
