// // local storage and session storage
// // local storage is parmanent
// // tab wala data session storage me para howa hota he
// // we should not keep our data in local storage for long.
// //

// // store data in local storage
// localStorage.setItem("username", "arshadkhan");

// // get data from local storage
// console.log(localStorage.getItem("username"));

// // update local storage data
// localStorage.setItem("username", "Umar");

// // delete storage value
// let deleteBtn = document.getElementById("deleteBtn");
// deleteBtn.addEventListener("click", function () {
//   localStorage.removeItem("username");
// });

// // clear local storage data
// let clearAll = document.getElementById("clearBtn");
// clearAll.addEventListener("click", function () {
//   localStorage.clear();
// });

// let userDetails = [
//   {
//     name: "Kamran",
//     age: 24,
//     city: "Peshawar",
//   },
// ];

// localStorage.setItem("userData", JSON.stringify(userDetails));

// console.log(JSON.parse(localStorage.getItem("userData")));
