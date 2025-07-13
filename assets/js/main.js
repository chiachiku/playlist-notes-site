document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('add-form');
  const container = document.getElementById('playlist-container');

  const load = () => JSON.parse(localStorage.getItem('playlist') || '[]');
  const save = (list) => localStorage.setItem('playlist', JSON.stringify(list));

  let playlist = load();

  const render = () => {
    container.innerHTML = '';
    playlist.forEach((item, index) => {
      const div = document.createElement('div');
      div.className = 'playlist-item';
      div.innerHTML = `
        <h3>${item.title} - ${item.artist}</h3>
        <div class="rating">${'★'.repeat(item.rating)}${'☆'.repeat(5 - item.rating)}</div>
        <div class="tags">${item.tags.map(t => '#' + t).join(' ')}</div>
        <p class="notes">${item.notes}</p>
      `;
      const del = document.createElement('button');
      del.textContent = '刪除';
      del.addEventListener('click', () => {
        playlist.splice(index, 1);
        save(playlist);
        render();
      });
      div.appendChild(del);
      container.appendChild(div);
    });
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = form.title.value.trim();
    const artist = form.artist.value.trim();
    const rating = parseInt(form.rating.value, 10) || 0;
    const tags = form.tags.value.split(',').map(t => t.trim()).filter(t => t);
    const notes = form.notes.value.trim();

    if (!title) return;

    playlist.push({ title, artist, rating, tags, notes });
    save(playlist);
    form.reset();
    render();
  });

  render();
});
