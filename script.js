// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Select all gallery items
  const galleryItems = document.querySelectorAll('.gallery-container');

  // Add mouseover and mouseout event listeners to each gallery item
  galleryItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      const img = item.querySelector('img');
      const photoInfo = item.querySelector('.photo-info');
      img.style.transform = 'scale(1.03)';
      img.style.filter = 'blur(8px) grayscale(100%)';
      photoInfo.style.transform = 'translateY(-10px)';
      item.querySelector('.photo-info a').style.opacity = '1';
    });

    item.addEventListener('mouseout', () => {
      const img = item.querySelector('img');
      const photoInfo = item.querySelector('.photo-info');
      img.style.transform = 'scale(1)';
      img.style.filter = 'none';
      photoInfo.style.transform = 'translateY(20px)';
      item.querySelector('.photo-info a').style.opacity = '0';
    });
  });

  // Function to make the gallery responsive
  function makeResponsive() {
    const gallery = document.querySelector('.gallery');
    if (window.innerWidth < 768) {
      gallery.style.gridTemplateColumns = '1fr';
    } else if (window.innerWidth < 1024) {
      gallery.style.gridTemplateColumns = '1fr 1fr';
    } else {
      gallery.style.gridTemplateColumns = '1fr 1fr 1fr 1fr';
    }
  }

  // Initial call to make the gallery responsive
  makeResponsive();

  // Call the makeResponsive function on window resize
  window.addEventListener('resize', makeResponsive);
});
