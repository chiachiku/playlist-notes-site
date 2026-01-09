// Tab switching functionality
window.addEventListener('DOMContentLoaded', () => {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.dataset.tab;

      // Update button states
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update panel visibility
      tabPanels.forEach(panel => {
        panel.classList.remove('active');
        if (panel.id === targetTab) {
          panel.classList.add('active');
        }
      });
    });
  });

  // Display a square preview of clicked images
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
