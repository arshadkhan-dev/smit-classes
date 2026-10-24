// Difference between innerText, innerHTML, and textContent

let paragraph = document.getElementById("para");

// console.log(paragraph.innerHTML);
// console.log(paragraph.textContent);

// paragraph.textContent = "<strong>Welcome Students</strong>";
// paragraph.innerHTML = "<strong>Welcome Students</strong>";

// console.log(paragraph.innerText);

// let heading = document.getElementById("heading");

// console.log(heading.innerText);
// console.log(heading.textContent);
// console.log(heading.innerHTML);

// let container = document.getElementById("container");
// console.log(container.innerText);
// console.log(container.textContent);
// console.log(container.innerHTML);

// css styling

// paragraph.style.color = "blue";
// paragraph.style.backgroundColor = "gray";
// paragraph.style.padding = "5px";
// paragraph.style.borderRadius = "5px";

// set and change attribute value

let image = document.getElementById("image");

// getAttribute()
console.log(image.getAttribute("src"));
console.log(image.getAttribute("alt"));

// setAttribute()
image.setAttribute("alt", "New Image");
console.log(image.getAttribute("alt"));
