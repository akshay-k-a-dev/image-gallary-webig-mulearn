const imageUrls = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70',
  'https://images.unsplash.com/photo-1508923567004-3a6b8004f3d3',
  'https://images.unsplash.com/photo-1494526585095-c41746248156',
  'https://images.unsplash.com/photo-1512453979798-5ea266f8880c',
  'https://images.unsplash.com/photo-1518717758536-85ae29035b6d',
  'https://images.unsplash.com/photo-1501706362039-c6e80948b10c',
  'https://images.unsplash.com/photo-1580422333077-00c07b97f4b3',
  'https://images.unsplash.com/photo-1584270354949-3adb3034c9a4',
  'https://images.unsplash.com/photo-1495567720989-cebdbdd97913'
];

const gallery = document.getElementById('gallery');

imageUrls.forEach(url => {
  const img = document.createElement('img');
  img.src = `${url}?w=800&auto=format&fit=crop`; // optional resizing
  img.alt = "Gallery Image";
  gallery.appendChild(img);
});
