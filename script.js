// Navbar toggle
function toggleMenu() {
  document.getElementById("myTopnav").classList.toggle("responsive");
}

// Footer dynamic year
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
});

// Show button when scrolled down 100px
window.onscroll = function () {
  const btn = document.getElementById("topBtn");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Scroll to top on click
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");

  const icon = document.getElementById("toggleIcon");
  icon.classList.toggle("fa-moon-o");
  icon.classList.toggle("fa-sun-o");

  // Save preference
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
}

// On load
window.onload = () => {
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark");
    document.getElementById("toggleIcon").classList.replace("fa-moon-o", "fa-sun-o");
  }
};
