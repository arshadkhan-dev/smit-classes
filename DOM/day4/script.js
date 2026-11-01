// create element

// let container = document.getElementById("container");
// let heading = document.createElement("h1");
// heading.textContent = "Hello DOM";
// heading.classList.add("heading1");

// appendChild

// container.appendChild(heading);

// append

// container.append(heading, "This is heading 1");

// let students = ["arshad", "bilal", "umar"];
// let lists = document.getElementById("lists");

// for (let stu of students) {
//   let student = document.createElement("li");
//   student.textContent = stu;
//   lists.appendChild(student);
// }

// todo app

let inputValue = document.getElementById("inputValue");
let addBtn = document.getElementById("btn");
let list = document.getElementById("list");

addBtn.addEventListener("click", function () {
  let listItem = document.createElement("li");
  let deleteBtn = document.createElement("button");
  let nameText = document.createElement("span");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("removeBtn");
  nameText.textContent = inputValue.value;
  listItem.classList.add("listStyle");
  // list.classList.add("listParent");
  listItem.append(nameText, deleteBtn);
  list.appendChild(listItem);
  inputValue.value = " ";
});

list.addEventListener("click", (event) => {
  if (event.target.matches(".removeBtn")) {
    event.target.parentElement.remove();
  }
});
