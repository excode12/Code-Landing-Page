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
// Nodelist
const faqItems = document.querySelectorAll(".faq-card__question");

faqItems.forEach((item) => {
  item.addEventListener("click", () => {
    const currentAnswer = item.nextElementSibling;
    const currentIcon = item.querySelector(".faq-card__icon");

    // Close all other answers
    faqItems.forEach((otherItem) => {
      const otherAnswer = otherItem.nextElementSibling;
      const otherIcon = otherItem.querySelector(".faq-card__icon");

      if (otherItem !== item) {
        otherAnswer.classList.remove("show");
        otherIcon.textContent = "+";
      }
    });

    // Toggle current answer
    const isOpen = currentAnswer.classList.contains("show");
    currentAnswer.classList.toggle("show", !isOpen);
    currentIcon.textContent = isOpen ? "+" : "-";
  });
});

// REVIEW CARDS
document.addEventListener("DOMContentLoaded", () => {
  const cards = Array.from(document.querySelectorAll(".review__card"));
  let angleStep = -10;

  function applyStackTransforms() {
    cards.forEach((card, index) => {
      card.style.zIndex = cards.length - index;
      card.style.transform = `translate(-50%, -50%) rotate(${
        angleStep * index
      }deg)`;
      card.style.transition = "transform 1.5s ease, z-index 0.5s ease";
    });
  }

  function shuffleStack() {
    const topCard = cards.shift();
    cards.push(topCard);
    applyStackTransforms();
  }

  applyStackTransforms();

  setInterval(shuffleStack, 5000);
});

// AOS
document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
});
