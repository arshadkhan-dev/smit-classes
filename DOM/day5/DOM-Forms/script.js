// let regForm = document.getElementById("regForm");

// regForm.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const { username, email, password } = regForm.elements;
//   if (username.value === "") {
//     alert("enter username");
//     return;
//   }
// if (password.value.length > 4 && password.value.length <= 8) {
//   alert("correct password formate");
// } else {
//   alert("enter password agian");
//   return;
// }

//   if (!password.value.trim() || !isStrongPassword(password.value)) {
//     alert(
//       "password must be atleast 8 characters long. must contain one uppercase, lowercase, one digit and one special character.",
//     );
//     return;
//   }

//   alert("registration Form successful");
//   regForm.reset();
// });

// function isStrongPassword(password) {
//   return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(password);
// }

// Radio button

// let check = document.querySelector("#btn");

// const RadioButtons = document.querySelectorAll('input[name = "language"]');

// let selectedLanguage;

// check.addEventListener("click", function (event) {
//   event.preventDefault();
//   for (let radioButton of RadioButtons) {
//     if (radioButton.checked) {
//       selectedLanguage = radioButton.value;
//       console.log(selectedLanguage);
//     }
//   }
// });

// for (let radioButton of RadioButtons) {
//   radioButton.addEventListener("change", function (event) {
//     alert(radioButton.value);
//   });
// }

// checkbox

// single value
// let checkbox = document.querySelector("#agree");
// checkbox.addEventListener("click", function () {
//   if (checkbox.checked) {
//     console.log("selected");
//   } else {
//     console.log("not selected");
//   }
// });

// multiple checkbox

// let btn = document.querySelector("#btn");
// let array = [];
// btn.addEventListener("click", function (e) {
//   e.preventDefault();
//   const checkboxes = document.querySelectorAll('input[name="language"]');

//   for (let checkbox of checkboxes) {
//     if (checkbox.checked) {
//       array.push(checkbox.value);
//     }
//   }
//   console.log(array);
// });

// select

let selectedElement = document.getElementById("cities");
console.log(selectedElement.selectedIndex);
console.log(selectedElement.value);
console.log(selectedElement.multiple);

let btn = document.getElementById("btn");
btn.addEventListener("click", function (e) {
  e.preventDefault();
  let selectedCity =
    selectedElement.options[selectedElement.selectedIndex].text;
  alert(selectedCity);
});
