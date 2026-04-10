// AMAZON REDIRECT
function goToAmazon(link) {
  window.open(link, "_blank");
}

// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    nav.style.background = "black";
  } else {
    nav.style.background = "transparent";
  }
});

// FADE-IN ON SCROLL
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.3
};

const appearOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("show");
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// OPTIONAL: TRUE PARALLAX (JS ENHANCED)
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;

  document.querySelectorAll(".hero, .car-section").forEach(section => {
    section.style.backgroundPositionY = `${scrolled * 0.5}px`;
  });
});