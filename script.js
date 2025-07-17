const images = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800',
  'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800',
  'https://images.unsplash.com/photo-1508923567004-3a6b8004f3d3?w=800',
  'https://images.unsplash.com/photo-1494526585095-c41746248156?w=800',
  'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800'
];

const mainImage = document.getElementById('main-image');
const thumbnailsContainer = document.getElementById('thumbnails');

// Set default main image
mainImage.src = images[0];

// Populate thumbnails
images.forEach((imgSrc, index) => {
  const thumb = document.createElement('img');
  thumb.src = imgSrc;
  thumb.alt = `Image ${index + 1}`;

  // On click, swap with main image
  thumb.addEventListener('click', () => {
    const temp = mainImage.src;
    mainImage.src = thumb.src;
    thumb.src = temp;
  });

  thumbnailsContainer.appendChild(thumb);
});
