const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");
const year = document.getElementById("year");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

if (year) {
  year.textContent = new Date().getFullYear();
}