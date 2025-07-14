window.addEventListener("DOMContentLoaded", () => {
  let lastScrollY = window.scrollY;
  const nav = document.querySelector('.hidden-nav');
  const hoverZone = document.querySelector('.nav-hover-zone');

  window.addEventListener('scroll', () => {
    if (!nav) return;

    if (window.scrollY > lastScrollY) {
      nav.classList.add('hide'); // hide on scroll down
    }

    lastScrollY = window.scrollY;
  });

  hoverZone.addEventListener('mouseenter', () => {
    nav.classList.remove('hide'); // show nav when hovering top
  });
});
