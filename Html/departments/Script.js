// script.js
document.querySelectorAll("section").forEach(section => {
  section.addEventListener("mouseenter", () => {
    section.style.boxShadow = "0 0 20px rgba(30,60,114,0.3)";
  });
  section.addEventListener("mouseleave", () => {
    section.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
  });
});



// Toggle menu (e.g., for mobile menu icon)
function toggleMenu() {
  const menu = document.getElementById("dropdownMenu");
  if (menu) {
    menu.classList.toggle("show");
  }
}

// Show/hide the "Back to Top" button on scroll
window.addEventListener("scroll", () => {
  const btn = document.getElementById("scrollToTopBtn");
  if (btn) {
    btn.style.display = window.scrollY > 300 ? "block" : "none";
  }
});

// Scroll smoothly to the top when the button is clicked
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("scrollToTopBtn");
  if (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});

// Optional: toggle dropdown submenus for Departments
document.querySelectorAll('.dropdown-toggle').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    btn.nextElementSibling?.classList.toggle('show');
  });
});

document.querySelectorAll('.nested-toggle').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    btn.nextElementSibling?.classList.toggle('show');
  });
});

// Optional: close menus if clicked outside
document.body.addEventListener('click', () => {
  document.querySelectorAll('.submenu, .subsubmenu').forEach(menu => {
    menu.classList.remove('show');
  });
});