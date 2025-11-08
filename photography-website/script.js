// SET CURRENT YEAR
document.getElementById('year').textContent = new Date().getFullYear();

// HERO BUTTON SMOOTH SCROLL
document.querySelector('.hero-content .btn').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
});

// NAVIGATION HIGHLIGHT ON SCROLL
const sections = document.querySelectorAll('

// ===========================
// LIGHTBOX FUNCTIONALITY
// ===========================
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');
const galleryImages = document.querySelectorAll('.gallery img');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});
