// Timer: give delay to a function and execute.
// setTimeout():

// syntax
// setTimeout(Callback,delay)

// setTimeout(function () {
//   console.log("run after 5 sec");
// }, 5000);

// setTimeout(() => {
//   console.log("run after 0 sec");
// }, 0);
// console.log("second message");

// setTimeout(() => {
//   console.log("run after 3 sec");
// }, 3000);
// console.log("third message");

// let xyz = setTimeout(() => {
//   console.log("run after 7 sec");
// }, 7000);

// let clearTimeOutBtn = document.getElementById("btn");

// clearTimeOutBtn.addEventListener("click", () => {
//   clearTimeout(xyz);
// });

// syncronous block the code
// asynchronous does not block the code

// clearTimeout()

// setInterval()
// syntax
// setInterval(callback, delay)

// let ClearInterval = setInterval(() => {
//   console.log("hello world");
// }, 1000);

// let BTN = document.getElementById("btn").addEventListener("click", () => {
//   clearInterval(ClearInterval);
// });

// clearInterval()

// count down

// let count = 10;
// let counter = setInterval(() => {
//   console.log(count);
//   count--;

//   if (count < 0) {
//     clearInterval(counter);
//     console.log("Time is UP!");
//   }
// }, 1000);
