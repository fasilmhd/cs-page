document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-icon");
  const dropdownMenu = document.getElementById("dropdownMenu");

  menuToggle.addEventListener("click", () => {
    dropdownMenu.classList.toggle("show");
  });

  document.querySelectorAll(".dropdown-toggle").forEach(button => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const submenu = button.nextElementSibling;
      submenu.classList.toggle("show");
    });
  });

  document.querySelectorAll(".nested-toggle").forEach(button => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const subsubmenu = button.nextElementSibling;
      subsubmenu.classList.toggle("show");
    });
  });
});