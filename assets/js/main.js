// 圖片預覽功能
window.addEventListener('DOMContentLoaded', () => {
  const preview = document.getElementById('image-preview');
  const previewImg = preview.querySelector('img');

  // 點擊圖片開啟預覽
  document.querySelectorAll('.gear-item .image-container').forEach(container => {
    container.addEventListener('click', () => {
      const img = container.querySelector('img');
      previewImg.src = img.src;
      previewImg.alt = img.alt;
      preview.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // 點擊預覽區關閉
  preview.addEventListener('click', closePreview);

  // ESC 鍵關閉
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && preview.classList.contains('active')) {
      closePreview();
    }
  });

  function closePreview() {
    preview.classList.remove('active');
    document.body.style.overflow = '';
  }
});
