function setupSlider(sliderId) {
  const slider = document.querySelector(`.slider[data-slider="${sliderId}"]`);
  const slides = slider.querySelectorAll(".slides img");
  const dotsContainer = document.getElementById(`dots${sliderId}`);
  slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.addEventListener("click", () => showSlide(sliderId, i));
    dotsContainer.appendChild(dot);
  });
  updateDots(sliderId, 0);
}

function showSlide(sliderId, index) {
  const slider = document.querySelector(`.slider[data-slider="${sliderId}"]`);
  const slides = slider.querySelectorAll(".slides img");
  slides.forEach((img) => img.classList.remove("active"));
  slides[index].classList.add("active");
  updateDots(sliderId, index);
}

function nextSlide(sliderId) {
  const slider = document.querySelector(`.slider[data-slider="${sliderId}"]`);
  const slides = slider.querySelectorAll(".slides img");
  let index = [...slides].findIndex((img) => img.classList.contains("active"));
  index = (index + 1) % slides.length;
  showSlide(sliderId, index);
}

function prevSlide(sliderId) {
  const slider = document.querySelector(`.slider[data-slider="${sliderId}"]`);
  const slides = slider.querySelectorAll(".slides img");
  let index = [...slides].findIndex((img) => img.classList.contains("active"));
  index = (index - 1 + slides.length) % slides.length;
  showSlide(sliderId, index);
}

function updateDots(sliderId, activeIndex) {
  const dots = document.querySelectorAll(`#dots${sliderId} span`);
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[activeIndex].classList.add("active");
}

setupSlider(1);
setupSlider(2);

const texts = ["Shivoham", "Lord Shiva Gallery"];
let textIndex = 0;
let charIndex = 0;
let typingSpeed = 120;
let erasingSpeed = 80;
let delayBetweenTexts = 1500;

const textElement = document.querySelector(".typewriter-text");

function type() {
  if (charIndex < texts[textIndex].length) {
    textElement.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetweenTexts);
  }
}

function erase() {
  if (charIndex > 0) {
    textElement.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(type, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (texts.length) setTimeout(type, delayBetweenTexts);
});

function revealOnScroll() {
  const shivoham = document.querySelector("#shivoham .app-section");
  const rect = shivoham.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    shivoham.classList.add("show");
  }
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

let slideIndices = {};

function showSlide(sliderId, index) {
  let slider = document.querySelector(`.slider[data-slider="${sliderId}"]`);
  let slides = slider.querySelectorAll(".slides img");
  let dots = slider.querySelectorAll(".dots span");

  if (index >= slides.length) index = 0;
  if (index < 0) index = slides.length - 1;

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[index].classList.add("active");
  dots[index].classList.add("active");

  slideIndices[sliderId] = index;
}

function nextSlide(sliderId) {
  showSlide(sliderId, slideIndices[sliderId] + 1);
}

function prevSlide(sliderId) {
  showSlide(sliderId, slideIndices[sliderId] - 1);
}

function initSlider(sliderId) {
  let slider = document.querySelector(`.slider[data-slider="${sliderId}"]`);
  let slides = slider.querySelectorAll(".slides img");
  let dotsContainer = slider.querySelector(".dots");

  // Clear old dots before adding new ones
  dotsContainer.innerHTML = "";

  // Create dots
  slides.forEach((_, i) => {
    let dot = document.createElement("span");
    dot.addEventListener("click", () => showSlide(sliderId, i));
    dotsContainer.appendChild(dot);
  });

  slideIndices[sliderId] = 0;
  showSlide(sliderId, 0);

  // Auto slide every 3s
  setInterval(() => {
    nextSlide(sliderId);
  }, 3000);
}

// Initialize all sliders
document.addEventListener("DOMContentLoaded", () => {
  initSlider(1);
  initSlider(2);
});

document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  document.querySelectorAll(".slides img").forEach((img) => {
    img.addEventListener("click", () => {
      lightbox.classList.add("active");
      lightboxImg.src = img.src;
    });
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg) {
      closeLightbox();
    }
  });
});

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("active");
}

function initScroller(sliderId) {
  const slider = document.querySelector(`.slider[data-slider="${sliderId}"]`);
  const slides = slider.querySelector(".slides");
  const images = slider.querySelectorAll(".slides img");
  const dotsContainer = slider.querySelector(".dots");

  let index = 0;
  let visibleCount = window.innerWidth >= 768 ? 2 : 1; // responsive count
  let maxIndex = Math.max(0, images.length - visibleCount);

  function updateScroll() {
    const imgWidth = images[0].getBoundingClientRect().width + 15; // width + gap
    slides.style.transform = `translateX(-${index * imgWidth}px)`;

    // update dots
    dotsContainer.querySelectorAll("span").forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  // Create dots
  dotsContainer.innerHTML = "";
  for (let i = 0; i <= maxIndex; i++) {
    let dot = document.createElement("span");
    dot.addEventListener("click", () => {
      index = i;
      updateScroll();
    });
    dotsContainer.appendChild(dot);
  }

  updateScroll();

  // Auto scroll
  setInterval(() => {
    index = index < maxIndex ? index + 1 : 0;
    updateScroll();
  }, 3000);

  // Recalculate on resize
  window.addEventListener("resize", () => {
    visibleCount = window.innerWidth >= 768 ? 2 : 1;
    maxIndex = Math.max(0, images.length - visibleCount);
    index = Math.min(index, maxIndex);
    updateScroll();
  });
}

// Init all sliders
document.addEventListener("DOMContentLoaded", () => {
  initScroller(1);
  initScroller(2);
});
