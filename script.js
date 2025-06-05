const search = document.getElementById('search');
const input = search.querySelector('.input');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  search.classList.toggle('active');
  input.focus();
});

