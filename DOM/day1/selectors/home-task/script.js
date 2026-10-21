const btn = document.querySelector(".icon");
const links = document.querySelector(".nav-links");

btn.onclick = () => {
  links.classList.toggle("active");
  btn.textContent = links.classList.contains("active") ? "X" : "icon";
};
