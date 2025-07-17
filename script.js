const images = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800',
  'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800',
  'https://images.unsplash.com/photo-1508923567004-3a6b8004f3d3?w=800',
  'https://images.unsplash.com/photo-1494526585095-c41746248156?w=800',
  'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800'
];

const mainImg = document.getElementById('main');
const thumbs = document.getElementById('thumbs');

images.forEach((src, index) => {
  // Skip the first one (already main)
  if (index === 0) return;

  const thumb = document.createElement('img');
  thumb.src = src;
  thumb.addEventListener('click', () => {
    const currentMain = mainImg.src;
    mainImg.src = src;
    thumb.src = currentMain;
  });
  thumbs.appendChild(thumb);
});
