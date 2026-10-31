// let btn_1 = document.getElementById("btn1");

// // btn_1.onclick = () => {
// //   console.log("button clicked");
// // };

// let box = document.querySelector("div");
// // box.onmouseover = (e) => {
// //   console.log(e);
// //   console.log(e.target);
// //   console.log(e.type);
// //   console.log(e.clientX);
// //   console.log(e.clientY);
// // };

// // // inline and js event handling me js event handling ki priority zayada he

// // // ak bar event ko use kar ke dobara hum use nahi kar MediaStreamTrackEvent, if we do, it will override

// // best approach

// btn_1.addEventListener("click", (e) => {
//   console.log("button clicked 1");
// });

// btn_1.addEventListener("click", (e) => {
//   console.log("button clicked 2");
// });

// let handler = () => {
//   console.log("button clicked 3");
// };

// btn_1.addEventListener("click", handler);

// btn_1.addEventListener("click", (e) => {
//   console.log("button clicked 4");
// });

// btn_1.removeEventListener("click", handler);

// let body = document.querySelector("body");
// let mode = "light";

// btn_1.addEventListener("click", () => {
//   if (mode === "light") {
//     body.style.backgroundColor = "black";
//     mode = "dark";
//   } else {
//     body.style.backgroundColor = "white";
//     mode = "light";
//   }
// });

// smit class work

// DOM Event: an event is an action or occurance that the browser detects while a webpage is running.

// handling a click event

let btn = document.getElementById("btn");
let para = document.getElementById("para");

btn.addEventListener("click", function () {
  console.log("button clicked");
  para.textContent = "button clickd";
});

// the addEventListener() method attaches a function that runs when a specified event occurs.

// handling input event

let inputField = document.querySelector("input");
// let message = document.querySelector("#message");

// inputField.addEventListener("input", function () {
//   message.textContent = inputField.value;
// });

// example: character count
// let count = document.querySelector("#message");
// let bio = document.querySelector("#bio");
// bio.addEventListener("input", function () {
//   count.textContent = `Characters: ${bio.value.length}`;
// });

// handling change event

// let course = document.querySelector("#course");
// let selectedCourse = document.querySelector("#selectedCourse");

// course.addEventListener("change", function () {
//   selectedCourse.textContent = `Selected Course: ${course.value}`;
// });

// handling submit event

// let registrationForm = document.querySelector("#registration");
// let result = document.querySelector("#result");
// let user = document.querySelector("#user");
// registrationForm.addEventListener("submit", function (event) {
//   event.preventDefault();
//   result.textContent = `Welcome ${user.value}`;
// });
