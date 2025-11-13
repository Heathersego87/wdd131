// ===== MENU TOGGLE =====
const menuButton = document.querySelector('#menu');
const navMenu = document.querySelector('nav');

menuButton.addEventListener('click', () => {
  navMenu.classList.toggle('hide');
});

// ===== HANDLE WINDOW RESIZE =====
function handleResize() {
  if (window.innerWidth > 1000) {
    navMenu.classList.remove('hide');
  } else {
    navMenu.classList.add('hide');
  }
}

window.addEventListener('resize', handleResize);
handleResize();

// ===== IMAGE VIEWER =====
const gallery = document.querySelector('.gallery');
const body = document.querySelector('body');

gallery.addEventListener('click', (event) => {
  const clickedImage = event.target.closest('img');
  if (!clickedImage) return;

  const modal = document.createElement('dialog');
  modal.classList.add('viewer');

  const src = clickedImage.getAttribute('src');
  const alt = clickedImage.getAttribute('alt');
  const fullSrc = src.split('-')[0] + '-full.jpeg';

  modal.innerHTML = `
    <img src="${fullSrc}" alt="${alt}">
    <button class="close-viewer">X</button>
  `;

  body.appendChild(modal);
  modal.showModal();

  const closeButton = modal.querySelector('.close-viewer');
  closeButton.addEventListener('click', () => modal.close());
  modal.addEventListener('click', (event) => {
    if (event.target === modal) modal.close();
  });
  modal.addEventListener('close', () => modal.remove());
});
