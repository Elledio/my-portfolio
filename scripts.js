// Navigation script
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.style.opacity = "0";
  } else {
    nav.style.opacity = "1";
  }
});

nav.addEventListener("mouseenter", () => {
  nav.style.opacity = "1";
});
nav.addEventListener("mouseleave", () => {
  if (window.scrollY > 50) {
    nav.style.opacity = "0";
  }
});

// Slideshow credits-style script
const images = [
  'bgimages/slide1.jpg',
  'bgimages/slide2.jpg',
  'bgimages/slide3.jpg'
];

const track = document.getElementById('slideshow-track');

// Append all images twice for smooth loop
images.concat(images).forEach(src => {
  const img = document.createElement('img');
  img.src = src;
  img.alt = '';
  track.appendChild(img);
});



