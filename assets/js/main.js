// Display a square preview of clicked images
window.addEventListener('DOMContentLoaded', () => {
  const preview = document.getElementById('image-preview');
  const previewImg = preview.querySelector('img');
  document.querySelectorAll('.gear-item img').forEach(img => {
    img.addEventListener('click', () => {
      previewImg.src = img.src;
      preview.style.display = 'block';
    });
  });
  preview.addEventListener('click', () => {
    preview.style.display = 'none';
  });
});
