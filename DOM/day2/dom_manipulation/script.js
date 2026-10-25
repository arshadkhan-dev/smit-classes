// // // Difference between innerText, innerHTML, and textContent

// // let paragraph = document.getElementById("para");

// // // console.log(paragraph.innerHTML);
// // // console.log(paragraph.textContent);

// // // paragraph.textContent = "<strong>Welcome Students</strong>";
// // // paragraph.innerHTML = "<strong>Welcome Students</strong>";

// // // console.log(paragraph.innerText);

// // // let heading = document.getElementById("heading");

// // // console.log(heading.innerText);
// // // console.log(heading.textContent);
// // // console.log(heading.innerHTML);

// // // let container = document.getElementById("container");
// // // console.log(container.innerText);
// // // console.log(container.textContent);
// // // console.log(container.innerHTML);

// // // css styling

// // // paragraph.style.color = "blue";
// // // paragraph.style.backgroundColor = "gray";
// // // paragraph.style.padding = "5px";
// // // paragraph.style.borderRadius = "5px";

// // // set and change attribute value

// // let image = document.getElementById("image");

// // // getAttribute() :reads an attribute
// // console.log(image.getAttribute("src"));
// // console.log(image.getAttribute("alt"));

// // // setAttribute()
// // image.setAttribute("alt", "New Image");
// // console.log(image.getAttribute("alt"));

// // image.setAttribute("src", "boxing.jpg");

// // // Remove Attribute
// // image.removeAttribute("alt");
// // console.log(image.getAttribute("alt"));

// // addEventListener, remove, and toggle CSS classes

// // add
// // let message = document.getElementById("message");
// // message.classList.add("highlight");
// // message.classList.add("xyz");

// // remove
// // message.classList.remove("xyz");

// // toggle
// let btn = document.querySelector(".btn");
// btn.addEventListener("click", function () {
//   message.classList.toggle("highlight");
// });

// // contain
// // alert(message.classList.contains("normal"));

// Practice Tasks

// let heading = document.querySelector(".heading");
// let para = document.querySelector(".para");

// heading.textContent = "Hello Friends";
// para.textContent = "This is a sentence";

// console.log(heading.textContent);
// console.log(para.textContent);

// const paras = document.querySelectorAll(".para");
// console.log(paras);

// for (let para of paras) {
//   para.style.color = "purple";
// }

let body = document.getElementById("BODY");
body.style.backgroundColor = "white";
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let mode = btn.innerText;
  if (mode === "Dark Mode") {
    body.style.backgroundColor = "black";
    btn.textContent = "Light Mode";
  } else if (mode === "Light Mode") {
    body.style.backgroundColor = "white";
    btn.textContent = "Dark Mode";
  }
});
