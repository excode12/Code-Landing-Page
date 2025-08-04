// HAMBURGER MENU
// SELECTING DOM ELEMENTS
document.addEventListener("DOMContentLoaded", () => {
  // ACCESSING THE HTML ELEMENTS
  const getMenu = document.getElementById("get-menu");
  const toggleMenu = document.querySelector(".toggle-menu");
  const closeIcon = document.querySelector(".icon-toggle__close");

  getMenu.addEventListener("click", () => {
    toggleMenu.style.display = "flex";
  });

  closeIcon.addEventListener("click", () => {
    toggleMenu.style.display = "none";
  });
});

// FAQ

