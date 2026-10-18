// selecting element by ID

const heading = document.getElementById("heading");
console.log(heading);
console.log(heading.innerText);
heading.innerText = "Hello JavaScript";
console.log(heading.innerText);

console.log(`\n`);

// selecting element by className

const messages = document.getElementsByClassName("para");
console.log(messages.length);
for (let i = 0; i < messages.length; i++) {
  messages[i].style.color = "white";
  messages[i].style.backgroundColor = "black";
  messages[i].style.padding = "1rem";
}

// selecting element by tag

const paras = document.getElementsByTagName("p");
console.log(paras.length);

for (let i = 0; i < paras.length; i++) {
  paras[i].style.color = "white";
  paras[i].style.backgroundColor = "black";
  paras[i].style.padding = "1rem";
}

// selecting using CSS Selectors
