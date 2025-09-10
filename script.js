const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
let isOpen = false;

menuToggle.addEventListener("click", () => {
  isOpen = !isOpen;
  navLinks.classList.toggle("show");

  // Toggle between hamburger and X icon
  menuToggle.innerHTML = isOpen
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});


  const texts = ["I'M WEB DEVELOPER", "JACKLINE KIBIWOT"];
  const speed = 100; // typing speed in ms
  const delayBetweenTexts = 2000; // delay between full texts

  let textIndex = 0;
  let charIndex = 0;
  const typewriter = document.getElementById("typewriter");

  function type() {
    if (charIndex < texts[textIndex].length) {
      typewriter.innerHTML += texts[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, speed);
    } else {
      setTimeout(erase, delayBetweenTexts);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typewriter.innerHTML = texts[textIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, speed / 2);
    } else {
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(type, speed);
    }
  }

  // Start typing on load
  document.addEventListener("DOMContentLoaded", type);

