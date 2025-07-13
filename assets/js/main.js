const container = document.getElementById('playlist-container');
const form = document.getElementById('playlist-form');
const nameInput = document.getElementById('name');
const noteInput = document.getElementById('notes');
const tagInput = document.getElementById('tags');
const ratingInput = document.getElementById('rating');

function savePlaylists(list) {
  localStorage.setItem('playlists', JSON.stringify(list));
}

function loadPlaylists() {
  const stored = localStorage.getItem('playlists');
  return stored ? JSON.parse(stored) : [];
}

function render() {
  container.innerHTML = '';
  playlists.forEach((p, index) => {
    const div = document.createElement('div');
    div.className = 'playlist-item';
    div.innerHTML = `
      <strong>${p.name}</strong>
      <span class="rating">${'★'.repeat(p.rating)}</span>
      <div>${p.notes}</div>
      <div>${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      <button data-index="${index}">Delete</button>
    `;
    div.querySelector('button').addEventListener('click', e => {
      const i = parseInt(e.target.dataset.index, 10);
      playlists.splice(i, 1);
      savePlaylists(playlists);
      render();
    });
    container.appendChild(div);
  });
}

const playlists = loadPlaylists();
render();

form.addEventListener('submit', e => {
  e.preventDefault();
  const tags = tagInput.value.split(',').map(t => t.trim()).filter(Boolean);
  playlists.push({
    name: nameInput.value,
    notes: noteInput.value,
    rating: parseInt(ratingInput.value, 10) || 0,
    tags
  });
  savePlaylists(playlists);
  form.reset();
  render();
});
