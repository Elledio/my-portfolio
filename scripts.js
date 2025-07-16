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

// Card Toggle Visibility Script
// Select the "Show all projects" button
const showAllButton = document.getElementById('showall');

// Add event listener to the button
showAllButton.addEventListener('click', function() {
  // Select all the project cards
  const projectCards = document.querySelectorAll('.project-card');

  // Check if any of the hidden cards are visible (starting from the 3rd card)
  const areCardsVisible = [...projectCards].slice(2).some(card => card.style.display === 'block');

  if (areCardsVisible) {
    // If cards are visible, hide them
    projectCards.forEach((card, index) => {
      if (index >= 2) { // Hide cards starting from the third one
        card.style.display = 'none';
      }
    });
    // Change button text to "Show all projects"
    showAllButton.textContent = 'Show all projects';
  } else {
    // If cards are hidden, show them
    projectCards.forEach((card, index) => {
      if (index >= 2) { // Show cards starting from the third one
        card.style.display = 'block';
      }
    });
    // Change button text to "Toggle Off Projects"
    showAllButton.textContent = 'Toggle Off Projects';
  }
});



