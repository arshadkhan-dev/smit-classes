const links = document.querySelector(".nav-links");
const bar = document.querySelector(".fa-bars");
const cross = document.querySelector(".fa-xmark");

bar.onclick = function () {
  links.classList.toggle("active");
  bar.style.display = "none";
  cross.style.display = "block";
};

cross.onclick = function () {
  links.classList.remove("active");
  bar.style.display = "block";
  cross.style.display = "none";
};
