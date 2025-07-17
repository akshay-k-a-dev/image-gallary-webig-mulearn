const scrollDisplay = document.getElementById('imgScroll');
const displayImg = document.getElementById('imgMain');

const images = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800',
  'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800',
  'https://images.unsplash.com/photo-1508923567004-3a6b8004f3d3?w=800',
  'https://images.unsplash.com/photo-1494526585095-c41746248156?w=800',
  'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800'
];

for (let i = 0; i < images.length; i++) {
  const newImg = document.createElement('img');
  newImg.src = images[i];
  newImg.alt = 'Image ' + (i + 1);

  newImg.addEventListener('click', () => {
    displayImg.src = newImg.src;
    displayImg.alt = newImg.alt;
  });

  scrollDisplay.appendChild(newImg);
}
